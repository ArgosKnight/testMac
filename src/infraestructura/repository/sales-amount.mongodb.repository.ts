import { SalesAmountRepository } from "../../domain/repository/sales-amount.repository";

export class SalesAmountMongoDbRepository implements SalesAmountRepository {
    sumSalesAmount(startDate: Date, endDate: Date): Promise<number> {
        throw new Error("Method not implemented.");
    }
}