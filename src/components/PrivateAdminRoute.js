import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateAdminRoute({path, component: Component, ...props}) {
    return (localStorage.token && props.user.authorized_user === true)
        ? <Route exact render={(routerProps) => <Component {...props}/>} />
        : <Redirect to='/' />
}
