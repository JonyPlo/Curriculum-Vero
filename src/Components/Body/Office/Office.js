import React from 'react'
import '../Office/office.css'
import Fade from 'react-reveal/Fade'

const Office = () => {
  return (
    <section className='office row scrollspy marginBottom' id='office'>
      <Fade bottom>
        {/* Titles of sections */}
        <div className='valign-wrapper'>
          <div className='col s2 align-icons'>
            <i className='fas fa-2x fa-file-alt sections-icons'></i>{' '}
            {/* Recommended icon for office-related content */}
          </div>
          <div className='col s10'>
            <h5 className='tittle-weight'>
              <b>OFFICE</b>
            </h5>
            <hr />
          </div>
        </div>
        {/* Content education */}
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>Presente</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>Excel</h6>
            <p>Nivel intermedio</p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>Presente</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>Word</h6>
            <p>Nivel intermedio</p>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Office
