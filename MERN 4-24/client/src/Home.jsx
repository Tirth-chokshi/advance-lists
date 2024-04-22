import React, { useState, useEffect } from 'react';
import Create from './Create'; // Assuming Create component handles task creation
import axios from 'axios';
import { BsCircleFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

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

  return (
    <div className={'home'}>
      <h2>Todo List</h2>
      <Create /> {/* Create component for adding tasks */}
      {todos.length === 0 ? (
        <div><h2>No Tasks</h2></div>
      ) : (
          todos.map((todo) => (
            <div className={'task'}>
              <div className={'checkbox'}>
                <BsCircleFill className={'icon'} />
                <p>{todo.title}</p>
              </div>
              <div>
                <span>
                <BsTrash className={'icon'} />
                </span>
              </div>
            </div>
          ))  
      )}
    </div>
  );
}
