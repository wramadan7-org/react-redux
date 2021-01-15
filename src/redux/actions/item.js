// import { default as axios } from 'axios'
import http from '../../helpers/http'

export default {
    getData: () => ({
        type: 'GET_DATA_ITEM',
        payload: http().get('public/items')
    }),
    getDetail: (id, token) => ({
        type: 'GET_DETAIL_ITEM',
        payload: http(token).get(`public/items/${id}`)
    })
}