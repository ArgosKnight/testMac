export interface SaleTotalRepository{
    sumSaleTotal(startDate: Date, endDate: Date): Promise<number>
}