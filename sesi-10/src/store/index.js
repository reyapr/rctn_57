import { createStore } from 'redux'

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

const store = createStore(counter)

export default store;