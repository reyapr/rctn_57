export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING'
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'

const initialState = {
    isLoading: false,
    isSuccess: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                isSuccess: action.payload
            }
        case SET_LOGIN_PENDING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return initialState
    }
}
export default reducer
