import { Request, Response } from 'express';
export declare const ChatController: {
    sendMessage: (req: Request, res: Response) => Promise<void>;
    getMessages: (req: Request, res: Response) => Promise<void>;
    handleChatMessage: (req: Request, res: Response) => Promise<void>;
    healthCheck: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=chat.controller.d.ts.map