const initialState = {
    dataCart: [],
    total: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
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
        default: {
            return state
        }
    }
}