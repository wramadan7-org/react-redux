// import { default as axios } from 'axios'
import http from '../../helpers/http'

export default {
    getData: () => ({
        type: 'GET_DATA_CATEGORY',
        payload: http().get(`public/category`)
    }),

    getDetail: (id) => ({
        type: 'GET_DETAIL_CATEGORY',
        payload: http().get(`category/detail/${id}`)
    })
}