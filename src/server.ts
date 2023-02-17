import express from "express"

const port = 3000
const app = express()



app.get('/sales-amount', (req,res)=>{

})






app.listen(port, () => {
    console.log('server running at port %d', port)
})