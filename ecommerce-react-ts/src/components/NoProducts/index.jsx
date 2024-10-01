import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

const NoProducts = () => {
  return (
<div>
      <div className='noProducts'>
        <p className='noProducts__p'>No agregaste ningún producto al carrito todavía!!</p>
        <button className='linkBrand'>
            <Link to = "/" className='link'>Click acá para empezar a comprar</Link>
          </button>
    </div>

    </div>

  )
}

export default NoProducts