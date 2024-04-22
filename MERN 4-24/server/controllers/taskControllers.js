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
        const {id} = req.params
        console.log("id: ",id)
        await todoModel.findByIdAndDelete(id)
        res.status(200).json({ message:"deleted succesfully"})
    } catch (error) {
        res.status(500).json({ message:"failed deletion"})
    }
}
const updateTask = async(req,res) =>{
    try {
        const {id} = req.params 
        await todoModel.findByIdAndUpdate({ _id:id}, {completed:true})
        res.status(200).json({ message:"task updated"})
    } catch (error) {
        res.status(500).json({ message:"failed to update"})
    }
}
/**
 * Retrieves all tasks from the todoModel and sends them as a JSON response.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the tasks are sent as a JSON response.
 */
const getTask = async (req, res) => {
    try {
        const tasks = await todoModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        // res.status(404).json({ message: "not found"})
    }
}

module.exports = {addTask,removeTask,getTask,updateTask}
