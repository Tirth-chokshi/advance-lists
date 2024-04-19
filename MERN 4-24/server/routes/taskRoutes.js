const express = require('express')
const { addTask, removeTask, getTask } = require ('../controllers/taskControllers')

const router =  express.Router()

// Routes
router.get('/getTask',getTask)
router.post('/addTask',addTask)
router.post('/removeTask',removeTask)

module.exports = router