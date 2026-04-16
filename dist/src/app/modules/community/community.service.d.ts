export declare const CommunityService: {
    getAllPosts: () => Promise<any>;
    getPostById: (id: string) => Promise<any>;
    createPost: (userId: string, payload: {
        postContent: string;
    }) => Promise<any>;
    updatePost: (id: string, user: any, payload: Partial<{
        postContent: string;
    }>) => Promise<any>;
    deletePost: (id: string, user: any) => Promise<void>;
};
//# sourceMappingURL=community.service.d.ts.map