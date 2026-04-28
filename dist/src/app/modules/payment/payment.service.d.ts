export declare const PaymentService: {
    createPaymentIntent: (orderId: string, userId: string) => Promise<{
        clientSecret: string | null;
        orderId: number;
        amount: number;
    }>;
    confirmPayment: (paymentIntentId: string) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        produce: {
            id: number;
            name: string;
            createdAt: Date;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
            availableQuantity: number;
            unit: string | null;
            isOrganic: boolean | null;
        } | null;
    } & {
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number | null;
        rentalSpaceId: number | null;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    }>;
    createCheckoutSession: (orderId: string, userId: string) => Promise<{
        sessionId: string;
        url: string | null;
    }>;
    handleWebhook: (signature: string, payload: Buffer) => Promise<{
        received: boolean;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map