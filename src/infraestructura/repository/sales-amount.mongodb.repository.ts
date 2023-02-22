import { Db } from "mongodb";
import { SalesAmountRepository } from "../../domain/repository/sales-amount.repository";


export class SalesAmountMongoDbRepository implements SalesAmountRepository {
    constructor(private readonly db: Db) { }

    sumSalesAmount(startDate: Date, endDate: Date): Promise<number> {
        return this.db.collection('test').countDocuments({})
    }

}

