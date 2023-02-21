export interface FacturationAmountRepository{
    //Facturaciones totales
    //agregar promise - esto hata que nuestra data este a la espera de los callbacks
    sumFactoturationAmount(startDate: Date, endDate: Date): Promise<number>
}