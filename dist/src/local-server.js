import { Server as SocketServer } from 'socket.io';
import cron from 'node-cron';
import app from './app.js';
import config from './config/index.js';
import { OrderService } from './app/modules/order/order.service.js';
import { NotificationService } from './app/modules/notification/notification.service.js';
import { prisma } from './app/shared/prisma.js';
import { NotificationType } from '@prisma/client';
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://urban-farming.vercel.app',
    'https://urban-farming-sable.vercel.app',
    'https://urban-farming-rt02.onrender.com',
];
async function bootstrap() {
    // This variable will hold our server instance
    let server;
    let io;
    try {
        // Start the server
        server = app.listen(config.port, () => {
            console.log(`🚀 Server is running on http://localhost:${config.port}`);
        });
        // Initialize Socket.IO
        io = new SocketServer(server, {
            cors: {
                origin: allowedOrigins,
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
        cron.schedule('*/15 * * * *', async () => {
            try {
                const cancelledCount = await OrderService.cancelExpiredOrders();
                if (cancelledCount > 0) {
                    console.log(`🧹 Cancelled ${cancelledCount} expired orders and restored stock`);
                    // Notify admins about expired orders cleanup
                    try {
                        const admins = await prisma.user.findMany({
                            where: { role: 'Admin' },
                        });
                        for (const admin of admins) {
                            await NotificationService.createNotification(admin.id, NotificationType.SYSTEM, 'Expired Orders Cleaned Up', `${cancelledCount} expired pending orders were cancelled and stock was restored.`, {
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