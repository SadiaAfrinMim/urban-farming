export declare const OrderService: {
    getOrders: (user: any) => Promise<any>;
    getOrderById: (id: string, user: any) => Promise<any>;
    createOrder: (userId: string, payload: {
        produceId: string;
        quantity?: number;
    }) => Promise<any>;
    updateOrderStatus: (id: string, status: OrderStatus) => Promise<any>;
};
//# sourceMappingURL=order.service.d.ts.map