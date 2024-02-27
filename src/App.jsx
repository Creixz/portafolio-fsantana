import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Personal from './components/personal/Personal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Personal />
      </div>
    </>
  )
}

export default App
