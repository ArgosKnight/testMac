export interface SinCpesRepository{
    sumSinCpesAmount(starDate: Date, endDate: Date): Promise <number>
}