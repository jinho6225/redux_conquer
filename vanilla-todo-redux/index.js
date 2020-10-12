import { createStore } from 'redux';


const reducer = (state = [], action) => {
    switch(action.type) {
        case "ADD":
            return

        default:
            return state
    }
}

const store = createStore(reducer)

console.log(store, 'store')
console.log(store.getState(), 'getState')

