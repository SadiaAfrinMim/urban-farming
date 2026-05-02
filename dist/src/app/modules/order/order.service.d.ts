import { OrderStatus } from '../../types/common.js';
import { IJWTPayload } from '../../types/common.js';
export declare const OrderService: {
    getOrders: (user: IJWTPayload) => Promise<({
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
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
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
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
    })[]>;
    getOrderById: (id: string, user: IJWTPayload) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
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
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
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
    }>;
    createOrder: (userId: string, payload: {
        produceId?: string | number;
        rentalSpaceId?: string | number;
        quantity?: number;
        totalPrice?: number;
    }) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.UserRole;
            status: import(".prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        };
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
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
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
    }>;
    updateOrderStatus: (id: string, status: OrderStatus) => Promise<{
        id: number;
        userId: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    }>;
    cancelExpiredOrders: () => Promise<number>;
};
//# sourceMappingURL=order.service.d.ts.map