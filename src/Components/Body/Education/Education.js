import React from 'react'
import '../Education/education.css'
import Fade from 'react-reveal/Fade'

const Education = () => {
  return (
    <section className='education row scrollspy marginBottom' id='education'>
      <Fade bottom>
        {/* Tittles of sections */}
        <div className='valign-wrapper'>
          <div className='col s2 align-icons'>
            <i className='fas fa-2x fa-book sections-icons'></i>
          </div>
          <div className='col s10'>
            <h5 className='tittle-weight'>
              <b>EDUCACIÓN</b>
            </h5>
            <hr />
          </div>
        </div>
        {/* Content education */}
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2007 - 2010</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>Terciario</h6>
            <p>
              Institución formadora: Instituto superior JIM
              <br />
              Título: Técnica superior en Nutrición
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2002 - 2006</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>Secundario</h6>
            <p>
              Institución formadora: Liceo Remedio de Escalada de San Martin
              <br />
              Título: Educación Polimodal (Orientación en ciencias naturales)
            </p>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Education
