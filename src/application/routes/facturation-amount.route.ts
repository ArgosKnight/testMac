import { Request, Response, NextFunction } from "express";
import { FactuAmountUseCase } from "../../domain/use-case/facturation-amount.use-case";

export class FactuAmountRoute{
    constructor(private readonly factuAmountUseCase: FactuAmountUseCase){}

    handle(req: Request, res: Response, next: NextFunction){
        this.factuAmountUseCase.execute(new Date(), new Date())
        .then(value =>{
            res.json(value)
        })
        .catch((err:Error)=>{
            next(err)
        })
    }
}