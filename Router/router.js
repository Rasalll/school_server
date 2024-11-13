const express=require('express')


const teacherController=require("../Controllers/teacherController")
const studentsController=require('../Controllers/studentController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const multerMiddle=require('../Middlewares/multerMiddleware')


const route=express.Router()

route.post('/reg',teacherController.teacherRegistration)
route.post('/log',teacherController.teacherLogin)

route.post('/addstudent',jwtMiddle,multerMiddle.single('photo'),studentsController.addStudent)
route.get('/getstudents',jwtMiddle,studentsController.getStudents)
route.delete('/delete/:sid',jwtMiddle,studentsController.deleteStudent)
route.put('/update/:sid',jwtMiddle,multerMiddle.single('photo'),studentsController.updateStudent)


module.exports=route