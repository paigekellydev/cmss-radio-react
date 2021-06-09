import React from 'react'

export default function LoginSignUp(props) {

    return (
        <div>
            <button onClick={props.selectLogin}>
                I have an account
            </button>
            <button onClick={props.selectSignUp}>
                I want to Sign Up
            </button>
        </div>
    )
}
