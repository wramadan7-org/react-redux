const initialState = {
    dataCategory: [],
    isLoadingCategory: '',
    isErrorCategory: '',
    alertMsgCategory: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_CATEGORY_PENDING': {
            return {
                ...state,
                isLoadingCategory: true
            }
        }
        case 'GET_DATA_CATEGORY_REJECTED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: true,
                alertMsgCategory: 'There is fail to request data'
            }
        }
        case 'GET_DATA_CATEGORY_FULFILLED': {
            return {
                ...state,
                isLoadingCategory: false,
                dataCategory: action.payload.data.result
            }
        }
        default: {
            return state
        }
    }
}