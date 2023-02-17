import { SalesAmountRepository } from "../repository/sales-amount.repository";


export class SaleAmountUseCase {
    constructor (private readonly saleAmountRepository: SalesAmountRepository){}
    execute (startDate: Date, endDate:Date): Promise<number>{
        return this.saleAmountRepository.sumSalesAmount(startDate,endDate)
    }
}