// import { default as axios } from 'axios'
import http from '../../helpers/http'
import qs from 'querystring'

export default {
    getData: () => ({
        type: 'GET_DATA_CATEGORY',
        payload: http().get(`public/category`)
    }),
    getCategoryByd: (id) => ({
        type: 'GET_CATEGORY_BY_ID',
        payload: http().get(`category/${id}`)
    }),
    getDetail: (id) => ({
        type: 'GET_DETAIL_CATEGORY',
        payload: http().get(`public/category/detail/${id}`)
    }),
    addCategory: (token, data) => ({
        type: 'ADD_CATEGORY',
        payload: http(token).post('category', data)
    }),
    udpateCategoryWithImage: (token, data, id) => ({
        type: 'UPDATE_CATEGORY',
        payload: http(token).put(`category/put/${id}`, data)
    }),
    udpateCategoryWoutImage: (token, data, id) => ({
        type: 'UPDATE_CATEGORY',
        payload: http(token).put(`category/put/${id}`, qs.stringify(data))
    }),
    deleteCategory: (token, id) => ({
        type: 'DELETE_CATEGORY',
        payload: http(token).delete(`category/${id}`)
    }),
    reset: () => ({
        type: 'RESET',
    })
}