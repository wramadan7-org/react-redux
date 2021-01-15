const initialState = {
    dataCart: [],
    total: [],
    isLoading: '',
    isError: '',
    alertMsg: '',
    success: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CART_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_CART_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'There is fail to request data'
            }
        }
        case 'GET_CART_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                dataCart: action.payload.data.results,
                total: action.payload.data.total
            }
        }
        case 'DELETE_CART_PENDING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'DELETE_CART_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Rejected',
            }
        }
        case 'DELETE_CART_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                isError: false,
                success: action.payload.data.success,
                alertMsg: action.payload.data.message,
            }
        }
        default: {
            return state
        }
    }
}