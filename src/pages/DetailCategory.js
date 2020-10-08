import React, { Component } from 'react'
import { connect } from 'react-redux'

import categoryActions from '../redux/actions/category'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle,
    Button
} from 'reactstrap'

import jas from '../assets/images/jas.jpg'

import NavigationBar from '../component/NavigationBar'

class DetailCategory extends Component {

    componentDidMount() {
        // console.log(this.props.match.params.id)
        let id = this.props.match.params.id
        // console.log(id)
        this.props.getDetailCategory(id)
    }


    render() {
        const { isLoadingCategory, isErrorCategory, dataCategory, alertMsgCategory } = this.props.detailCategory
        return (
            <div>
                <NavigationBar />
                <Container>
                    <div className="mt-3">
                        <h1>Category</h1>
                        <Row className="mt-3">
                            {!isLoadingCategory && !isErrorCategory && dataCategory.length !== 0 && dataCategory.map(o => (
                                <Col md={3}>
                                    <Card className="cardProduct shadow justify-content-between mt-3">
                                        <CardImg src={jas} />
                                        <CardBody>
                                            <CardTitle className="font-weight-bold">{o.name}</CardTitle>
                                            <CardTitle className="font-weight-bold">{o.name_category}</CardTitle>
                                        </CardBody>
                                        <Button>Detail</Button>
                                    </Card>
                                </Col>
                            ))
                            }
                            {
                                isLoadingCategory && !isErrorCategory && (
                                    <div>Loading</div>
                                )
                            }
                            {
                                isErrorCategory && alertMsgCategory && (
                                    <div>{alertMsgCategory}</div>
                                )
                            }
                        </Row >
                    </div>
                </Container >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    detailCategory: state.detailCategory
})

const mapDispatchToProps = dispatch => {
    return {
        getDetailCategory: (id) => dispatch(categoryActions.getDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCategory)