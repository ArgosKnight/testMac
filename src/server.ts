import express from "express"
import { SaleAmountRoute } from "./application/routes/sale-amount.route"
import { SaleAmountUseCase } from "./domain/use-case/sale-amount.use-case"
import { SalesAmountMemoryRepository } from "./infraestructura/repository/sales-amount.memory.repository"

const port = 4000
const app = express()

//Rutas 
app.get('/sales-amount', (req, res, next) => {
    //Esto colocarlo en una variable
    //new SaleAmountRoute(new SaleAmountUseCase(new SalesAmountMemoryRepository())).handle(req,res,next)  

    ///////////  IMPORTANTE
    //Next simplemente permite que el siguiente controlador de ruta en línea maneje la solicitud.
    let x = new SaleAmountRoute(new SaleAmountUseCase(new SalesAmountMemoryRepository())).handle(req, res, next)


})


app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Error HANDLE called")
    console.log('Path: ', req.path)
    console.error('detro del middleware Error: ', error)

    res.status(500).json(error.message)
})

//MIDDLEWARE DE ERRORES

app.get('/error', (req, res) => {
    res.send('Custom error lagging page, reset')
})





app.listen(port, () => {
    console.log('server running at port %d', port)
})