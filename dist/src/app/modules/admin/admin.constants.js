"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRelationalFieldsMapper = exports.adminRelationalFields = exports.adminSortableFields = exports.adminSearchableFields = exports.adminFilterableFields = void 0;
// Admin constants
exports.adminFilterableFields = ['searchTerm', 'role', 'status'];
exports.adminSearchableFields = ['name', 'email'];
exports.adminSortableFields = ['createdAt', 'name', 'email', 'role', 'status'];
exports.adminRelationalFields = ['role', 'status'];
exports.adminRelationalFieldsMapper = {
    role: 'role',
    status: 'status',
};
//# sourceMappingURL=admin.constants.js.map