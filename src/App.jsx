import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Personal from './components/personal/Personal'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/WorkExperience'
import ContactMe from './components/contactMe/ContactMe'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Personal />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
