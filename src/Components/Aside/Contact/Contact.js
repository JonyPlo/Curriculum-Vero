import React from 'react'
import '../Contact/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='section-contact'>
        <h5>CONTACTO</h5>
        <hr />
        <div>
          <div className='contact-row'>
            <i className='fas fa-map-marker-alt'></i>
            <p>
              Tucumán,
              <br />
              San Miguel de Tucumán,
              <br />
              Argentina.
            </p>
          </div>
          <div className='contact-row'>
            <i className='fas fa-phone-alt'></i>
            <p>+54 381 5017 189</p>
          </div>
          <div className='contact-row'>
            <i className='fas fa-envelope'></i>
            <p>plodziennv@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
