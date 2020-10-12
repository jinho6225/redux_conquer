import { createStore } from 'redux';
const val = document.querySelector("#value")
const incrementVariable = document.querySelector("#increment")
const decrementVariable = document.querySelector("#decrement")
const ifOdd = document.querySelector("#incrementIfOdd")
const ifAsync = document.querySelector("#incrementAsync")

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
    console.log(state)
    console.log(action)
    // if (action.type === ADD) {
    //     return {
    //         ...state,
    //         value: state.value + state
    //     }
    // }
    return state
}

const store = createStore(reducer)

console.log(store.getState(), 'getState')




