import React, { Component } from 'react'
import NavigationBar from '../component/NavigationBar'
import ProductDetail from '../component/DetailProduct'
import { connect } from 'react-redux'
import itemActions from '../redux/actions/item'

class DetailProduct extends Component {

    componentDidMount() {
        let id = this.props.match.params.id
        // console.log(id)
        this.props.getDetailProduct(id)
    }


    render() {
        const { isLoading, isError, dataItem, alertMsg } = this.props.detailProduct
        // console.log(dataItem)
        return (
            <div>
                <NavigationBar />
                {!isLoading && !isError && dataItem.length !== 0 && (
                    <div>
                        {/* <h2>{dataItem.name}</h2> */}
                        <ProductDetail id_item={dataItem.id_item} category={dataItem.category} price={dataItem.price} name={dataItem.name} condition={dataItem.condition} description={dataItem.description} />
                    </div>
                )}
                {isLoading && !isError && (
                    <div>Loading</div>
                )}
                {isError && alertMsg && (
                    <div>{alertMsg}</div>
                )}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    detailProduct: state.detailProduct,
    auth: state.auth
})

const mapDispatchToProps = dispatch => {
    return {
        getDetailProduct: (id) => dispatch(itemActions.getDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)