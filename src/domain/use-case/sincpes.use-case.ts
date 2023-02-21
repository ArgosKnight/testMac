import { SinCpesRepository } from "../repository/sincpes.repository";
export class SinCpesUseCase{
    constructor (private readonly sinCpesRepository: SinCpesRepository){}
    execute(starDate: Date, endDate: Date): Promise <number>{
        return this.sinCpesRepository.sumSinCpesAmount(starDate,endDate)
    }
}