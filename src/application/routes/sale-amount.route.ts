import { Request, Response, NextFunction } from "express";
import { SaleAmountUseCase } from "../../domain/use-case/sale-amount.use-case";


export class SaleAmountRoute{
    constructor (private readonly saleAmountUseCase: SaleAmountUseCase){}    

    //REQ, RES, NEXT , ERR?
    handle(req: Request, res: Response, next: Function):void{
        this.saleAmountUseCase.execute(new Date(), new Date())
        .then( value =>{
            res.json(value)
        })
        //agregar funcion para recibir el error 
        //handle errors with the middleware  
        .catch(next =>{
            next = res.json
                 ("Numero es igual a 1, actualizar pagina")
            return next
        })
    }
}