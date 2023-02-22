import { SalesAmountRepository } from "../../domain/repository/sales-amount.repository";
import { SaleTotalRepository } from "../../domain/repository/sales-tot.repository";

export class SalesAmountMongoDbRepository implements SalesAmountRepository {
    sumSalesAmount(startDate: Date, endDate: Date): Promise<number> {
        return new Promise<number>(function(resolve, reject){
            try{
                if(Math.round((Math.random()*100)/100) ===1 ){
                    throw new Error("Algo salio mal")
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
export class SaleTotMongoRepository implements SaleTotalRepository{
    sumSaleTotal(startDate: Date, endDate: Date): Promise<number> {
        return new Promise<number>(function(resolve, reject){
            try{
                if(Math.round((Math.random() * 100) / 100 ) === 1 ){
                    throw new Error ("Algo salio mal, vuelve a intentarlo")
                }
                setTimeout(()=>{
                    resolve(Math.random() * 100)
                }, 300 )
            } catch (error) {
                reject(error)
            }
        })
    }
}