export interface SalesAmountRepository{
    //Ventas totales 
    //AGREGAR PROMISE - Esto hara que nuestra data este a la espera de recibir algo
    sumSalesAmount(startDate: Date, endDate: Date): Promise<number>

}