import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Personal from './components/personal/Personal'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/WorkExperience'
import ContactMe from './components/contactMe/ContactMe'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='top'>
      <Navbar />
      <div className="container">
        <Personal />
        <Skills />
        <Projects />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </div>
  )
}

export default App
