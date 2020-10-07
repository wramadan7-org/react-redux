import React, { Component } from 'react'
import { connect } from 'react-redux'

import categoryActions from '../redux/actions/category'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,
    Button
} from 'reactstrap'

class Category extends Component {

    componentDidMount() {
        this.props.getCategory()
    }


    render() {
        const { isLoading, data, isError, alertMsg } = this.props.category
        return (
            <Container>
                <h1>Category</h1>
                <Row>
                    {!isLoading && !isError && data.length !== 0 && data.map(o => (
                        <Col md={3}>
                            <Card className="shadow justify-content-between mt-3">
                                <CardImg>{o.picture}</CardImg>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">{o.name_category}</CardTitle>
                                </CardBody>
                                <Button>Detail</Button>
                            </Card>
                        </Col>
                    ))}
                    {isLoading && !isError && (
                        <div>Loading</div>
                    )}
                    {isError && alertMsg && (
                        <div><p>{alertMsg}</p></div>
                    )}
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps = {
    getCategory: categoryActions.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)