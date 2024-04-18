
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const taskRouter = require('./routes/taskRoutes')

const app = express();
dotenv.config()

// middleware
app.use(express.json())
app.use(cors())


// api endpoints
app.use('/api/task',taskRouter)

// MONOGO-DB Connect
const PORT = 3000;
mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT , () =>{
        console.log(`server is listing to ${PORT}`);
    })
})
.catch((error)=> console.log(`${error} did not connected`))