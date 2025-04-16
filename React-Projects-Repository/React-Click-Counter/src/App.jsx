import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Counter Project</h1>
      <h1>{count}</h1>
    <button onClick={() => setCount(count == 20 ? 20 : count + 1)}>Increase</button>
    <button onClick={() => setCount(count == 0 ? 0 : count - 1)}>Decrease</button>
    </>
  )
}

export default App