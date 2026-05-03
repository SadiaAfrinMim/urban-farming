"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const node_cron_1 = __importDefault(require("node-cron"));
const app_js_1 = __importDefault(require("./app.js"));
const index_js_1 = __importDefault(require("./config/index.js"));
const order_service_js_1 = require("./app/modules/order/order.service.js");
const notification_service_js_1 = require("./app/modules/notification/notification.service.js");
const prisma_1 = require("./app/shared/prisma");
const client_1 = require("@prisma/client");
async function bootstrap() {
    // This variable will hold our server instance
    let server;
    let io;
    try {
        // Start the server
        server = app_js_1.default.listen(index_js_1.default.port, () => {
            console.log(`🚀 Server is running on http://localhost:${index_js_1.default.port}`);
        });
        // Initialize Socket.IO
        io = new socket_io_1.Server(server, {
            cors: {
                origin: ['http://localhost:3000', 'http://localhost:3001'],
                credentials: true
            }
        });
        // Store io instance globally for use in controllers
        global.io = io;
        io.on('connection', (socket) => {
            console.log('User connected:', socket.id);
            socket.on('disconnect', () => {
                console.log('User disconnected:', socket.id);
            });
        });
        // Schedule cron job to cancel expired orders every 15 minutes
        node_cron_1.default.schedule('*/15 * * * *', async () => {
            try {
                const cancelledCount = await order_service_js_1.OrderService.cancelExpiredOrders();
                if (cancelledCount > 0) {
                    console.log(`🧹 Cancelled ${cancelledCount} expired orders and restored stock`);
                    // Notify admins about expired orders cleanup
                    try {
                        const admins = await prisma_1.prisma.user.findMany({
                            where: { role: 'Admin' },
                        });
                        for (const admin of admins) {
                            await notification_service_js_1.NotificationService.createNotification(admin.id, client_1.NotificationType.SYSTEM, 'Expired Orders Cleaned Up', `${cancelledCount} expired pending orders were cancelled and stock was restored.`, {
                                cancelledCount,
                                type: 'expired_orders_cleanup',
                                timestamp: new Date().toISOString(),
                            });
                        }
                    }
                    catch (notificationError) {
                        console.error('Failed to create cleanup notification:', notificationError);
                    }
                }
            }
            catch (error) {
                console.error('Error cancelling expired orders:', error);
            }
        });
        console.log('⏰ Order cleanup cron job scheduled (every 15 minutes)');
        // Function to gracefully shut down the server
        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    console.log('Server closed gracefully.');
                    process.exit(1); // Exit with a failure code
                });
            }
            else {
                process.exit(1);
            }
        };
        // Handle unhandled promise rejections
        process.on('unhandledRejection', (error) => {
            console.log('Unhandled Rejection is detected, we are closing our server...');
            if (server) {
                server.close(() => {
                    console.log(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    }
    catch (error) {
        console.error('Error during server startup:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=local-server.js.map