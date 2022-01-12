"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./Controllers/UserController");
const app = (0, routing_controllers_1.createExpressServer)({
    controllers: [UserController_1.UserController],
});
app.listen(3000);
//# sourceMappingURL=app.js.map