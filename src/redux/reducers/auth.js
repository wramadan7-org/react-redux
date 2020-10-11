const initialState = {
    isLogin: false,
    isError: false,
    token: '',
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'AUTH_USER_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'AUTH_USER_FULFILLED': {
            return {
                ...state,
                isError: false,
                isLogin: true,
                isLoading: false,
                token: action.payload.data.token
            }
        }
        case 'LOGOUT_USER': {
            return {
                ...state,
                isLogin: false,
                token: '',
                isError: false,
                alertMsg: 'Logout succesfully'
            }
        }
        default: {
            return state
        }
    }
}