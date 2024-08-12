import React from 'react'
import '../src/app.css'
import Header from './Components/Header/Header'
import Picture from './Components/Aside/Picture/Picture'
import OrangeBox from './Components/Aside/OrangeBox/OrangeBox'
import Contact from './Components/Aside/Contact/Contact'
import Experience from './Components/Body/Experience/Experience'
import Education from './Components/Body/Education/Education'
import { useState, useEffect } from 'react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const isDarkModeSaved = localStorage.getItem('isDarkMode')
    if (isDarkModeSaved) {
      setIsDarkMode(JSON.parse(isDarkModeSaved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
  }, [isDarkMode])

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`} id='home'>
      <Header isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
      <main className='container'>
        <div className='row'>
          <div
            className='col s12 m5 l5 xl4 column-aside'
            height='100'
          >
            <Picture />
            <div className='box-position'>
              <OrangeBox />
            </div>
            <Contact />
          </div>
          <div className='col s12 m7 l7 xl8 sections'>
            <Experience />
            <Education />
          </div>
          <div className='col s12 sections'></div>
        </div>
      </main>
    </div>
  )
}

export default App
