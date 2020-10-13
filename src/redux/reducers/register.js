const initialState = {
    dataUser: [],
    isLoading: '',
    isError: false,
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'REGISTER_USER_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'REGISTER_USER_FULFILLED': {
            return {
                ...state,
                isError: false,
                isLoading: false,
                dataUser: action.payload.data.data
            }
        }
        default: {
            return state
        }
    }
}