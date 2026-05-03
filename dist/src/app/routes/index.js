"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_js_1 = require("../modules/auth/auth.routes.js");
const rental_routes_js_1 = require("../modules/rental/rental.routes.js");
const produce_routes_js_1 = require("../modules/produce/produce.routes.js");
const order_routes_js_1 = require("../modules/order/order.routes.js");
const community_routes_js_1 = require("../modules/community/community.routes.js");
const sustainability_routes_js_1 = require("../modules/sustainability/sustainability.routes.js");
const user_routes_js_1 = require("../modules/user/user.routes.js");
const vendor_routes_js_1 = require("../modules/vendor/vendor.routes.js");
const admin_routes_js_1 = require("../modules/admin/admin.routes.js");
const payment_routes_js_1 = require("../modules/payment/payment.routes.js");
const customer_routes_js_1 = require("../modules/customer/customer.routes.js");
const home_routes_js_1 = require("../modules/home/home.routes.js");
const notification_routes_js_1 = require("../modules/notification/notification.routes.js");
const chat_routes_js_1 = require("../modules/chat/chat.routes.js");
const plant_tracking_routes_js_1 = require("../modules/plant-tracking/plant-tracking.routes.js");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_routes_js_1.authRoutes
    },
    {
        path: '/rentals',
        route: rental_routes_js_1.rentalRoutes
    },
    {
        path: '/marketplace',
        route: produce_routes_js_1.produceRoutes
    },
    {
        path: '/orders',
        route: order_routes_js_1.orderRoutes
    },
    {
        path: '/produces',
        route: produce_routes_js_1.produceRoutes
    },
    {
        path: '/community',
        route: community_routes_js_1.communityRoutes
    },
    {
        path: '/sustainability',
        route: sustainability_routes_js_1.sustainabilityRoutes
    },
    {
        path: '/user',
        route: user_routes_js_1.userRoutes
    },
    {
        path: '/vendor',
        route: vendor_routes_js_1.VendorRoutes
    },
    {
        path: '/customer',
        route: customer_routes_js_1.customerRoutes
    },
    {
        path: '/spaces',
        route: rental_routes_js_1.rentalRoutes
    },
    {
        path: '/admin',
        route: admin_routes_js_1.AdminRoutes
    },
    {
        path: '/payments',
        route: payment_routes_js_1.paymentRoutes
    },
    {
        path: '/home',
        route: home_routes_js_1.homeRoutes
    },
    {
        path: '/notifications',
        route: notification_routes_js_1.notificationRoutes
    },
    {
        path: '/chat',
        route: chat_routes_js_1.chatRoutes
    },
    {
        path: '/plant-tracking',
        route: plant_tracking_routes_js_1.plantTrackingRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map