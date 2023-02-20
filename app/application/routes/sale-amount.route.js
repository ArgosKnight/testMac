"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAmountRoute = void 0;
class SaleAmountRoute {
    constructor(saleAmountUseCase) {
        this.saleAmountUseCase = saleAmountUseCase;
    }
    handle(req, res, next) {
        this.saleAmountUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            .catch(next => {
        });
    }
}
exports.SaleAmountRoute = SaleAmountRoute;
