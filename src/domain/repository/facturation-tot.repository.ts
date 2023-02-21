export interface FactuTotRepository{
    sumFactuTot(startDate: Date, endDate: Date): Promise<number>
}