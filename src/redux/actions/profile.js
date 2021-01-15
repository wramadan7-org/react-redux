import http from '../../helpers/http'
import qs from 'querystring'

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('customer/profile')
    }
  },
  updateProfile: (token, data) => {
    return {
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('customer/profile', qs.stringify(data))
    }
  },
  updatePhotoProfile: (token, data) => ({
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('/customer/profile', data)
  }),
  changePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).patch('/customer/changePassword', qs.stringify(data)),
  }),
  clearPassword: () => ({
    type: 'CLEAR_PASSWORD',
  }),
  getProfileHistory: (token) => {
    return {
      type: 'GET_PROFILE_HISTORY',
      payload: http(token).get('customer/profile/history')
    }
  }
}
