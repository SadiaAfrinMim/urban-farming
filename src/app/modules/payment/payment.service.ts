import { stripe } from '../../helpers/stripe';
import { prisma } from '../../shared/prisma';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';
import { OrderStatus } from '../../types/common';

const createPaymentIntent = async (orderId: string, userId: string) => {
  const order = await prisma.order.findUnique({
    where: { id: parseInt(orderId) },
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

  const amount = order.totalPrice || order.produce.price * order.quantity;

  // Convert BDT to USD (approximate rate: 1 USD = 120 BDT)
  const usdAmount = Math.round(amount / 120 * 100); // Convert to USD cents

  // Ensure minimum amount of $0.50 (50 cents)
  const finalAmount = Math.max(usdAmount, 50);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount, // Amount in USD cents
    currency: 'usd',
    metadata: {
      orderId: order.id,
      userId: userId,
      produceId: order.produceId,
      originalAmount: amount.toString(),
      originalCurrency: 'bdt',
    },
  });

  return {
    clientSecret: paymentIntent.client_secret,
    orderId: order.id,
    amount: finalAmount / 100, // Return USD amount
    originalAmount: amount, // Original BDT amount
    currency: 'usd',
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
    where: { id: parseInt(orderId) },
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
    where: { id: parseInt(orderId) },
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

  const amount = order.totalPrice || order.produce.price * order.quantity;

  // Convert BDT to USD (approximate rate: 1 USD = 120 BDT)
  const usdAmount = Math.round(amount / 120 * 100); // Convert to USD cents

  // Ensure minimum amount of $0.50 (50 cents)
  const finalAmount = Math.max(usdAmount, 50);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: order.produce.name,
            description: order.produce.description || 'Organic produce purchase',
          },
          unit_amount: finalAmount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/payment?canceled=true`,
    metadata: {
      orderId: order.id,
      userId: userId,
      originalAmount: amount.toString(),
      originalCurrency: 'bdt',
    },
  });

  return {
    sessionId: session.id,
    url: session.url,
    amount: finalAmount / 100, // Return USD amount
    originalAmount: amount, // Original BDT amount
    currency: 'usd',
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
        where: { id: parseInt(orderId) },
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
