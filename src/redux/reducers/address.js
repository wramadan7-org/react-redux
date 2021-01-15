const initialState = {
    dataAddress: [],
    dataUpdateAddress: [],
    isLoading: '',
    isError: '',
    alertMsg: '',
    success: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ADDRESS_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_ADDRESS_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'GET_ADDRESS_FULFILLED': {
            return {
                ...state,
                isError: false,
                isLoading: false,
                dataAddress: action.payload.data.result
            }
        }
        case 'UPDATE_ADDRESS_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'UPDATE_ADDRESS_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'UPDATE_ADDRESS_FULFILLED': {
            return {
                ...state,
                isError: false,
                isLoading: false,
                dataUpdateAddress: action.payload.data.result
            }
        }
        case 'DELETE_ADDRESS_PENDING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'DELETE_ADDRESS_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Rejected',
            }
        }
        case 'DELETE_ADDRESS_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                isError: false,
                alertMsg: action.payload.data.message,
                success: action.payload.data.success,
            }
        }
        default: {
            return state
        }
    }
}