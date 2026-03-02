require('dotenv').config()
const express=require("express")
const app=express()
const router=require('./router/auth-router')
const connectDB=require('./utils/db')
const errormiddleware=require('./middleware/error-middleware')
const contactRouter=require('./router/contact-router')

app.use(express.json())
app.use('/api/auth',router)
app.use('/api/form',contactRouter)
app.use(errormiddleware)

const PORT=3000
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`This server port http://localhost:${PORT}`)})
})
