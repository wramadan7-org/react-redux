import { default as axios } from 'axios'

export default {
    getData: () => ({
        type: 'GET_DATA_ITEM',
        payload: axios.get('http://localhost:8080/public/items')
    })
}