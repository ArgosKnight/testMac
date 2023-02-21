import { Request, Response, NextFunction } from "express";
import { FactuTotUseCase } from "../../domain/use-case/facturation-tot.use-case";

export class FactuTotRoute{
    constructor(private readonly factuTotUseCase: FactuTotUseCase){}

    handle(req: Request, res: Response, next: NextFunction){
        this.factuTotUseCase.execute(new Date(), new Date())
    .then(value => {
        res.json(value)
        })
    .catch((err: Error) => {
        next(err)
        })
    }
}