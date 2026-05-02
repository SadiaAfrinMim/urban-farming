export declare const PaymentService: {
    createPaymentIntent: (orderId: string, userId: string) => Promise<{
        clientSecret: string | null;
        orderId: number;
        amount: number;
        originalAmount: number;
        currency: string;
        isRentalOrder: boolean;
    }>;
    confirmPayment: (paymentIntentId: string) => Promise<{
        order: {
            user: {
                id: number;
                name: string;
                email: string;
            };
            payments: {
                id: number;
                userId: number;
                status: import(".prisma/client").$Enums.PaymentStatus;
                orderId: number;
                originalAmount: number;
                amount: number;
                currency: string;
                paymentIntentId: string;
                paymentDate: Date;
            }[];
            rentalSpace: {
                createdAt: Date;
                id: number;
                vendorId: number;
                location: string;
                size: string;
                price: number;
                availability: boolean;
                image: string | null;
                plantStatus: import(".prisma/client").$Enums.PlantHealth | null;
                lastWatered: Date | null;
            } | null;
            produce: {
                createdAt: Date;
                id: number;
                name: string;
                certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
                vendorId: number;
                price: number;
                image: string | null;
                description: string;
                category: import(".prisma/client").$Enums.ProduceCategory;
                availableQuantity: number;
                unit: string | null;
                isOrganic: boolean | null;
            } | null;
        } & {
            id: number;
            userId: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            vendorId: number;
            quantity: number;
            totalPrice: number;
            orderDate: Date;
            produceId: number | null;
            rentalSpaceId: number | null;
        };
        payment: {
            id: number;
            userId: number;
            status: import(".prisma/client").$Enums.PaymentStatus;
            orderId: number;
            originalAmount: number;
            amount: number;
            currency: string;
            paymentIntentId: string;
            paymentDate: Date;
        };
    }>;
    createCheckoutSession: (orderId: string, userId: string) => Promise<{
        sessionId: string;
        url: string | null;
        amount: number;
        originalAmount: number;
        currency: string;
    }>;
    handleWebhook: (signature: string, payload: Buffer) => Promise<{
        received: boolean;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map