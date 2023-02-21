import { FactuTotRepository } from "../../domain/repository/facturation-tot.repository";
import { FacturationAmountRepository } from "../../domain/repository/facturation-amount.repository";

export class FactuAmountMemoryRepository implements FacturationAmountRepository{
    sumFactoturationAmount(startDate: Date, endDate: Date): Promise<number> {
        return new Promise<number>(function (resolve, reject){
            try{
                if (Math.round((Math.random()* 100) / 100) === 1 ){
                    throw new Error("Algo salio mal, vuelve a intentarlo")
                }
                setTimeout(()=>{
                    resolve(Math.random() * 100)
                }, 300)
            }catch (error){
                reject(error)
            }
        })
    }
}

export class FactuTotMemoryRepository implements FactuTotRepository{
    sumFactuTot(startDate: Date, endDate: Date): Promise<number> {
        return new Promise<number>(function (resolve, reject){
            try{
                if (Math.round((Math.random()* 100) / 100) === 1 ){
                    throw new Error("Algo salio mal, vuelve a intentarlo")
                }
                setTimeout(()=>{
                    resolve(Math.random() * 100)
                }, 300)
            }catch (error){
                reject(error)
            }
        })
    }
}