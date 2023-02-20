"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sale_amount_route_1 = require("./application/routes/sale-amount.route");
const sale_amount_use_case_1 = require("./domain/use-case/sale-amount.use-case");
const sales_amount_memory_repository_1 = require("./infraestructura/repository/sales-amount.memory.repository");
const port = 4000;
const app = (0, express_1.default)();
app.get('/sales-amount', (req, res, next) => {
    new sale_amount_route_1.SaleAmountRoute(new sale_amount_use_case_1.SaleAmountUseCase(new sales_amount_memory_repository_1.SalesAmountMemoryRepository())).handle(req, res, next);
});
app.listen(port, () => {
    console.log('server running at port %d', port);
});
