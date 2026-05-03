export declare const ConversationService: {
    getOrCreateConversation: (userId1: number, userId2: number) => Promise<{
        participant1: {
            id: number;
            name: string;
            profileImage: string | null;
        };
        participant2: {
            id: number;
            name: string;
            profileImage: string | null;
        };
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        participant1Id: number;
        participant2Id: number;
    }>;
    getUserConversations: (userId: number) => Promise<{
        unreadCount: number;
        participant1: {
            id: number;
            name: string;
            profileImage: string | null;
        };
        participant2: {
            id: number;
            name: string;
            profileImage: string | null;
        };
        messages: ({
            sender: {
                id: number;
                name: string;
            };
        } & {
            isRead: boolean;
            createdAt: Date;
            id: number;
            content: string;
            conversationId: number;
            senderId: number;
        })[];
        createdAt: Date;
        updatedAt: Date;
        id: number;
        participant1Id: number;
        participant2Id: number;
    }[]>;
    sendMessage: (conversationId: number, senderId: number, content: string) => Promise<{
        sender: {
            id: number;
            name: string;
            profileImage: string | null;
        };
    } & {
        isRead: boolean;
        createdAt: Date;
        id: number;
        content: string;
        conversationId: number;
        senderId: number;
    }>;
    getConversationMessages: (conversationId: number, userId: number) => Promise<({
        sender: {
            id: number;
            name: string;
            profileImage: string | null;
        };
    } & {
        isRead: boolean;
        createdAt: Date;
        id: number;
        content: string;
        conversationId: number;
        senderId: number;
    })[]>;
    markMessagesAsRead: (conversationId: number, userId: number) => Promise<{
        success: boolean;
    }>;
};
//# sourceMappingURL=conversation.service.d.ts.map