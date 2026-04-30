import { Server } from 'http';
import { Server as SocketServer } from 'socket.io';
import cron from 'node-cron';
import app from './app';
import config from './config';
import { OrderService } from './app/modules/order/order.service';
import { NotificationService } from './app/modules/notification/notification.service';
import { prisma } from './app/shared/prisma';
import { NotificationType } from '@prisma/client';

async function bootstrap() {
    // This variable will hold our server instance
    let server: Server;
    let io: SocketServer;

    try {
        // Start the server
        server = app.listen(config.port, () => {
            console.log(`🚀 Server is running on http://localhost:${config.port}`);
        });

        // Initialize Socket.IO
        io = new SocketServer(server, {
            cors: {
                origin: ['http://localhost:3000', 'http://localhost:3001'],
                credentials: true
            }
        });

        // Store io instance globally for use in controllers
        (global as any).io = io;

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
                            await NotificationService.createNotification(
                                admin.id,
                                NotificationType.SYSTEM,
                                'Expired Orders Cleaned Up',
                                `${cancelledCount} expired pending orders were cancelled and stock was restored.`,
                                {
                                    cancelledCount,
                                    type: 'expired_orders_cleanup',
                                    timestamp: new Date().toISOString(),
                                }
                            );
                        }
                    } catch (notificationError) {
                        console.error('Failed to create cleanup notification:', notificationError);
                    }
                }
            } catch (error) {
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
            } else {
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
            } else {
                process.exit(1);
            }
        });
    } catch (error) {
        console.error('Error during server startup:', error);
        process.exit(1);
    }
}

bootstrap();