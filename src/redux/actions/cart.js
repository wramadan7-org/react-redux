import { default as axios } from 'axios'

export default {
    getCart: () => ({
        type: 'GET_CART',
        payload: axios.get('http://localhost:8080/cart')
    })
}