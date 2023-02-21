import { Request, Response, NextFunction } from "express";
import { SinCpesUseCase } from "../../domain/use-case/sincpes.use-case";

export class SinCpesRoute{
    constructor(private readonly sinCpesUseCase: SinCpesUseCase){ }

    handle(req: Request, res: Response, next: Function){
        this.sinCpesUseCase.execute(new Date(), new Date())
        .then(value =>{
            res.json(value)
        })
        .catch((err: Error)=>{
            next(err)
        })
    }
}