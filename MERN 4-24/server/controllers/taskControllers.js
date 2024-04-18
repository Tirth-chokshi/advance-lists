const todoModel = require('../model/todo')

const addTask = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const newTask = todoModel({
            title,
            desc,
            completed: false
        })
        await newTask.save()
        res.status(200).json({ message: "Task added succesfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to add task" })
    }
}

const removeTask = async(req,res) =>{
    try {
        const {id} = req.body
        console.log("id: ",id)
        await todoModel.findByIdAndDelete(id)
        res.status(200).json({ message:"deleted succesfully"})
    } catch (error) {
        res.status(500).json({ message:"failed deletion"})
    }
}

const getTask = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

module.exports = {addTask,removeTask}
