export declare const RentalService: {
    getAllRentalSpaces: () => Promise<any>;
    searchRentalSpaces: (location?: string) => Promise<any>;
    getRentalSpaceById: (id: string) => Promise<any>;
    createRentalSpace: (vendorId: string, payload: {
        location: string;
        size: string;
        price: number;
        availability?: boolean;
    }) => Promise<any>;
    updateRentalSpace: (id: string, payload: Partial<{
        location: string;
        size: string;
        price: number;
        availability: boolean;
    }>) => Promise<any>;
    deleteRentalSpace: (id: string) => Promise<void>;
    toggleAvailability: (id: string, availability: boolean) => Promise<any>;
};
//# sourceMappingURL=rental.service.d.ts.map