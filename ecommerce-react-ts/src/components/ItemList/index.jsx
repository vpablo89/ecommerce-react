import React from 'react'
import Item from '../Item'

const ItemList = ({productos}) => {
  return (
    <div style={{
      padding: 50,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      background: 'rgba(0,0,0,0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 30,
    }}>
        {productos.map(producto => {
            return <Item product={producto} key={producto.id}/>
        })}
    </div>
  )
}

export default ItemList