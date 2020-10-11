const initialState = {
    dataItem: [],
    isLoading: '',
    isError: '',
    alertMsg: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DETAIL_ITEM_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_DETAIL_ITEM_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'There is fail to request detail'
            }
        }
        case 'GET_DETAIL_ITEM_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                dataItem: action.payload.data.data
            }
        }
        default: {
            return state
        }
    }
}