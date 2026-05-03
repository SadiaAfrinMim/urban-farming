import express from 'express';

import { authRoutes } from '../modules/auth/auth.routes.js';
import { rentalRoutes } from '../modules/rental/rental.routes.js';
import { produceRoutes } from '../modules/produce/produce.routes.js';
import { orderRoutes } from '../modules/order/order.routes.js';
import { communityRoutes } from '../modules/community/community.routes.js';
import { sustainabilityRoutes } from '../modules/sustainability/sustainability.routes.js';
import { userRoutes } from '../modules/user/user.routes.js';
import { VendorRoutes } from '../modules/vendor/vendor.routes.js';
import { AdminRoutes } from '../modules/admin/admin.routes.js';
import { paymentRoutes } from '../modules/payment/payment.routes.js';
import { customerRoutes } from '../modules/customer/customer.routes.js';
import { homeRoutes } from '../modules/home/home.routes.js';
import { notificationRoutes } from '../modules/notification/notification.routes.js';
import { chatRoutes } from '../modules/chat/chat.routes.js';
import { conversationRoutes } from '../modules/conversation/conversation.routes.js';
import { plantTrackingRoutes } from '../modules/plant-tracking/plant-tracking.routes.js';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/rentals',
        route: rentalRoutes
    },
    {
        path: '/marketplace',
        route: produceRoutes
    },
    {
        path: '/orders',
        route: orderRoutes
    },
    {
        path: '/produces',
        route: produceRoutes
    },
    {
        path: '/community',
        route: communityRoutes
    },
    {
        path: '/sustainability',
        route: sustainabilityRoutes
    },
    {
        path: '/user',
        route: userRoutes
    },
    {
        path: '/vendor',
        route: VendorRoutes
    },
    {
        path: '/customer',
        route: customerRoutes
    },
    {
        path:'/spaces',
        route: rentalRoutes
    },
    {
        path: '/admin',
        route: AdminRoutes
    },
    {
        path: '/payments',
        route: paymentRoutes
    },
    {
        path: '/home',
        route: homeRoutes
    },
    {
        path: '/notifications',
        route: notificationRoutes
    },
    {
        path: '/chat',
        route: chatRoutes
    },
    {
        path: '/conversations',
        route: conversationRoutes
    },
    {
        path: '/plant-tracking',
        route: plantTrackingRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;