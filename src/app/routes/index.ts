import express from 'express';

import { authRoutes } from '../modules/auth/auth.routes.ts';
import { rentalRoutes } from '../modules/rental/rental.routes.ts';
import { produceRoutes } from '../modules/produce/produce.routes.ts';
import { orderRoutes } from '../modules/order/order.routes.ts';
import { communityRoutes } from '../modules/community/community.routes.ts';
import { sustainabilityRoutes } from '../modules/sustainability/sustainability.routes.ts';
import { userRoutes } from '../modules/user/user.routes.ts';
import { VendorRoutes } from '../modules/vendor/vendor.routes.ts';
import { AdminRoutes } from '../modules/admin/admin.routes.ts';
import { paymentRoutes } from '../modules/payment/payment.routes.ts';
import { customerRoutes } from '../modules/customer/customer.routes.ts';
import { homeRoutes } from '../modules/home/home.routes.ts';
import { notificationRoutes } from '../modules/notification/notification.routes.ts';
import { chatRoutes } from '../modules/chat/chat.routes.ts';
import { plantTrackingRoutes } from '../modules/plant-tracking/plant-tracking.routes.ts';

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
        path: '/plant-tracking',
        route: plantTrackingRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;