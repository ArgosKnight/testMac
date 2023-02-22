"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAmountMongoDbRepository = void 0;
class SalesAmountMongoDbRepository {
    constructor(db) {
        this.db = db;
    }
    sumSalesAmount(startDate, endDate) {
        return this.db.collection('test').countDocuments({});
    }
}
exports.SalesAmountMongoDbRepository = SalesAmountMongoDbRepository;
