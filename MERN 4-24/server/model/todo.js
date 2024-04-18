
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{type:String ,required: true},
    desc:{type:String ,required: true},
    completed:Boolean
})

const todoModel = mongoose.model('todo',todoSchema)
module.exports = todoModel