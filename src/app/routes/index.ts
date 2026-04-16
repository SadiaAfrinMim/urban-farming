import express from 'express';

import { authRoutes } from '../modules/auth/auth.routes';
import { rentalRoutes } from '../modules/rental/rental.routes';
import { produceRoutes } from '../modules/produce/produce.routes';
import { orderRoutes } from '../modules/order/order.routes';
import { communityRoutes } from '../modules/community/community.routes';
import { sustainabilityRoutes } from '../modules/sustainability/sustainability.routes';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/rental',
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
        path: '/community',
        route: communityRoutes
    },
    {
        path: '/sustainability',
        route: sustainabilityRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;