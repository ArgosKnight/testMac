import { SinCpesRepository } from "../../domain/repository/sincpes.repository";

export class SinCpesMemoryRepository implements SinCpesRepository{
    sumSinCpesAmount(starDate: Date, endDate: Date): Promise<number> {
        return new Promise<number>(function (resolve, reject){
            try{
                if (Math.round((Math.random() * 100) / 100 ) === 1 ){
                    throw new Error("Algo salio mal, vuelve a intentarlo")
                }
                setTimeout(()=>{
                    resolve(Math.random() * 100 )
                }, 300)
            }catch(error){
                reject(error)
            }
        })
    }
}