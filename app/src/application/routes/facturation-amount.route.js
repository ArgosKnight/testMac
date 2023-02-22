"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactuAmountRoute = void 0;
class FactuAmountRoute {
    constructor(factuAmountUseCase) {
        this.factuAmountUseCase = factuAmountUseCase;
    }
    handle(req, res, next) {
        this.factuAmountUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            .catch((err) => {
            next(err);
        });
    }
}
exports.FactuAmountRoute = FactuAmountRoute;
