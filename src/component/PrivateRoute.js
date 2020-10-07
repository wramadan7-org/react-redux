import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class PrivateRoute extends Component {
    render() {
        return (
            <Route {...this.rest} render={({ location }) => this.props.isLogin ? (this.props.children) : (<Redirect to={{ pathname: '/login', state: { from: location } }} />)} />
        )
    }

}
