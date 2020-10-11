const initialState = {
    dataCart: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART_PENDING': {
            return {
                ...state,
                isloading: true
            }
        }
        case 'ADD_CART_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'ADD_CART_FULFILLED': {
            return {
                ...state,
                isError: false,
                dataCart: action.payload.
            }
        }
        default: {
            return state
        }
    }
}