import { configureStore, createSlice } from "@reduxjs/toolkit";
const todoList = document.querySelector('.todo-list')
const addBtn = document.querySelector('.addBtn')
const inputField = document.querySelector('.inputField')

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            console.log(action)
            state.push({ todo: action.payload, id: Date.now() })
        },
        delTodo: (state, action) => {
            const id = parseInt(action.payload)
            return state.filter(todo => todo.id !== id)
        }
    }
})

const store = configureStore({
    reducer: todoSlice.reducer
})

console.log(store, 'store')
const { actions } = todoSlice;
const { addTodo, delTodo } = actions;

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
            store.dispatch(delTodo(id))
        })
        li.innerHTML = playload.todo
        li.id = playload.id
        li.appendChild(btn)
        todoList.appendChild(li)
    })
})