import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({path, component: Component, ...props}) {
    return (localStorage.token)
        ? <Route exact render={(routerProps) => <Component {...props}/>} />
        : <Redirect to='/login' />
}
