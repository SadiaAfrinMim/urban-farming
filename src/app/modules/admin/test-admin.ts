// Test file to verify admin module imports
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminRoutes } from './admin.routes';
import { AdminValidation } from './admin.validation';

console.log('Admin module imports successful');
console.log('AdminController:', typeof AdminController);
console.log('AdminService:', typeof AdminService);
console.log('AdminRoutes:', typeof AdminRoutes);
console.log('AdminValidation:', typeof AdminValidation);