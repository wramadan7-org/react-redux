// import { default as axios } from 'axios'
import http from '../../helpers/http'

export default {
    // getCart: () => ({
    //     type: 'GET_CART',
    //     payload: axios.get('http://localhost:8080/customer/cart')
    // })
    getCart: (token) => ({
        type: 'GET_CART',
        payload: http(token).get('customer/cart')
    })
    // addCart: () => ({
    //     type: 'ADD_CART',
    //     payload: axios.post('http://localhost:8080/customer/cart')
    // })
}