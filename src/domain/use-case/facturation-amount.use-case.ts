import { FacturationAmountRepository } from "../repository/facturation-amount.repository";

export class FactuAmountUseCase{
    constructor(private readonly facturationAmountRepository: FacturationAmountRepository){}
    execute(startDate: Date, endDa: Date):Promise<number>{
        return this.facturationAmountRepository.sumFactoturationAmount(startDate, endDa)
    }
}