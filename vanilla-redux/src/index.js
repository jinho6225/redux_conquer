// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit'
const val = document.querySelector("#value")
const PlusBtn = document.querySelector("#increment")
const MinusBtn = document.querySelector("#decrement")
const ifOddBtn = document.querySelector("#incrementIfOdd")
const ifAsyncBtn = document.querySelector("#incrementAsync")

const counterSlice = createSlice({
    name: 'reducer',
    initialState: 0,
    reducers: {
      INCREMENT: state => state + 1,
      DECREMENT: state => state - 1
    }
  })
  
  const store = configureStore({
    reducer: counterSlice.reducer
  })

const { actions } = counterSlice;
const { INCREMENT, DECREMENT } = actions;

function render() {
    val.innerHTML = store.getState()
}
render()
store.subscribe(render)

PlusBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
MinusBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
ifOddBtn.addEventListener('click', () => {
    if (store.getState() % 2 === 1) {
        store.dispatch(increment())
    }
})
ifAsyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        store.dispatch(increment())
    }, 1000)
})
