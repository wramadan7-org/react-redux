import React, { Component } from 'react'
import { connect } from 'react-redux'

import itemActions from '../redux/actions/item'
import categoryActions from '../redux/actions/category'
import NavigationBar from '../component/NavigationBar'

import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,
    Button
} from 'reactstrap'

import imgJas from '../assets/images/jas.jpg'

import { Link } from 'react-router-dom'

class Public extends Component {

    componentDidMount() {
        this.props.getItem()
        this.props.getCategory()
    }


    render() {
        const { isLoadingItem, dataItem, isErrorItem, alertMsgItem } = this.props.item
        const { isLoadingCategory, dataCategory, isErrorCategory, alertMsgCategory } = this.props.category
        return (
            <>
                <NavigationBar />
                <Container>
                    <div className="mt-3">
                        <h1>Category</h1>
                        <Row className="mt-3">
                            {!isLoadingCategory && !isErrorCategory && dataCategory.length !== 0 && dataCategory.map(i => (
                                <Col md={3}>
                                    <Link to={"/public/category/detail/" + i.id_category}>
                                        <Card color="" className="shadow justify-content-between mt-3">
                                            <CardImg src={i.picture} />
                                            <CardBody>
                                                <CardTitle className="font-weight-bold">{i.name_category}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div className="mt-3">
                        <h1>New</h1>
                        <Row className="mt-3">
                            {!isLoadingItem && !isErrorItem && dataItem.length !== 0 && dataItem.map(o => (
                                <Col md={3}>
                                    <Link to={"/public/item/detail/" + o.id_item}>
                                        <Card className="cardProduct shadow justify-content-between mt-3">
                                            <CardImg src={imgJas} />
                                            <CardBody>
                                                <CardTitle className="font-weight-bolder">{o.name}</CardTitle>
                                                <CardSubtitle className="text-danger font-weight-bold" >{o.price}</CardSubtitle>
                                                <CardText className="text-muted">{o.category}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                    {isLoadingCategory && !isErrorCategory && (
                        <div>Loading</div>
                    )}
                    {isErrorCategory && alertMsgCategory && (
                        <div>{alertMsgItem}</div>
                    )}

                    {isLoadingItem && !isErrorItem && (
                        <div>Loading</div>
                    )}
                    {isErrorItem && alertMsgItem && (
                        <div>{alertMsgItem}</div>
                    )}
                </Container>
            </>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item,
    category: state.category
})

const mapDispatchToProps = {
    getItem: itemActions.getData,
    getCategory: categoryActions.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Public)