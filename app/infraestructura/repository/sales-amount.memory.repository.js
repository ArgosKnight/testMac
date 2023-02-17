"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAmountMemoryRepository = void 0;
class SalesAmountMemoryRepository {
    //Agregamos el constructor
    sumSalesAmount(startDate, endDate) {
        //Lo que yo quiero es que de la Promesa que tengo, mi metodo me permita recibir un numero dentro de un tiempo
        //Y en caso que no tenga nada me muestre un mensaje de error
        //Agregamos el metodo
        //Condicional para que salga error es que este me muestre 1
        return new Promise(function (resolve, reject) {
            try {
                if (Math.round((Math.random() * 100) / 100) === 1) {
                    throw new Error("Algo salio mal, vuelve a intentarlo");
                }
                setTimeout(() => {
                    resolve(Math.random() * 100);
                }, 300);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.SalesAmountMemoryRepository = SalesAmountMemoryRepository;
