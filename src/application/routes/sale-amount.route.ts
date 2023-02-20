import { Request, Response, NextFunction } from "express";
import { SaleAmountUseCase } from "../../domain/use-case/sale-amount.use-case";


export class SaleAmountRoute{
    constructor (private readonly saleAmountUseCase: SaleAmountUseCase){}
    handle(req: Request, res:Response, next: Function ): void{
         this.saleAmountUseCase.execute(new Date(), new Date())
         .then(value => {
            res.json(value)
         })
         .catch(next=>{
            
         })   
    }
}