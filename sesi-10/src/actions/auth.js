import { 
    SET_LOGIN_ERROR, 
    SET_LOGIN_PENDING, 
    SET_LOGIN_SUCCESS 
} from "../store/auth"

const setLoginPending = payload => {
    return {
        type: SET_LOGIN_PENDING,
        payload
    }
}

const setLoginSuccess = payload => {
    return {
        type: SET_LOGIN_SUCCESS,
        payload
    }
}

const setLoginError = payload => {
    return {
        type: SET_LOGIN_ERROR,
        payload
    }
}

const callLoginApi = (email, password, callback) => {
    setTimeout(() => {
        if(email === 'test@email.com' && password === 'admin') {
            return callback(null)
        }
        
        return callback(new Error('Invalid Email or Password'))
    }, 3000)
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(setLoginPending(true))
        dispatch(setLoginError(false))
        dispatch(setLoginSuccess(false))
        callLoginApi(email, password, error => {
            dispatch(setLoginPending(false))
            if(error) {
                dispatch(setLoginError(error.message))
            } else {
                dispatch(setLoginSuccess(true))
            }
        })
    }
}