/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Alert } from 'reactstrap'

export default class Home extends Component {
  render () {
    return (
            <div div className="vh-100 d-flex justify-content-center align-items-center flex-column" >
                <div style={{ width: 400 }}>
                    {this.props.location.state && this.props.location.state.isLogin && <Alert color='success'>Login Successfully</Alert>}
                </div>
                <h1>Counter</h1>
                <h1>{this.props.counter}</h1>
                <Link to='/counter'>Go to Counter Page</Link>
            </div >
    )
  }
}
