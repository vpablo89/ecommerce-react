import React, { useContext }  from 'react'
import {BsCart4} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {Shop} from '../../context/ShopProvider'
import "./styles.css"



const CartWidget = () => {

  const {countCart} = useContext(Shop);
   
  
  return (
    <Link className='linkCart' to="/cart">
    <BsCart4 size={45}/>
    <span className='countCart'>{countCart()}</span>
    </Link>
    
  )
}

export default CartWidget
