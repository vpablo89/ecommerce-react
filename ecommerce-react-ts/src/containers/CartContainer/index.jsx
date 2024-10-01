import React, { useContext, useState } from 'react'
import TableRow from './TableRow'
import { Shop } from '../../context/ShopProvider';
import generateOrderObject from '../../services/generateOrderObject';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import FormComp from '../../components/Form';
import Spinner from 'react-bootstrap/Spinner';
import NoProducts from '../../components/NoProducts';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const Cart = () => {

  const {products, total, cleanCart} = useContext(Shop);
  
  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  
  const confirmPurchase = async (dataDelFormulario) => {
    const {phone: telefono, nombre, email} = dataDelFormulario
    try {
      
      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total()
      })
  
      
      console.log(order);
  
  
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart()
      //Posteriormente actualizar el stock de los productos existentes.
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity
        });
      }

      // alert("Orden confirmada con ID: " + docRef.id);
      Swal.fire({
        title: 'Compra exitosa',
        text: 'Orden confirmada con ID:'+ docRef.id,
        icon: 'success',
        confirmButtonText: 'OK'
      })
      
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  }

  return (
    <>
      {
        products.length !== 0 ?
        <>
          <table class="table table-success tableCustom table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Imágen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">eliminar</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return <TableRow key={product.id} product={product}/>
              })}
            </tbody>
          </table>
          {
            loader ?
            <Spinner animation="grow" variant="success"/>
            :
            <button onClick={()=> setFormVis(true)} className="buttonCustom">Confirmar compra</button>
          }
        </>
        :
        <>
          <NoProducts/>
          
        </>
      }
      { formVis ? 
        <FormComp 
          confirmPurchase = {confirmPurchase}
          formVis = {formVis}
          setFormVis = {setFormVis}
        />
        : null
      }
    </>
  )
}

export default Cart