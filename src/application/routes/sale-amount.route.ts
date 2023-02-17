import { Request, Response } from "express";
import { SaleAmountUseCase } from "../../domain/use-case/sale-amount.use-case";


export class SaleAmountRoute{
    constructor (private readonly saleAmountUseCase: SaleAmountUseCase){}
    handle(req: Request, res:Response): Promise<number>{
        return this.saleAmountUseCase.execute(new Date(), new Date())
    }
}