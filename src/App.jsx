import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Personal from './components/personal/Personal'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/WorkExperience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Personal />
        <Skills />
        <WorkExperience />
      </div>
    </>
  )
}

export default App
