import { default as axios } from 'axios'
import http from '../../helpers/http'

export default {
    // getData: () => ({
    //     type: 'GET_DATA',
    //     payload: axios.get('https://rickandmortyapi.com/api/episode')
    // })
    getData: () => ({
        type: 'GET_DATA',
        payload: axios.get('https://rickandmortyapi.com/api/episode')
    })
}