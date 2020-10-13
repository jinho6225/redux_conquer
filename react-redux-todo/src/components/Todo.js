import React from "react"
import { connect } from 'react-redux'
import { delTodo } from '../store'
import { Link } from "react-router-dom";


function Todo ({todo, dDelTodo, id}) {    return (
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
        dDelTodo: () => dispatch(delTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo)