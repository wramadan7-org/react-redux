// import { default as axios } from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
    // getCart: () => ({
    //     type: 'GET_CART',
    //     payload: axios.get('http://localhost:8080/customer/cart')
    // })
    getCart: (token) => ({
        type: 'GET_CART',
        payload: http(token).get('customer/cart')
    }),
    addCart: (token, data) => ({
        type: 'ADD_CART',
        payload: http(token).post('/customer/cart', qs.stringify(data))
        // payload: axios.post('http://localhost:8080/customer/cart')
    })
}