"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleTotalRoute = void 0;
class SaleTotalRoute {
    constructor(saleTotUseCase) {
        this.saleTotUseCase = saleTotUseCase;
    }
    handle(req, res, next) {
        this.saleTotUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            .catch((err) => {
            next(err);
        });
    }
}
exports.SaleTotalRoute = SaleTotalRoute;
