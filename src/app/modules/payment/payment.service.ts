import { stripe } from '../../helpers/stripe';
import { prisma } from '../../shared/prisma';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { OrderStatus } from '../../types/common';

const createPaymentIntent = async (orderId: string, userId: string) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      produce: true,
    },
  });

  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }

  if (order.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized to pay for this order');
  }

  if (order.status === 'Confirmed' || order.status === 'Delivered') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'This order has already been paid');
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round((order.totalPrice || order.produce.price * order.quantity) * 100), // Convert to cents
    currency: 'bdt',
    metadata: {
      orderId: order.id,
      userId: userId,
      produceId: order.produceId,
    },
  });

  return {
    clientSecret: paymentIntent.client_secret,
    orderId: order.id,
    amount: order.totalPrice,
  };
};

const confirmPayment = async (paymentIntentId: string) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
  
  if (paymentIntent.status !== 'succeeded') {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Payment not successful');
  }

  const orderId = paymentIntent.metadata.orderId;

  if (!orderId) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid payment intent');
  }

  const updatedOrder = await prisma.order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.Confirmed,
    },
    include: {
      produce: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return updatedOrder;
};

const createCheckoutSession = async (orderId: string, userId: string) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      produce: true,
    },
  });

  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }

  if (order.userId !== userId) {
    throw new ApiError(httpStatus.FORBIDDEN, 'You are not authorized to pay for this order');
  }

   const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'bdt',
          product_data: {
            name: order.produce.name,
            description: order.produce.description || 'Organic produce purchase',
          },
          unit_amount: Math.round((order.totalPrice || order.produce.price * order.quantity) * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/payment?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/payment?canceled=true`,
    metadata: {
      orderId: order.id,
      userId: userId,
    },
  });

  return {
    sessionId: session.id,
    url: session.url,
  };
};

const handleWebhook = async (signature: string, payload: Buffer) => {
  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    config.stripeWebhookSecret as string
  );

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const orderId = session.metadata?.orderId;

    if (orderId) {
      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.Confirmed,
        },
      });
    }
  }

  return { received: true };
};

export const PaymentService = {
  createPaymentIntent,
  confirmPayment,
  createCheckoutSession,
  handleWebhook,
};
