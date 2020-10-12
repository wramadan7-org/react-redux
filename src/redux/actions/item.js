// import { default as axios } from 'axios'
import http from '../../helpers/http'

export default {
    getData: () => ({
        type: 'GET_DATA_ITEM',
        payload: http().get('public/items')
    }),
    getDetail: (id) => ({
        type: 'GET_DETAIL_ITEM',
        payload: http().get(`items/detail/${id}`)
    })
}