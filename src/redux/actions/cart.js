// import { default as axios } from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getCart: (token) => ({
    type: 'GET_CART',
    payload: http(token).get('customer/cart')
  }),
  addCart: (token, data) => ({
    type: 'ADD_CART',
    payload: http(token).post('customer/cart', qs.stringify(data))
  }),
  deleteCart: (token, id) => ({
    type: 'DELETE_CART',
    payload: http(token).delete(`customer/cart/${id}`)
  })
}
