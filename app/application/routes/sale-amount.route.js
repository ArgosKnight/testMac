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
            .catch(next => {
            next = res.json("Numero es igual a 1, actualizar pagina");
            return next;
        });
    }
}
exports.SaleAmountRoute = SaleAmountRoute;
