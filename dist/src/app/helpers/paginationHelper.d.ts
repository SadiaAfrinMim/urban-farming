export type IOptions = {
    page?: string | number;
    limit?: string | number;
    sortBy?: string;
    sortOrder?: string;
};
type IOptionsResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
};
export declare const paginationHelper: {
    calculatePagination: (options: IOptions) => IOptionsResult;
};
export {};
//# sourceMappingURL=paginationHelper.d.ts.map