"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditemController = void 0;
const AdditemService_1 = require("../../services/order/AdditemService");
class AdditemController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { order_id, product_id, amount } = req.body;
            const additemService = new AdditemService_1.AdditemService();
            const order = yield additemService.execute({ order_id, product_id, amount });
            return res.json(order);
        });
    }
}
exports.AdditemController = AdditemController;