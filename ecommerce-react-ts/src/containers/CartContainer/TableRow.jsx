import React, {useContext} from 'react'
import { Shop } from '../../context/ShopProvider'
import "./styles.css"
import { RiDeleteBin4Line } from "react-icons/ri";

const TableRow = ({product}) => {

  const {removeProduct} = useContext(Shop);

  return (
    <tr className='tablaCart'>
          <th scope="row">{product.id}</th>
          <td><img src={product.image} alt="table-row" className='imgCart'></img></td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td><button onClick={()=>removeProduct(product.id)}><RiDeleteBin4Line/></button></td>
    </tr>
  )
}

export default TableRow