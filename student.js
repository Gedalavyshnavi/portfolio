const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{type:String,requires:true},
    age:{type:Number,requires:true},
    class:{type:String,requires:true},
    branch:{type:String,requires:true}
})
module.exports=mongoose.model('student',studentSchema)