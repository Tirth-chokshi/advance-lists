import React, { useState, useEffect } from 'react';
import Create from './Create'; // Assuming Create component handles task creation
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsTrash } from "react-icons/bs";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/task/getTask');
        setTodos(response.data);
      } catch (error) {
        console.error("Error in task fetch:", error);
      }
    };
    getTasks();
  }, []);

  const handleEdit = (id, completed) => {
    // Assuming you want to toggle the completed status of the task
    axios.put(`http://localhost:3000/api/task/updateTask/${id}`, { completed: !completed })
      .then(() => {
        location.reload()
      })
      .catch(err => console.log(err));
  };

  // Assuming you want to add a function to handle task deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/task/removeTask/${id}`)
      .then(() => {
        // Fetch tasks again to update the UI
        getTasks(); // Make sure getTasks is accessible here
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={'home'}>
      <h2>Todo List</h2>
      <Create /> {/* Create component for adding tasks */}
      {todos.length === 0 ? (
        <div><h2>No Tasks</h2></div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className={'task'}>
            <div className={'checkbox'} onClick={() => handleEdit(todo._id, todo.completed)}>
              {todo.completed ? 
                <BsFillCheckCircleFill className="icon" />
                : <BsCircleFill className="icon" />
              }
              <p className={todo.completed? 'line-thorugh': ''}>{todo.title}</p>
            </div>
            <div onClick={() => handleDelete(todo._id)}>
              <BsTrash className={'icon'} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
