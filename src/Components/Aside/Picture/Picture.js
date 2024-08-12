import React from 'react'
import '../../Aside/Picture/picture.css'
import profilePicture from '../../../img/img-perfil.jpg'

const Picture = () => {
  return (
    <aside>
      <div>
        <img className='materialboxed' src={profilePicture} alt='profile' />
      </div>
    </aside>
  )
}

export default Picture
