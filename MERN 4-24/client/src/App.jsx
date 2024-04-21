import { useState } from 'react'
import './App.css'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <Home />
    </>
  )
}

export default App
