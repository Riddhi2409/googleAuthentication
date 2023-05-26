const mongoose=require('mongoose')

const schema = new mongoose.Schema({
    email:String,
    picture:String,
    userId:String
})

const user=mongoose.model('user',schema)
module.exports=user
