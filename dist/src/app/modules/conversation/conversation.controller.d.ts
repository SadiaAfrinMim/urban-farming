import { Request, Response } from 'express';
export declare const ConversationController: {
    getUserConversations: (req: Request, res: Response) => Promise<void>;
    getOrCreateConversation: (req: Request, res: Response) => Promise<void>;
    sendMessage: (req: Request, res: Response) => Promise<void>;
    getConversationMessages: (req: Request, res: Response) => Promise<void>;
    markMessagesAsRead: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=conversation.controller.d.ts.map