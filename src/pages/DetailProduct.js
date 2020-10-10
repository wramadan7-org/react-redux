import React, { Component } from 'react'
import NavigationBar from '../component/NavigationBar'
import ProductDetail from '../component/DetailProduct'

export default class DetailProduct extends Component {
    state = {
        name: 'Adidas'
    }
    render() {
        return (
            <div>
                <NavigationBar />
                <ProductDetail name={this.state.name} />
            </div>
        )
    }
}
