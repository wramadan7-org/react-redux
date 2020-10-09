import React, { Component } from 'react'
import NavigationBar from '../component/NavigationBar'
import ProductDetail from '../component/DetailProduct'

export default class DetailProduct extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <ProductDetail />
            </div>
        )
    }
}
