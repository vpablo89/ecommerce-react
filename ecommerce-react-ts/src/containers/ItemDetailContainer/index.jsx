import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import Spinner from 'react-bootstrap/Spinner';




const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  //Este effect se ejecuta cuando se monta el componente
  useEffect(()=> {
    const getProduct = async()=>{
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const productDetail = {
      id: docSnap.id,
      ...docSnap.data()
    }
    setDetail(productDetail);
  } else {
    const products = [{
      "id": 1,
      "category": "marina",                
      "description": "Inodoro de apoyo Marina blanco Ferrum",
      "price": 8000,
      "stock": 30,
      "image": "/Assets/img/inodmarina.jpg",
      "title": "inodoros",
      "quantity": 1
  },
  {
      "id": 2,
      "category": "bari",                
      "description": "Inodoro de apoyo Bari blanco Ferrum",
      "price": 8000,
      "stock": 30,
      "image": "/Assets/img/inodbari.jpg",
       "title": "inodoros",
       "quantity": 1
  },
  {
      "id": 3,
      "category": "andina",
      
      "description": "Inodoro de apoyo Andina blanco Ferrum",
      "price": 8000,
      "stock": 30,
      "image": "/Assets/img/inodandina.jpg",
      "title": "inodoros",
      "quantity": 1
  }]
    setDetail(products);
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