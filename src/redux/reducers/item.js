const initialState = {
    data: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_DATA_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'There is fail to request data'
            }
        }
        case 'GET_DATA_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.result
            }
        }
        default: {
            return state
        }
    }
}