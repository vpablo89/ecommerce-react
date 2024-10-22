import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
// import Spinner from 'react-bootstrap/esm/Spinner';
import "./styles.css"
import useBackendApi from '../../hooks/useBackendAPI';


const ItemListContainer = () => {  
  
  const {limit, page, description}  = useParams()  
  
  const [products, loading, error] = useBackendApi({ limit, page, description})
   
  return (
    <>
      {error && <h1>Oh oh hubo un error: {error}</h1>}
      {
        loading ?
        // <div className='spinnerCustom'>
        //   <Spinner animation="border" variant="primary" role="status"/>
        // </div>
        'No hay productos para mostrar'
          : <ItemList productos={products}/>
      }
    </>
  )
}

export default ItemListContainer