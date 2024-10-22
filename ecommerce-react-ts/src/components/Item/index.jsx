import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Item = ({product}) => {
  return (
    <div className="card" >
      <img src={product.thumbnail} className="card-img-top" alt={`id-${product.id}`}/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Precio: ${product.price}</p>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalle</Link>
      </div>
    </div>
  )
}

export default Item