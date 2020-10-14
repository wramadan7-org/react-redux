import http from '../../helpers/http'
import qs from 'querystring'

export default {

    getAddress: (token) => ({
        type: 'GET_ADDRESS',
        payload: http(token).get(`customer/address`)
    }),

    addAddress: (token, data) => ({
        type: 'ADD_ADDRESS',
        payload: http(token).post(`customer/address`, qs.stringify(data))
    }),

    putAddress: (token, data, id) => ({
        type: 'UPDATE_ADDRESS',
        payload: http(token).put(`customer/address/${id}`, qs.stringify(data))
    })
}