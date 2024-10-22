import  { useEffect, useState } from 'react';

const useBackendApi = ({limit, page, description}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    try {
      setLoading(true);

      const getProducts = async () => {
        try {
          const response = await fetch(`http://localhost:8081/api/v1/products?limit=${limit}&page=${page}&description=${description}`);
          const data = await response.json();
          const {products, ...pagination} = data;
          console.log(pagination)
          if(description){           
            const productosFiltrados = products.filter(product => product.description.includes(description))
            setProducts(productosFiltrados);
          }          
          setProducts(products);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      getProducts();

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [description, limit, page]);

  return [products, loading, error];
}


export default useBackendApi;



 