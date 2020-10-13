// import { createStore } from 'redux';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
const val = document.querySelector("#value")
const PlusBtn = document.querySelector("#increment")
const MinusBtn = document.querySelector("#decrement")
const ifOddBtn = document.querySelector("#incrementIfOdd")
const ifAsyncBtn = document.querySelector("#incrementAsync")

// 액션 타입 정의
// 액션 생성함수 정의
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')
// 초깃값 설정
const reducer = createReducer(0, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1
  })

const store = configureStore({
    reducer
})


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
        store.dispatch(increment(1))
    }
})
ifAsyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        store.dispatch(increment(1))
    }, 1000)
})
