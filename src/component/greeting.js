import React from 'react'

export default function greeting(props) {
    console.log(props)
    return (
        <div>
            <h1> Welcome {props.name} {props.Lastname} </h1>
        </div>
    )
}
