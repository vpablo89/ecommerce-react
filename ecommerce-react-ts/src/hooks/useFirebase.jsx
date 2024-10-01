import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import ProductService from '../services/ProductServices';

const useFirebase = (categoryId) => {

  const products1 = [
    {
      "id": 1,
      "image": "https://example.com/image1.jpg",
      "description": "Producto 1 - Descripción del producto",
      "price": 29.99
    },
    {
      "id": 2,
      "image": "https://example.com/image2.jpg",
      "description": "Producto 2 - Descripción del producto",
      "price": 19.99
    },
    {
      "id": 3,
      "image": "https://example.com/image3.jpg",
      "description": "Producto 3 - Descripción del producto",
      "price": 15.49
    },
    {
      "id": 4,
      "image": "https://example.com/image4.jpg",
      "description": "Producto 4 - Descripción del producto",
      "price": 24.95
    },
    {
      "id": 5,
      "image": "https://example.com/image5.jpg",
      "description": "Producto 5 - Descripción del producto",
      "price": 9.99
    },
    {
      "id": 6,
      "image": "https://example.com/image6.jpg",
      "description": "Producto 6 - Descripción del producto",
      "price": 49.99
    },
    {
      "id": 7,
      "image": "https://example.com/image7.jpg",
      "description": "Producto 7 - Descripción del producto",
      "price": 99.99
    },
    {
      "id": 8,
      "image": "https://example.com/image8.jpg",
      "description": "Producto 8 - Descripción del producto",
      "price": 12.99
    },
    {
      "id": 9,
      "image": "https://example.com/image9.jpg",
      "description": "Producto 9 - Descripción del producto",
      "price": 35.75
    },
    {
      "id": 10,
      "image": "https://example.com/image10.jpg",
      "description": "Producto 10 - Descripción del producto",
      "price": 17.99
    },
    {
      "id": 11,
      "image": "https://example.com/image11.jpg",
      "description": "Producto 11 - Descripción del producto",
      "price": 27.99
    },
    {
      "id": 12,
      "image": "https://example.com/image12.jpg",
      "description": "Producto 12 - Descripción del producto",
      "price": 13.49
    },
    {
      "id": 13,
      "image": "https://example.com/image13.jpg",
      "description": "Producto 13 - Descripción del producto",
      "price": 59.95
    },
    {
      "id": 14,
      "image": "https://example.com/image14.jpg",
      "description": "Producto 14 - Descripción del producto",
      "price": 23.99
    },
    {
      "id": 15,
      "image": "https://example.com/image15.jpg",
      "description": "Producto 15 - Descripción del producto",
      "price": 39.99
    },
    {
      "id": 16,
      "image": "https://example.com/image16.jpg",
      "description": "Producto 16 - Descripción del producto",
      "price": 11.99
    },
    {
      "id": 17,
      "image": "https://example.com/image17.jpg",
      "description": "Producto 17 - Descripción del producto",
      "price": 14.99
    },
    {
      "id": 18,
      "image": "https://example.com/image18.jpg",
      "description": "Producto 18 - Descripción del producto",
      "price": 7.49
    },
    {
      "id": 19,
      "image": "https://example.com/image19.jpg",
      "description": "Producto 19 - Descripción del producto",
      "price": 89.99
    },
    {
      "id": 20,
      "image": "https://example.com/image20.jpg",
      "description": "Producto 20 - Descripción del producto",
      "price": 29.49
    },
    {
      "id": 21,
      "image": "https://example.com/image21.jpg",
      "description": "Producto 21 - Descripción del producto",
      "price": 20.99
    },
    {
      "id": 22,
      "image": "https://example.com/image22.jpg",
      "description": "Producto 22 - Descripción del producto",
      "price": 8.99
    },
    {
      "id": 23,
      "image": "https://example.com/image23.jpg",
      "description": "Producto 23 - Descripción del producto",
      "price": 25.75
    },
    {
      "id": 24,
      "image": "https://example.com/image24.jpg",
      "description": "Producto 24 - Descripción del producto",
      "price": 32.99
    },
    {
      "id": 25,
      "image": "https://example.com/image25.jpg",
      "description": "Producto 25 - Descripción del producto",
      "price": 15.99
    },
    {
      "id": 26,
      "image": "https://example.com/image26.jpg",
      "description": "Producto 26 - Descripción del producto",
      "price": 21.99
    },
    {
      "id": 27,
      "image": "https://example.com/image27.jpg",
      "description": "Producto 27 - Descripción del producto",
      "price": 18.49
    },
    {
      "id": 28,
      "image": "https://example.com/image28.jpg",
      "description": "Producto 28 - Descripción del producto",
      "price": 55.99
    },
    {
      "id": 29,
      "image": "https://example.com/image29.jpg",
      "description": "Producto 29 - Descripción del producto",
      "price": 44.95
    },
    {
      "id": 30,
      "image": "https://example.com/image30.jpg",
      "description": "Producto 30 - Descripción del producto",
      "price": 31.99
    },
    {
      "id": 31,
      "image": "https://example.com/image31.jpg",
      "description": "Producto 31 - Descripción del producto",
      "price": 22.95
    },
    {
      "id": 32,
      "image": "https://example.com/image32.jpg",
      "description": "Producto 32 - Descripción del producto",
      "price": 26.99
    },
    {
      "id": 33,
      "image": "https://example.com/image33.jpg",
      "description": "Producto 33 - Descripción del producto",
      "price": 33.75
    },
    {
      "id": 34,
      "image": "https://example.com/image34.jpg",
      "description": "Producto 34 - Descripción del producto",
      "price": 67.99
    },
    {
      "id": 35,
      "image": "https://example.com/image35.jpg",
      "description": "Producto 35 - Descripción del producto",
      "price": 38.99
    },
    {
      "id": 36,
      "image": "https://example.com/image36.jpg",
      "description": "Producto 36 - Descripción del producto",
      "price": 13.99
    },
    {
      "id": 37,
      "image": "https://example.com/image37.jpg",
      "description": "Producto 37 - Descripción del producto",
      "price": 48.95
    },
    {
      "id": 38,
      "image": "https://example.com/image38.jpg",
      "description": "Producto 38 - Descripción del producto",
      "price": 12.49
    },
    {
      "id": 39,
      "image": "https://example.com/image39.jpg",
      "description": "Producto 39 - Descripción del producto",
      "price": 42.99
    },
    {
      "id": 40,
      "image": "https://example.com/image40.jpg",
      "description": "Producto 40 - Descripción del producto",
      "price": 66.99
    },
    {
      "id": 41,
      "image": "https://example.com/image41.jpg",
      "description": "Producto 41 - Descripción del producto",
      "price": 14.49
    },
    {
      "id": 42,
      "image": "https://example.com/image42.jpg",
      "description": "Producto 42 - Descripción del producto",
      "price": 34.95
    },
    {
      "id": 43,
      "image": "https://example.com/image43.jpg",
      "description": "Producto 43 - Descripción del producto",
      "price": 19.49
    },
    {
      "id": 44,
      "image": "https://example.com/image44.jpg",
      "description": "Producto 44 - Descripción del producto",
      "price": 62.99
    },
    {
      "id": 45,
      "image": "https://example.com/image45.jpg",
      "description": "Producto 45 - Descripción del producto",
      "price": 57.49
    },
    {
      "id": 46,
      "image": "https://example.com/image46.jpg",
      "description": "Producto 46 - Descripción del producto",
      "price": 46.95
    },
    {
      "id": 47,
      "image": "https://example.com/image47.jpg",
      "description": "Producto 47 - Descripción del producto",
      "price": 58.99
    },
    {
      "id": 48,
      "image": "https://example.com/image48.jpg",
      "description": "Producto 48 - Descripción del producto",
      "price": 16.95
    },
    {
      "id": 49,
      "image": "https://example.com/image49.jpg",
      "description": "Producto 49 - Descripción del producto",
      "price": 23.49
    },
    {
      "id": 50,
      "image": "https://example.com/image50.jpg",
      "description": "Producto 50 - Descripción del producto",
      "price": 19.75
    }
  ]



  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    try {
      setLoading(true);

      const getProducts = () => {
        // fetch('http://localhost:8081/api/v1/products')
        //   .then(response => response.json())
        //   .then(data => {
        //     const { products, ...pagination } = data;
        //     setLoading(false);
        //   }
        setProducts(products1);
        // )}
}
        getProducts();

    } catch (error) {
      setError(error.message)
    }
  }, [categoryId]);

  return [products, loading, error];
}

export default useFirebase;