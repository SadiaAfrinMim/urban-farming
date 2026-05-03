"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.CertificationStatus = exports.UserStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Vendor"] = "Vendor";
    UserRole["Customer"] = "Customer";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "Active";
    UserStatus["Pending"] = "Pending";
    UserStatus["Suspended"] = "Suspended";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var CertificationStatus;
(function (CertificationStatus) {
    CertificationStatus["Pending"] = "Pending";
    CertificationStatus["Approved"] = "Approved";
    CertificationStatus["Rejected"] = "Rejected";
})(CertificationStatus || (exports.CertificationStatus = CertificationStatus = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Confirmed"] = "Confirmed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
//# sourceMappingURL=common.js.map