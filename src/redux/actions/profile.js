import http from '../../helpers/http'

export default {
    getProfile: (token) => {
        return {
            type: 'GET_PROFILE',
            payload: http(token).get(`customer/profile`)
        }
    },
    getProfileHistory: (token) => {
        return {
            type: 'GET_PROFILE_HISTORY',
            payload: http(token).get(`customer/profile/history`)
        }
    }
}