const students=require('../Modals/studentModals')

exports.addStudent=async(req,res)=>{
try{
    const {first_name,last_name,batch,phone}=req.body
    const photo=req.file.filename
    const teacherId=req.payload

    const newStudent=new students({
        first_name,last_name,batch,phone,photo,teacherId
    })
    await newStudent.save()
    res.status(201).json(newStudent)
}
catch(err){
    console.log(err)
    res.status(400).json(err)
}   
}

exports.getStudents=async(req,res)=>{
    try{
        const teacherid=req.payload
        const studentList=await students.find({teacherId:teacherid})
        res.status(200).json(studentList)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
    
}

exports.deleteStudent=async(req,res)=>{
    try{
        const {sid}=req.params
        console.log(sid)
        const result=await students.findByIdAndDelete(sid)
        res.status(200).json("Details Removed!")
    }
   catch(err){
    console.log(err)
    res.status(400).json(err)
   }
}

exports.updateStudent=async(req,res)=>{
try{
    const {sid}=req.params
    console.log(req.body)
    if(req.file){
        var image=req.file.filename
        var {first_name,last_name,batch,phone}=req.body
    }
    else{
        var {first_name,last_name,batch,phone,image}=req.body
    }
    const existing=await students.findById(sid)
    existing.first_name=first_name
    existing.last_name=last_name
    existing.batch=batch
    existing.phone=phone
    existing.photo=image
    await existing.save()
    res.status(200).json(existing)

}
catch(err){
    console.log(err)
    res.status(400).json(err)
   }

}