import http from '../../helpers/http'
import qs from 'querystring'

export default {
    getProfile: (token) => {
        return {
            type: 'GET_PROFILE',
            payload: http(token).get(`customer/profile`)
        }
    },
    putProfile: (token, data) => {
        console.log(data)
        return {
            type: 'PUT_PROFILE',
            payload: http(token).put(`customer/profile`, qs.stringify(data))
        }
    },
    getProfileHistory: (token) => {
        return {
            type: 'GET_PROFILE_HISTORY',
            payload: http(token).get(`customer/profile/history`)
        }
    }
}