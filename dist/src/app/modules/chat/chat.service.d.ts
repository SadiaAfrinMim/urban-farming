export declare const ChatService: {
    sendMessage: (payload: {
        userId: string | number;
        message: string;
        isBot?: boolean;
    }) => Promise<{
        id: number;
        userId: any;
        message: string;
        isBot: boolean;
        timestamp: Date;
    }>;
    getMessages: (userId: string | number) => Promise<{
        message: string;
        id: number;
        userId: number | null;
        isBot: boolean;
        timestamp: Date;
    }[]>;
    generateBotResponse: (userMessage: string) => Promise<string>;
    handleChatMessage: (payload: {
        userId: string;
        message: string;
    }) => Promise<{
        id: number;
        userId: any;
        message: string;
        isBot: boolean;
        timestamp: Date;
    }>;
};
//# sourceMappingURL=chat.service.d.ts.map