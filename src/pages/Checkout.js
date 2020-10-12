import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavigationBar from '../component/NavigationBar'
import PageCheckout from '../component/Checkout'

export default class Checkout extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <PageCheckout />
            </div>
        )
    }
}
