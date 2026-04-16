export declare const ProduceService: {
    getAllProduces: (page: number, limit: number) => Promise<{
        data: any;
        meta: {
            page: number;
            limit: number;
            total: any;
            totalPages: number;
        };
    }>;
    searchProduces: (category?: string, name?: string) => Promise<any>;
    getProduceById: (id: string) => Promise<any>;
    createProduce: (vendorId: string, payload: {
        name: string;
        description?: string;
        price: number;
        category: string;
        availableQuantity: number;
    }) => Promise<any>;
    updateProduce: (id: string, payload: Partial<{
        name: string;
        description: string;
        price: number;
        category: string;
        availableQuantity: number;
    }>) => Promise<any>;
    deleteProduce: (id: string) => Promise<void>;
};
//# sourceMappingURL=produce.service.d.ts.map