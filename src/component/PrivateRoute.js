/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
  //  console.log('render provedr', props)
  componentDidMount () {
    this.props.auth
  }

  render () {
    console.log('sss', this.props)
    return (
      <Route render={
          (props) => {
            const childWithProps = React.Children.map(this.props.children, child => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, props)
              }
              return child
            })
            if (this.props.auth.token.length > 0) {
              return childWithProps
            } else {
              return <Redirect to={{ pathname: '/login', state: { alert: 'Login first!', color: 'danger' } }} />
            }
          }
      } />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(PrivateRoute)
