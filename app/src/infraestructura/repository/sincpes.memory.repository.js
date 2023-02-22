"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinCpesMemoryRepository = void 0;
class SinCpesMemoryRepository {
    sumSinCpesAmount(starDate, endDate) {
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
exports.SinCpesMemoryRepository = SinCpesMemoryRepository;
