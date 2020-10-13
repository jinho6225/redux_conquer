import { createStore } from 'redux'
const ADD = 'ADD'
const DEL = 'DEL'

export const addTodo = (todo) => {
    return {
        type: ADD,
        todo
    }
}
export const delTodo = (id) => {
    return {
        type: DEL,
        id
    }
}

function reducer(state = [], action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                { 
                    todo: action.todo,
                    id: Date.now()
                }
            ]
        case DEL:
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

const store = createStore(reducer)

export default store