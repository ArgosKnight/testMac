"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAmountRoute = void 0;
class SaleAmountRoute {
    constructor(saleAmountUseCase) {
        this.saleAmountUseCase = saleAmountUseCase;
    }
    handle(req, res) {
        return this.saleAmountUseCase.execute(new Date(), new Date());
    }
}
exports.SaleAmountRoute = SaleAmountRoute;
