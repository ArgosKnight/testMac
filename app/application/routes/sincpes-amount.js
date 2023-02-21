"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinCpesRoute = void 0;
class SinCpesRoute {
    constructor(sinCpesUseCase) {
        this.sinCpesUseCase = sinCpesUseCase;
    }
    handle(req, res, next) {
        this.sinCpesUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            .catch((err) => {
            next(err);
        });
    }
}
exports.SinCpesRoute = SinCpesRoute;
