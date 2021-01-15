const initialState = {
  dataProfile: [],
  dataProfileUpdate: [],
  isLoading: '',
  isError: '',
  alertMsg: '',
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Your request rejected'
      }
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataProfile: action.payload.data.data
      }
    }
    // update
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Your request rejected'
      }
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataProfileUpdate: action.payload.data.result,
        alertMsg: action.payload.data.message,
        success: action.payload.data.success,
      }
    }
    default: {
      return state
    }
  }
}
