import { SalesAmountRepository } from "../../domain/repository/sales-amount.repository";

export class SalesAmountMemoryRepository implements SalesAmountRepository {
    //Agregamos el constructor
    sumSalesAmount(startDate: Date, endDate: Date): Promise<number> {
        //Lo que yo quiero es que de la Promesa que tengo, mi metodo me permita recibir un numero dentro de un tiempo
        //Y en caso que no tenga nada me muestre un mensaje de error

        //Agregamos el metodo
        //Condicional para que salga error es que este me muestre 1
        return new Promise<number>(function (resolve, reject) {
            try {
                if (Math.round((Math.random() * 100) / 100) === 1) {
                    throw new Error("Algo salio mal, vuelve a intentarlo")
                }
                setTimeout(() => {
                    resolve(Math.random() * 100)
                }, 300)
            } catch (error) {
                reject(error)
            }
        })
    }
}