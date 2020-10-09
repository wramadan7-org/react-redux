const initialState = {
    dataCart: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_CART_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_DATA_CART_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'There is fail to request data'
            }
        }
        case 'GET_DATA_CART_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                dataItem: action.payload.data.result
            }
        }
        default: {
            return state
        }
    }
}