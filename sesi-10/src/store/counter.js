const initialState = {
    title: 'Demo Redux',
    counter: 0,
}

const counter = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { 
                ...state,
                counter: state.counter + action.payload
            }
        case 'DECREMENT':
            return { 
                ...state,
                counter: state.counter - action.payload
            }
        default: 
            return state
    }
}

export default counter