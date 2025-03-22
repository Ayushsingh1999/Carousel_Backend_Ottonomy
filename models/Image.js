const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    title : {type:String,required:true},
    description : {type:String},
    imageUrl : {type:String,required:true},
    order : {type:Number,required:true}
})


module.exports = mongoose.model('Image',imageSchema)