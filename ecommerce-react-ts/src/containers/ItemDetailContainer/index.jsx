import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';




const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {
  const getProduct = async()=>{
    try {
      const result = await fetch(`https://localhost:8081/api/v1/products/${id}`);
      const product = result.json();
      setDetail(product);
    } catch (error) {
      setDetail('Ningun producto');
    }
  }   

    getProduct();

    
  }, [id])

  return (
    <div>
        {
          Object.keys(detail).length === 0 
            ? <Spinner animation="grow" variant="success"/>
            : <ItemDetail detail={detail}/>
        }
    </div>
  )
}

export default ItemDetailContainer