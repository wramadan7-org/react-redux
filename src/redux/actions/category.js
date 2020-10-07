import { default as axios } from 'axios'

export default {
    getData: () => ({
        type: 'GET_DATA_CATEGORY',
        payload: axios.get('http://localhost:8080/public/category')
    })

    // getDetail: () => ({
    //     type: 'GET_DETAIL',
    //     payload: axios.get('http://localhost:8080/category/')
    // })
}