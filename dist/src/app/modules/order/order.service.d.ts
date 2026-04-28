import { OrderStatus } from '../../types/common';
import { IJWTPayload } from '../../types/common';
export declare const OrderService: {
    getOrders: (user: IJWTPayload) => Promise<({
        user: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        };
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                profileImage: string | null;
                createdAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
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
    })[]>;
    getOrderById: (id: string, user: IJWTPayload) => Promise<{
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
    createOrder: (userId: string, payload: {
        produceId: string | number;
        quantity?: number;
        totalPrice?: number;
    }) => Promise<{
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
    updateOrderStatus: (id: string, status: OrderStatus) => Promise<{
        id: number;
        status: import("../../../../prisma/prisma/generated").$Enums.OrderStatus;
        userId: number;
        vendorId: number;
        produceId: number | null;
        rentalSpaceId: number | null;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
    } | undefined>;
    cancelExpiredOrders: () => Promise<number>;
};
//# sourceMappingURL=order.service.d.ts.map