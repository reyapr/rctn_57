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
const store = Redux.createStore(counter)

const titleEl = document.querySelector('#title')
const counterEl = document.querySelector('#counter')
const incrementEl = document.querySelector('#increment')
const decrementEl = document.querySelector('#decrement')

const render = () => {
    titleEl.innerHTML = store.getState().title
    counterEl.innerHTML = store.getState().counter
}

render()
store.subscribe(render)

// action
incrementEl.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' })
})

decrementEl.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' })
})