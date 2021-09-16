import React from 'react'

const ShowSingleIndentScreen = ({ match }) => {
    return (
        <div>
            <h1>Hello</h1>
            <h1>{match.params.id}</h1>
        </div>
    )
}

export default ShowSingleIndentScreen
