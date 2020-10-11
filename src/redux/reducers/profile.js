const initialState = {
    dataProfile: [],
    isLoading: '',
    isError: '',
    alertMsg: '',
    token: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROFILE_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_PROFILE_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Your request rejected'
            }
        }
        case 'GET_PROFILE_FULFILLED': {
            return {
                ...state,
                isError: false,
                dataProfile: action.payload.data.data
            }
        }
        default: {
            return state
        }
    }
}