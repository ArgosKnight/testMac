import express from "express"
import { SaleAmountRoute } from "./application/routes/sale-amount.route"
import { SaleAmountUseCase } from "./domain/use-case/sale-amount.use-case"
import { SalesAmountMemoryRepository } from "./infraestructura/repository/sales-amount.memory.repository"

const port = 4000
const app = express()



app.get('/sales-amount', (req,res)=>{
    new SaleAmountRoute(new SaleAmountUseCase(new SalesAmountMemoryRepository())).handle(req,res)
})






app.listen(port, () => {
    console.log('server running at port %d', port)
})