import { SaleTotalRepository } from "../repository/sales-tot.repository";


export class SaleTotUseCase{
    constructor( private readonly saleTotRepository: SaleTotalRepository){}
    execute(startDate: Date, endDate: Date): Promise<number>{
        return this.saleTotRepository.sumSaleTotal(startDate, endDate)
    }
}