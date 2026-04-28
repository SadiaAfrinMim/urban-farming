import { Request, Response } from 'express';
export declare const PaymentController: {
    createPaymentIntent: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    confirmPayment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    createCheckoutSession: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    handleWebhook: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map