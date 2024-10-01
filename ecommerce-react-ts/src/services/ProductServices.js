import axios from 'axios'


class ProductService
{
    getProducts(){

        return axios.get('localhost:8080/api/v1/products')
    }
}



export default ProductService;