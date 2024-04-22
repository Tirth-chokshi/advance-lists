const express = require('express')
const { addTask, removeTask, getTask, updateTask } = require ('../controllers/taskControllers')

const router =  express.Router()

// Routes
router.get('/getTask',getTask)
router.post('/addTask',addTask)
router.delete('/removeTask/:id',removeTask)
router.put('/updateTask/:id',updateTask)

module.exports = router