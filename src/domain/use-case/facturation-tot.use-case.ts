import { FactuTotRepository } from "../repository/facturation-tot.repository";

export class FactuTotUseCase{
    constructor(private readonly factuTotRepository: FactuTotRepository){}
    execute(startDate: Date, endDate: Date):Promise<number>{
        return this.factuTotRepository.sumFactuTot(startDate,endDate)
    }
}