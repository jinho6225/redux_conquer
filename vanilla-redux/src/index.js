import { createStore } from 'redux';
const val = document.querySelector("#value")
const PlusBtn = document.querySelector("#increment")
const MinusBtn = document.querySelector("#decrement")
const ifOddBtn = document.querySelector("#incrementIfOdd")
const ifAsyncBtn = document.querySelector("#incrementAsync")

// 액션 타입 정의
const ADD = 'ADD'
const MINUS = 'MINUS'

// 액션 생성함수 정의
const increment = diff => ({ type: ADD, diff });
const decrement = () => ({ type: MINUS });

// 초깃값 설정
const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === ADD) {
        return {
            ...state,
            value: state.value + action.diff
        }
    } else if (action.type === MINUS) {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state
    }
}

const store = createStore(reducer)
function render() {
    val.innerHTML = store.getState().value
}
render()

store.subscribe(render)

PlusBtn.addEventListener('click', () => {
    store.dispatch(increment(3))
})
MinusBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
ifOddBtn.addEventListener('click', () => {
    if (store.getState().value % 2 === 1) {
        store.dispatch(increment(1))
    }
})
ifAsyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        store.dispatch(increment(1))
    }, 1000)
})
