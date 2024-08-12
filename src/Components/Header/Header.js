import React from 'react'
import '../Header/header.css'

const Header = ({ isDarkMode, handleToggleTheme }) => {
  return (
    <header className='scrollspy'>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper container'>
            {isDarkMode ? (
              <button
                className='fas fa-2x fa-sun button-dark'
                onClick={handleToggleTheme}
              ></button>
            ) : (
              <button
                className='fas fa-2x fa-moon button-dark'
                onClick={handleToggleTheme}
              ></button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
