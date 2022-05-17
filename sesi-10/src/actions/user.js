import axios from "axios"

export const fetchData = () => {
    return async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
            .then(data => {
                dispatch({
                    type: 'SET_USERS',
                    payload: data
                })
            })
    }
}