import React, { useState, useEffect } from 'react';
import Create from './Create'; // Assuming Create component handles task creation
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);

  // Fetch tasks on component mount (or when needed)
  useEffect(() => {
    const getTasks = async () => {
      try {
        // Ensure the URL matches your API endpoint exactly.
        // If you're using a proxy, you might not need the full URL.
        const response = await axios.get('http://localhost:3000/api/task/getTask');
        setTodos(response.data);
      } catch (error) {
        console.error("Error in task fetch:", error);
      }
    };
    getTasks();
  }, []); // Empty dependency array: fetch only once on mount

  return (
    <div className={'home'}>
      <h2>Todo List</h2>
      <Create /> {/* Create component for adding tasks */}
      {todos.length === 0 ? (
        <div><h2>No Tasks</h2></div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}> {/* Use the task's _id for a unique key */}
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
