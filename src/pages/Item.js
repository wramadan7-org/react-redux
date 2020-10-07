import React, { Component } from 'react'
import { connect } from 'react-redux'

import itemActions from '../redux/actions/item'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,
    Button
} from 'reactstrap'

class Item extends Component {

    componentDidMount() {
        this.props.getItem()
    }


    render() {
        const { isLoading, dataItem, isError, alertMsg } = this.props.item
        return (
            <Container>
                <div></div>

                <div className="mt-3">
                    <h1>New</h1>
                    <Row className="mt-3">
                        {!isLoading && !isError && dataItem.length !== 0 && dataItem.map(o => (
                            <Col md={3}>
                                <Card className="shadow justify-content-between mt-3">
                                    <CardImg src={o.picture} />
                                    <CardBody>
                                        <p className="hide">{o.id_item}</p>
                                        <CardTitle className="font-weight-bold">{o.name}</CardTitle>
                                        <CardSubtitle className="font-weight-bold" >{o.price}</CardSubtitle>
                                        <CardText>{o.category}</CardText>
                                    </CardBody>
                                    <Button>Detail</Button>
                                </Card>
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