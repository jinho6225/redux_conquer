import React from "react"
import { connect } from 'react-redux'
import { delTodo } from '../store'

function Todo ({todo, dDelTodo}) {
    return (
        <li id={todo.id}>{todo.todo} <button onClick={dDelTodo}>DEL</button></li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dDelTodo: () => dispatch(delTodo(ownProps.todo.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)