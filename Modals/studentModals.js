const mongoose=require('mongoose')


const studentSchema=new mongoose.Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },batch:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true
    },
    teacherId:{
        type:String,
        required:true
    }
})

const students=mongoose.model('students',studentSchema)

module.exports=students