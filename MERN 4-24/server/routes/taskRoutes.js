const express = require('express')
const { addTask, removeTask } = require ('../controllers/taskControllers')

//routing 
const router =  express.Router()

router.post('/addTask',addTask)
router.post('/removeTask',removeTask)

module.exports = router