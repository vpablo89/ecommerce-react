import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const NoRouteFound = () => {
  return (
<div>
      <div className='noProducts'>
        <p className='noProducts__p'>La ruta solicitada no es válida</p>
        <button className='linkBrand'>
            <Link to = "/" className='link'>Click acá para ir al inicio</Link>
          </button>
    </div>

    </div>

  )
}

export default NoRouteFound