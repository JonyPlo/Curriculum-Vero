import React from 'react'
import './experience.css'
import Fade from 'react-reveal/Fade'

const Experience = () => {
  return (
    <section className='experience row scrollspy' id='experience'>
      <Fade bottom>
        {/* Tittles of sections */}
        <div className='valign-wrapper'>
          <div className='col s2 align-icons'>
            <i className='fas fa-2x fa-briefcase sections-icons'></i>
          </div>
          <div className='col s10'>
            <h5 className='tittle-weight'>
              <b>EXPERIENCIA</b>
            </h5>
            <hr />
          </div>
        </div>
        {/* Content experience */}
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2015 - Presente</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>
              <div className='job'>Café a los Mandarines</div>
              Cajera / Vendedora
            </h6>
            <p>
              Trabajé durante 9 años como cajera y vendedora en la bombonería.
              Me encargaba de atender a los clientes, colaborar con mis
              compañeros de equipo y también manejar tareas administrativas,
              como hacer depósitos bancarios. ¡Fue una experiencia que me enseñó
              mucho sobre atención al público y trabajo en equipo!
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2012 - 2013</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>
              <div className='job'>Hospital del niño Jesús</div>
              Encargada (Lactario)
            </h6>
            <p>
              Mi tarea principal era preparar fórmulas de leche adaptadas a las
              necesidades específicas de los bebes. Esta experiencia me permitió
              desarrollar habilidades en la preparación precisa de fórmulas para
              asegurar su correcta nutrición.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2011 - 2012</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>
              <div className='job'>Aegis Argentina</div>
              Agente telefónico
            </h6>
            <p>
              En el call center trabajé en el área del Banco Francés, y mi tarea
              Consistía en contactar a clientes para ofrecerles tarjetas de
              crédito, siempre con el objetivo de cumplir con las metas
              establecidas por mis superiores. Esta experiencia me permitió
              desarrollar habilidades en comunicación telefónica y en técnicas
              de ventas efectivas.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className='row content-sections'>
          <div className='col s12 m4 xl3 center-align bg-years'>
            <h6>2009 - 2010</h6>
          </div>
          <div className='col s12 m8 xl9 content-border-left'>
            <div className='circles'></div>
            <h6>
              <div className='job'>Alma by Nika</div>
              Vendedora
            </h6>
            <p>
              Trabajé vendiendo ropa femenina, donde me encargaba de ayudar a
              los clientes a encontrar lo que buscaban y hacer recomendaciones.
              Mi trabajo consistía en ofrecer un buen servicio y asegurarme de
              que los clientes salieran satisfechos con sus compras.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Experience
