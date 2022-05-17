import { createStore } from 'redux'

// initialState
const initialState = {
    title: 'Demo Redux',
    counter: 0
}

/**
 * reducer
 * @param {*} state 
 * @param {*} action => { type: 'ACTION_TYPE', payload: ${value} }
 */
const counter = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { 
                ...state,
                counter: state.counter + 1 
            }
        case 'DECREMENT':
            return { 
                ...state,
                counter: state.counter - 1 
            }
        default: 
            return state
    }
}

// create store
const store = createStore(counter)

// listen store
store.subscribe(() => console.log(store.getState(), `<===================  ==================`))


// action
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })