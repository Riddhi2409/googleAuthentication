const mongoose=require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    email:String,
    picture:String,
})

const user=mongoose.model('user',schema)
module.exports=user
