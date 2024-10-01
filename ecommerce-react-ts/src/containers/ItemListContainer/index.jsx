import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useFirebase from '../../hooks/useFirebase';
import Spinner from 'react-bootstrap/esm/Spinner';
import "./styles.css"

const ItemListContainer = () => {  
  
  const {categoryId}  = useParams()
  
  
  const [products, loading, error] =useFirebase(categoryId)  
   
  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
        <div className='spinnerCustom'>
          <Spinner animation="border" variant="primary" role="status"/>
        </div>
          : <ItemList productos={products}/>
      }
    </>
  )
}

export default ItemListContainer