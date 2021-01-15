import http from '../../helpers/http'

export default {
   addTransaction: (token) => ({
      type: 'ADD_TRANSACTION',
      payload: http(token).post('customer/transaction')
   }),
   getTransaction: (token) => ({
      type: 'GET_TRANSACTION',
      payload: http(token).get('customer/transaction')
   })
}