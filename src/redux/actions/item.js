// import { default as axios } from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
    getData: () => ({
        type: 'GET_DATA_ITEM',
        payload: http().get('public/items')
    }),
    getDetail: (id, token) => ({
        type: 'GET_DETAIL_ITEM',
        payload: http(token).get(`public/items/${id}`)
    }),
    addProduct: (token, data) => ({
        type: 'ADD_PRODUCT',
        payload: http(token).post('items', data)
    }),
    updateProductWithPicture: (token, data, id) => ({
        type: 'UPDATE_PRODUCT',
        payload: http(token).put(`items/put/update/${id}`, data)
    }),
    updateProductWithOutPicture: (token, data, id) => ({
        type: 'UPDATE_PRODUCT',
        payload: http(token).put(`items/put/update/${id}`, qs.stringify(data))
    }),
    deleteProduct: (token, id) => ({
        type: 'DELETE_PRODUCT',
        payload: http(token).delete(`items/delete/${id}`)
    }),
    reset: () => ({
        type: 'RESET'
    })
}