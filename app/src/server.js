"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const facturation_amount_route_1 = require("./application/routes/facturation-amount.route");
const facturation_tot_route_1 = require("./application/routes/facturation-tot.route");
const sale_amount_route_1 = require("./application/routes/sale-amount.route");
const sale_tot_route_1 = require("./application/routes/sale-tot.route");
const sincpes_amount_1 = require("./application/routes/sincpes-amount");
const facturation_amount_use_case_1 = require("./domain/use-case/facturation-amount.use-case");
const facturation_tot_use_case_1 = require("./domain/use-case/facturation-tot.use-case");
const sale_amount_use_case_1 = require("./domain/use-case/sale-amount.use-case");
const sale_tot_use_case_1 = require("./domain/use-case/sale-tot.use-case");
const sincpes_use_case_1 = require("./domain/use-case/sincpes.use-case");
const facturation_amount_memory_repository_1 = require("./infraestructura/repository/facturation-amount.memory.repository");
const sales_amount_memory_repository_1 = require("./infraestructura/repository/sales-amount.memory.repository");
const sincpes_memory_repository_1 = require("./infraestructura/repository/sincpes.memory.repository");
const port = 4000;
const app = (0, express_1.default)();
//Rutas 
//Sales
app.get('/sales-amount', (req, res, next) => {
    let x = new sale_amount_route_1.SaleAmountRoute(new sale_amount_use_case_1.SaleAmountUseCase(new sales_amount_memory_repository_1.SalesAmountMemoryRepository())).handle(req, res, next);
});
app.get('/sales-tot', (req, res, next) => {
    new sale_tot_route_1.SaleTotalRoute(new sale_tot_use_case_1.SaleTotUseCase(new sales_amount_memory_repository_1.SaleTotMemoryRepository())).handle(req, res, next);
});
//Facturation
app.get('/factu-amount', (req, res, next) => {
    new facturation_amount_route_1.FactuAmountRoute(new facturation_amount_use_case_1.FactuAmountUseCase(new facturation_amount_memory_repository_1.FactuAmountMemoryRepository())).handle(req, res, next);
});
app.get('/factu-tot', (req, res, next) => {
    new facturation_tot_route_1.FactuTotRoute(new facturation_tot_use_case_1.FactuTotUseCase(new facturation_amount_memory_repository_1.FactuTotMemoryRepository())).handle(req, res, next);
});
//SinCpes
app.get('/sinCpes', (req, res, next) => {
    new sincpes_amount_1.SinCpesRoute(new sincpes_use_case_1.SinCpesUseCase(new sincpes_memory_repository_1.SinCpesMemoryRepository())).handle(req, res, next);
});
//MIDDLEWARE DE ERRORES
app.use((error, req, res, next) => {
    console.log("Error HANDLE called");
    console.log('Path: ', req.path);
    console.error('detro del middleware Error: ', error);
    res.status(500).json(error.message);
});
app.get('/error', (req, res) => {
    res.send('Custom error lagging page, reset');
});
app.listen(port, () => {
    console.log('server running at port %d', port);
});
