const initialState = {
   isLoading: false,
   isError: false,
   alertMsg: '',
   success: false,
   dataGetTransaction: [],
}

export default(state = initialState, action) => {
   switch(action.type) {
      case 'ADD_TRANSACTION_PENDING': {
         return {
            ...state,
            isLoading: true,
         }
      }
      case 'ADD_TRANSACTION_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         }
      }
      case 'ADD_TRANSACTION_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            alertMsg: action.payload.data.message,
            success: action.payload.data.success,
         }
      }
      case 'GET_TRANSACTION_PENDING': {
         return {
            ...state,
            isLoading: false,
         }
      }
      case 'GET_TRANSACTION_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         }
      }
      case 'GET_TRANSACTION_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            success: action.payload.data.success,
            alertMsg: action.payload.data.message,
            dataGetTransaction: action.payload.data.result,
         }
      }
      default: {
         return state
      }
   }
}