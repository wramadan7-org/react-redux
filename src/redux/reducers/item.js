const initialState = {
    dataItem: [],
    dataAddItem: [],
    dataUpdateItem: [],
    dataDeleteItem: [],
    isLoading: '',
    isError: '',
    alertMsg: '',
    success: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // ADD
        case 'ADD_PRODUCT_PENDING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'ADD_PRODUCT_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Add product rejected!'
            }
        }
        case 'ADD_PRODUCT_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                isError: false,
                dataAddItem: action.payload.data.data,
                success: action.payload.data.success,
                alertMsg: action.payload.data.message
            }
        }

        // GET
        case 'GET_DATA_ITEM_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'GET_DATA_ITEM_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'There is fail to request data'
            }
        }
        case 'GET_DATA_ITEM_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                dataItem: action.payload.data.result
            }
        }

        // UPDATE
        case 'UPDATE_PRODUCT_PENDING': {
            return {
                ...state,
                isLoading: true,
            }
        }
        case 'UPDATE_PRODUCT_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Update rejected!'
            }
        }
        case 'UPDATE_PRODUCT_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                isError: false,
                success: action.payload.data.success,
                dataUpdateItem: action.payload.data.result,
                alertMsg: action.payload.data.message
            }
        }

        // DELETE
        case 'DELETE_PRODUCT_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'DELETE_PRODUCT_REJECTED': {
            return {
                ...state,
                isLoading: false,
                isError: true,
                alertMsg: 'Delete rejected!'
            }
        }
        case 'DELETE_PRODUCT_FULFILLED': {
            return {
                ...state,
                isLoading: false,
                isError: false,
                success: action.payload.data.success,
                alertMsg: action.payload.data.message,
                dataDeleteItem: action.payload.data.data
            }
        }

        case 'RESET': {
            return {
                isLoading: false,
                isError: false,
                dataAddItem: [],
                dataUpdateItem: [],
                dataDeleteItem: [],
                alertMsg: '',
                success: false,
            }
        }
        default: {
            return state
        }
    }
}