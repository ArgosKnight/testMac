"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactuTotMemoryRepository = exports.FactuAmountMemoryRepository = void 0;
class FactuAmountMemoryRepository {
    sumFactoturationAmount(startDate, endDate) {
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
exports.FactuAmountMemoryRepository = FactuAmountMemoryRepository;
class FactuTotMemoryRepository {
    sumFactuTot(startDate, endDate) {
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
exports.FactuTotMemoryRepository = FactuTotMemoryRepository;
