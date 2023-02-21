import express from "express"
import { FactuAmountRoute } from "./application/routes/facturation-amount.route"
import { FactuTotRoute } from "./application/routes/facturation-tot.route"
import { SaleAmountRoute } from "./application/routes/sale-amount.route"
import { SaleTotalRoute } from "./application/routes/sale-tot.route"
import { SinCpesRoute } from "./application/routes/sincpes-amount"
import { FactuAmountUseCase } from "./domain/use-case/facturation-amount.use-case"
import { FactuTotUseCase } from "./domain/use-case/facturation-tot.use-case"
import { SaleAmountUseCase } from "./domain/use-case/sale-amount.use-case"
import { SaleTotUseCase } from "./domain/use-case/sale-tot.use-case"
import { SinCpesUseCase } from "./domain/use-case/sincpes.use-case"
import { FactuAmountMemoryRepository, FactuTotMemoryRepository } from "./infraestructura/repository/facturation-amount.memory.repository"
import { SalesAmountMemoryRepository, SaleTotMemoryRepository } from "./infraestructura/repository/sales-amount.memory.repository"
import { SinCpesMemoryRepository } from "./infraestructura/repository/sincpes.memory.repository"

const port = 4000
const app = express()

//Rutas 
//Sales
app.get('/sales-amount', (req, res, next) => {
    let x = new SaleAmountRoute(new SaleAmountUseCase(new SalesAmountMemoryRepository())).handle(req, res, next)
})
app.get('/sales-tot', (req, res, next)=>{
    new SaleTotalRoute(new SaleTotUseCase(new SaleTotMemoryRepository())).handle(req,res,next)
})

//Facturation
app.get('/factu-amount', (req,res, next)=>{
    new FactuAmountRoute(new FactuAmountUseCase(new FactuAmountMemoryRepository())).handle(req,res,next)
})
app.get('/factu-tot', (req, res, next)=>{
    new FactuTotRoute(new FactuTotUseCase(new FactuTotMemoryRepository())).handle(req, res, next)
})

//SinCpes
app.get('/sinCpes', (req,res,next)=>{
    new SinCpesRoute(new SinCpesUseCase(new SinCpesMemoryRepository())).handle(req,res, next)
})



//MIDDLEWARE DE ERRORES
app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log("Error HANDLE called")
    console.log('Path: ', req.path)
    console.error('detro del middleware Error: ', error)

    res.status(500).json(error.message)
})
app.get('/error', (req, res) => {
    res.send('Custom error lagging page, reset')
})



app.listen(port, () => {
    console.log('server running at port %d', port)
})