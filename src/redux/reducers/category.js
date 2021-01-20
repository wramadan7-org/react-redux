const initialState = {
    dataCategory: [],
    dataCategoryById: [],
    dataAddCatgeory: [],
    dataUpdateCategory: [],
    dataDeleteCategory: [],
    isLoadingCategory: '',
    isErrorCategory: '',
    alertMsgCategory: '',
    success: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // ADD
        case 'ADD_CATEGORY_PENDING': {
            return {
                ...state,
                isLoadingCategory: true,
            }
        }
        case 'ADD_CATEGORY_REJECTED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: true,
                alertMsgCategory: 'Add category rejected',
            }
        }
        case 'ADD_CATEGORY_FULFILLED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: false,
                dataAddCatgeory: action.payload.data.data,
                alertMsgCategory: action.payload.data.message,
                success: action.payload.data.success,
            }
        }

        // GET
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
        // GET BY ID
        case 'GET_CATEGORY_BY_ID_PENDING': {
            return {
                ...state,
                isLoadingCategory: true
            }
        }
        case 'GET_CATEGORY_BY_ID_REJECTED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: true,
                alertMsgCategory: 'Request rejected'
            }
        }
        case 'GET_CATEGORY_BY_ID_FULFILLED': {
            return {
                ...state,
                isLoadingCategory: false,
                dataCategoryById: action.payload.data.data,
                success: action.payload.data.success,
                alertMsgCategory: action.payload.data.message
            }
        }
        // UPDATE
        case 'UPDATE_CATEGORY_PENDING': {
            return {
                ...state,
                isLoadingCategory: true
            }
        }
        case 'UPDATE_CATEGORY_REJECTED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: true,
                alertMsgCategory: 'Update rejected'
            }
        }
        case 'UPDATE_CATEGORY_FULFILLED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: false,
                dataUpdateCategory: action.payload.data.data,
                success: action.payload.data.success,
                alertMsgCategory: action.payload.data.message,
            }
        }
        // DELETE
        case 'DELETE_CATEGORY_PENDING': {
            return {
                ...state,
                isLoadingCategory: false
            }
        }
        case 'DELETE_CATEGORY_REJECTED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: true,
                alertMsgCategory: 'Delete rejected'
            }
        }
        case 'DELETE_CATEGORY_FULFILLED': {
            return {
                ...state,
                isLoadingCategory: false,
                isErrorCategory: false,
                dataDeleteCategory: action.payload.data.data,
                success: action.payload.data.success,
                alertMsgCategory: action.payload.data.message,
            }
        }
        // RESET
        case 'RESET': {
            return {
                ...state,
                dataAddCatgeory: [],
                dataUpdateCategory: [],
                dataDeleteCategory: [],
                isLoadingCategory: '',
                isErrorCategory: '',
                alertMsgCategory: '',
                success: false,
            }
        }
        default: {
            return state
        }
    }
}