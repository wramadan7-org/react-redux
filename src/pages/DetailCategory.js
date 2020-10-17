import React, { Component } from 'react'
import { connect } from 'react-redux'

import categoryActions from '../redux/actions/category'
import {
    Container, Row, Col,
    Card, CardImg, CardBody, CardTitle
} from 'reactstrap'
import { Link } from 'react-router-dom'

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
                <Container className="my-3">
                    <Row className="mt-3">
                        {!isLoadingCategory && !isErrorCategory && dataCategory.length !== 0 && dataCategory.map(o => (
                            <Col md={4} sm={6} lg={3} xs={6}>
                                <Link to={"/product/detail/" + o.id_item}>
                                    <Card className="cardProduct shadow justify-content-between mt-3">
                                        <CardImg src={jas} />
                                        <CardBody>
                                            <CardTitle className="font-weight-bolder text-dark">{o.name}</CardTitle>
                                            <CardTitle className="text-muted">{o.name_category}</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        ))
                        }
                    </Row >
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