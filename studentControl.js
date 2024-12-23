const Student=require('../model/student')
const insertStudent=async(req,res)=>{
    const{name,age,branch}=req.body
    try{
        const obj=new Student({name,age,branch})
        await obj.save()
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
const findStudent=async(req,res)=>{
    try{
        const obj=await Student.find()
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
const updateStudent=async(req,res)=>{
    try{
        const{name,age,branch}=req.body
        const obj=await Student.findByIdAndUpdate(
            req.params.id,
            {name,age,branch},
            {new:true}
        )
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
module.exports={insertStudent,findStudent,updateStudent}