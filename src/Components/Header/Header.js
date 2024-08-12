import React from 'react'
import '../Header/header.css'

const Header = ({ isDarkMode, handleToggleTheme }) => {
  return (
    <header className='scrollspy'>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper container'>
            <a href='/' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            {/* Button dark mode */}
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
            <ul id='nav-mobile' className='left hide-on-med-and-down'>
              {/* Button dropdown */}
              <li>
                <a
                  className='dropdown-trigger'
                  href='/'
                  data-target='button-dropdown'
                >
                  Menú
                  <i className='material-icons right'>arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
          {/* Menu Dropdown button */}
          <ul
            id='button-dropdown'
            className={`dropdown-content text-orange ${
              isDarkMode ? 'bg-dark' : ''
            }`}
          >
            <li>
              <a
                className={`${
                  isDarkMode ? 'white-text' : 'grey-text'
                } text-darken-3`}
                href='#experience'
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                className={`${
                  isDarkMode ? 'white-text' : 'grey-text'
                } text-darken-3`}
                href='#education'
              >
                Educación
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu burger button */}
      <ul
        className={`sidenav ${isDarkMode ? 'sidenav-dark' : ''}`}
        id='mobile-demo'
      >
        <li>
          <a href='#experience'>Experiencia</a>
        </li>
        <li>
          <a href='#education'>Educación</a>
        </li>
      </ul>
    </header>
  )
}

export default Header
