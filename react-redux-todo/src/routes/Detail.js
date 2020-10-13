import React from 'react';
import { connect } from 'react-redux'

function Detail({todo}) {
    return (
        <>
            <h2>{todo?.todo}</h2>
            <h5>Created At: {todo && todo.id}</h5>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { match: { params : { id }} } = ownProps
    return {
        todo: state.find(todo => todo.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail)