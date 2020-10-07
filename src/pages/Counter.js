import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class Counter extends Component {
    render() {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
                <h1>Counter</h1>
                <h1>{this.props.counter}</h1>
                <div>
                    <Button onClick={this.props.decrement}>-</Button>
                    {' '}
                    <Button onClick={this.props.increment}>+</Button>
                </div>
                <Link to='/'>Back to home page</Link>
            </div>
        )
    }
}