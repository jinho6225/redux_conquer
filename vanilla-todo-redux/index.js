import { createStore } from 'redux';
const todoList = document.querySelector('.todo-list')
const addBtn = document.querySelector('.addBtn')
const inputField = document.querySelector('.inputField')
const ADD = 'ADD'
const DEL = 'DEL'

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
            return [
                action.payload, ...state
            ]
        case DEL:
            return state.filter(el => el.id !== parseInt(action.payload.id))
        default:
            return state
    }
}

const store = createStore(reducer)
const addTodo = (todo) => {
    return {
        type: ADD,
        payload: {
            todo,
            id: Date.now()
        }
    }
}

const deleteTodo = (id) => {
    return {
        type: DEL,
        payload: {
            id
        }
    }
}

console.log(store, 'store')
console.log(store.getState(), 'getState')

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let todo = inputField.value
    inputField.value = ''
    store.dispatch(addTodo(todo))
})


store.subscribe(() => {
    todoList.innerHTML = ''
    store.getState().forEach(playload => {
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.innerHTML = "DEL"
        btn.addEventListener('click', (e) => {
            const id = e.target.parentNode.id
            store.dispatch(deleteTodo(id))
        })
        li.innerHTML = playload.todo
        li.id = playload.id
        li.appendChild(btn)
        todoList.appendChild(li)
    })
})