import { Request, Response, NextFunction } from "express";
import { SaleTotUseCase } from "../../domain/use-case/sale-tot.use-case";

export class SaleTotalRoute{
    constructor( private readonly saleTotUseCase: SaleTotUseCase){}
    handle(req: Request, res: Response, next: Function ): void{
        this.saleTotUseCase.execute(new Date(), new Date())
                .then (value => {
                    res.json(value)
                })
                .catch((err: Error)=>{
                    next(err)
                })
    }
}