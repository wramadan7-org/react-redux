import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import itemActions from '../redux/actions/item'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle
} from 'reactstrap'
import { Link } from 'react-router-dom'

import imgJas from '../assets/images/jas.jpg'

class Item extends Component {

    componentDidMount() {
        this.props.getItem()
    }


    render() {
        const { isLoading, dataItem, isError, alertMsg } = this.props.item
        return (
            <Container>
                <div className="my-3">
                    <Row className="my-3">
                        {!isLoading && !isError && dataItem.length !== 0 && dataItem.map(o => (
                            <Col md={4} sm={6} lg={3} xs={6}>
                                <Link to={"/public/product/detail/" + o.id_item}>
                                    <Card className="cardProduct shadow justify-content-between mx-3 my-3">
                                        <CardImg src={imgJas} />
                                        <CardBody>
                                            <CardTitle className="font-weight-bolder text-dark">{o.name}</CardTitle>
                                            <CardSubtitle className="text-danger font-weight-bold" >Rp {numeral(o.price).format(0, 0).toString().replace(',', '.')},-</CardSubtitle>
                                            <CardText className="text-muted">{o.category}</CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>

                {isLoading && !isError && (
                    <div>Loading</div>
                )}
                {isError && alertMsg && (
                    <div><p>{alertMsg}</p></div>
                )}
            </Container>

        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

const mapDispatchToProps = {
    getItem: itemActions.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)