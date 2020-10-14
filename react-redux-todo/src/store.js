import { configureStore, createSlice } from '@reduxjs/toolkit'

const toDos = createSlice({
  name: 'toDos',
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
  },
})

const { actions } = toDos;

export const { addTodo, delTodo } = actions

const store = configureStore({ reducer: toDos.reducer })
export default store;

