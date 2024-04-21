import React, { useState } from 'react'
import axios from 'axios'
export default function Create({ onTaskAdded }) {
    // const[task,setTask] = useState()
    const[title,setTitle] = useState()
    
    const handleAdd = () => {  
      axios.post('http://localhost:3000/api/task/addTask', { title: title })
          .then(result => {
              console.log(result);
              setTitle('') // not working until re-rendaring 
          })
          .catch(err => console.log(err));
  };
  
  return (
    <div className={'create_form'}>
        {/* <input type="text" placeholder='Enter Task' onChange={(e)=> setTask(e.target.value)} /> */}
        <input type="text" placeholder='Task title' onChange={(e)=> setTitle(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}