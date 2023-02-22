"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactuTotRoute = void 0;
class FactuTotRoute {
    constructor(factuTotUseCase) {
        this.factuTotUseCase = factuTotUseCase;
    }
    handle(req, res, next) {
        this.factuTotUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            .catch((err) => {
            next(err);
        });
    }
}
exports.FactuTotRoute = FactuTotRoute;
