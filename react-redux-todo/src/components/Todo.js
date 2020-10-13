import React from "react"
import { connect } from 'react-redux'
import { delTodo } from '../store'
import { Link } from "react-router-dom";


function Todo ({todo, dDelTodo, id}) {
    console.log(todo)
    return (
        <li>
            <Link to={`/${id}`}>
                {todo} 
            </Link>
            <button onClick={dDelTodo}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dDelTodo: () => dispatch(delTodo(ownProps.todo.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)