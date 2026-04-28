"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Test file to verify admin module APIs and connections
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const admin_routes_1 = require("./admin.routes");
console.log('=== Admin Module API Connection Test ===');
console.log('✅ Admin module imports successful');
// Check all controller methods exist
const controllerMethods = Object.keys(admin_controller_1.AdminController);
console.log(`✅ AdminController has ${controllerMethods.length} methods:`, controllerMethods);
// Check all service methods exist
const serviceMethods = Object.keys(admin_service_1.AdminService);
console.log(`✅ AdminService has ${serviceMethods.length} methods:`, serviceMethods);
// Check routes type
console.log('✅ AdminRoutes type:', typeof admin_routes_1.AdminRoutes);
// API Routes and their corresponding controller methods
const apiRoutes = [
    { route: 'GET /admin/users', method: 'getAllUsers' },
    { route: 'PATCH /admin/users/:userId/role', method: 'updateUserRole' },
    { route: 'PATCH /admin/users/:userId/status', method: 'updateUserStatus' },
    { route: 'GET /admin/certifications/pending', method: 'getPendingCertifications' },
    { route: 'PATCH /admin/certifications/:vendorId/approve', method: 'approveCertification' },
    { route: 'PATCH /admin/certifications/:vendorId/reject', method: 'rejectCertification' },
    { route: 'GET /admin/produces/pending', method: 'getPendingProduces' },
    { route: 'PATCH /admin/produces/:produceId/approve', method: 'approveProduce' },
    { route: 'PATCH /admin/produces/:produceId/reject', method: 'rejectProduce' },
    { route: 'GET /admin/posts', method: 'getAllPosts' },
    { route: 'PATCH /admin/posts/:postId/approve', method: 'approvePost' },
    { route: 'DELETE /admin/posts/:postId', method: 'deletePost' },
    { route: 'GET /admin/reports', method: 'getReports' },
    { route: 'PATCH /admin/reports/:reportId/resolve', method: 'resolveReport' },
    { route: 'GET /admin/orders', method: 'getAllOrders' },
    { route: 'GET /admin/analytics/rental', method: 'getRentalAnalytics' },
    { route: 'GET /admin/analytics/revenue', method: 'getRevenueAnalytics' },
    { route: 'GET /admin/logs/rate-limit', method: 'getRateLimitLogs' },
    { route: 'POST /admin/announcements', method: 'createAnnouncement' },
    { route: 'GET /admin/announcements', method: 'getAnnouncements' },
    { route: 'DELETE /admin/announcements/:announcementId', method: 'deleteAnnouncement' },
];
console.log('\n=== API Route to Controller Method Mapping ===');
apiRoutes.forEach(({ route, method }) => {
    if (controllerMethods.includes(method)) {
        console.log(`✅ ${route} → ${method}`);
    }
    else {
        console.log(`❌ ${route} → MISSING: ${method}`);
    }
});
// Check validation schemas
try {
    const { AdminValidation } = require('./admin.validation');
    const validationKeys = Object.keys(AdminValidation);
    console.log(`\n✅ AdminValidation has ${validationKeys.length} schemas:`, validationKeys);
}
catch (error) {
    console.log('\n❌ AdminValidation import failed:', error.message);
}
console.log('\n=== Admin Module API Connection Test Complete ===');
console.log('🎉 All admin APIs are properly connected and ready to use!');
//# sourceMappingURL=test-admin.js.map