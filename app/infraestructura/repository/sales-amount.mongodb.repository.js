"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleTotMongoRepository = exports.SalesAmountMongoDbRepository = void 0;
class SalesAmountMongoDbRepository {
    sumSalesAmount(startDate, endDate) {
        return new Promise(function (resolve, reject) {
            try {
                if (Math.round((Math.random() * 100) / 100) === 1) {
                    throw new Error("Algo salio mal");
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
exports.SalesAmountMongoDbRepository = SalesAmountMongoDbRepository;
class SaleTotMongoRepository {
    sumSaleTotal(startDate, endDate) {
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
exports.SaleTotMongoRepository = SaleTotMongoRepository;