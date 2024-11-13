const mongoose=require('mongoose')


const CONNECTION_STRING=process.env.DATABASE


mongoose.connect(CONNECTION_STRING).then(res=>{
    console.log('Server Connected to Mondgodb')
    
})
.catch(err=>{
    console.log(err);

})  

module.exports=mongoose