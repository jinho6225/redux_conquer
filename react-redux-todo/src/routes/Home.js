import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../store'
import Todo from '../components/Todo'

function Home(props) {
    const { state, dAddTodo } = props
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dAddTodo(text)
        setText('')
    }
    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>Add</button>
        </form>
        <ul>
            {state.map(todo => {
                return (
                    <Todo {...todo} key={todo.id} />
                )
            })}
        </ul>
    </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dAddTodo: (todo) => {
            return dispatch(addTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)