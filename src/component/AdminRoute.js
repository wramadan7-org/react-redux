/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class AdminRoute extends Component {
  //  console.log('render provedr', props)
  componentDidMount () {
    this.props.auth
    this.props.account
  }

  render () {
    return (
      <Route exact render={
          (props) => {
            const childWithProps = React.Children.map(this.props.children, child => {
              // console.log('child', this.props.children)
              if (React.isValidElement(child)) {
                return React.cloneElement(child, this.props)
              }
              return child
            })
            if (this.props.auth.token.length > 0 && this.props.account.dataProfile.role === "admin") {
              console.log('uhuy', childWithProps)
              // console.log('p', this.props)
              // const initialProps = [childWithProps, this.props]
              // console.log('initial',initialProps)
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
  auth: state.auth,
  account: state.profile,
})

export default connect(mapStateToProps, null)(AdminRoute)
