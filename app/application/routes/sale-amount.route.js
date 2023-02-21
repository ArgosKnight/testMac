"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleAmountRoute = void 0;
class SaleAmountRoute {
    constructor(saleAmountUseCase) {
        this.saleAmountUseCase = saleAmountUseCase;
    }
    //REQ, RES, NEXT , ERR?
    handle(req, res, next) {
        this.saleAmountUseCase.execute(new Date(), new Date())
            .then(value => {
            res.json(value);
        })
            //agregar funcion para recibir el error 
            //handle errors with the middleware  
            .catch((err) => {
            // console.log('dentro del route',err.message)
            // Invocamos nuevo Middleware
            next(err);
        });
    }
}
exports.SaleAmountRoute = SaleAmountRoute;
