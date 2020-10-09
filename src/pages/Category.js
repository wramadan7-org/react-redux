import React, { Component } from 'react'
import { connect } from 'react-redux'

import categoryActions from '../redux/actions/category'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle,
    Button
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'

class Category extends Component {

    componentDidMount() {
        this.props.getCategory()
    }


    render() {
        const { isLoadingCategory, dataCategory, isErrorCategory, alertMsgCategory } = this.props.category
        return (
            <div>
                <NavigationBar />
                <Container>
                    <h1>Category</h1>
                    <Row>
                        {!isLoadingCategory && !isErrorCategory && dataCategory.length !== 0 && dataCategory.map(o => (
                            <Col md={4} sm={6} lg={3} xs={6}>
                                <Card className="shadow justify-content-between mt-3">
                                    <CardImg>{o.picture}</CardImg>
                                    <CardBody>
                                        <CardTitle className="font-weight-bold text-dark">{o.name_category}</CardTitle>
                                    </CardBody>
                                    <Button>Detail</Button>
                                </Card>
                            </Col>
                        ))}
                        {isLoadingCategory && !isErrorCategory && (
                            <div>Loading</div>
                        )}
                        {isErrorCategory && alertMsgCategory && (
                            <div><p>{alertMsgCategory}</p></div>
                        )}
                    </Row>
                </Container>
            </div>
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