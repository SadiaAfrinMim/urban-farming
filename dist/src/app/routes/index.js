"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const rental_routes_1 = require("../modules/rental/rental.routes");
const produce_routes_1 = require("../modules/produce/produce.routes");
const order_routes_1 = require("../modules/order/order.routes");
const community_routes_1 = require("../modules/community/community.routes");
const sustainability_routes_1 = require("../modules/sustainability/sustainability.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_1.authRoutes
    },
    {
        path: '/rental',
        route: rental_routes_1.rentalRoutes
    },
    {
        path: '/marketplace',
        route: produce_routes_1.produceRoutes
    },
    {
        path: '/orders',
        route: order_routes_1.orderRoutes
    },
    {
        path: '/community',
        route: community_routes_1.communityRoutes
    },
    {
        path: '/sustainability',
        route: sustainability_routes_1.sustainabilityRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map