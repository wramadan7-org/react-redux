const initialState = {
    dataAddress: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
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
        default: {
            return state
        }
    }
}