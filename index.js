require('dotenv').config()

const express=require('express')
const cors=require('cors')
require('./Connection/db')
const router=require('./Router/router')


const schooleServer=express()

schooleServer.use(cors())
schooleServer.use(express.json())
schooleServer.use(router)
schooleServer.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT

schooleServer.listen(PORT,()=>{
    console.log('Server Running At:',PORT)
})

schooleServer.get('/',(req,res)=>{
    res.send("<h2 className='text-danger'>Server is Active</h2>")
})