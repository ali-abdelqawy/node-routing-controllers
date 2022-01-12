"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const routing_controllers_1 = require("routing-controllers");
let UserController = class UserController {
    getAll() {
        return "This action returns all users";
    }
    getOne(id) {
        return "This action returns user #" + id;
    }
    post(user) {
        return "Saving user...";
    }
    put(id, user) {
        return "Updating a user...";
    }
    remove(id) {
        return "Removing user...";
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/users")
], UserController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/users/:id"),
    __param(0, (0, routing_controllers_1.Param)("id"))
], UserController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)("/users"),
    __param(0, (0, routing_controllers_1.Body)())
], UserController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)("/users/:id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)())
], UserController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)("/users/:id"),
    __param(0, (0, routing_controllers_1.Param)("id"))
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, routing_controllers_1.Controller)()
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map