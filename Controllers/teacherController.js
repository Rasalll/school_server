const teachers=require('../Modals/teacherModal')
const jwt=require('jsonwebtoken')



exports.teacherRegistration=async(req,res)=>{
    try{
        const {username,email,password}=req.body
    if(!username || !email || !password){
        res.status(406).json("Invalid Data")
    }
    else{
        const existingEmail=await teachers.findOne({email})
        if(existingEmail){
            res.status(406).json("Email Already Used")
        }
        else{
            const newUser=new teachers({
                username,email,password
            })
            await newUser.save()
            res.status(201).json(newUser)
        }
       
    }       
   
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    
}

exports.teacherLogin=async(req,res)=>{
    try{
        const {email,password} = req.body
        const existingteacher=await teachers.findOne({email,password})
        if(existingteacher){
            const token=jwt.sign({userId:existingteacher._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existingteacher.username})
        }
        else{
            res.status(406).json('Invalid Email Or Password')
        }
    }
    
        catch(err){
            console.log(err)
            res.status(400).json(err)
        }
        

    }
    

