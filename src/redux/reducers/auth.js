const initialState = {
    isLogin: true,
    isError: false,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkX3VzZXIiOjUyLCJuYW1lIjoiV2FoeXUgUmFtYWRhbiIsImVtYWlsIjoid3JhbWE3QGdtYWlsLmNvbSIsImlkX3JvbGUiOjIsImdlbmRlciI6IkZlbWFsZSJ9LCJpYXQiOjE2MDI2NDk4MDR9.4xhTUffrYK0fMxFoqRzdiHLKtahRj0I5NTzo9oKnsiE',
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
                isLogin: false,
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