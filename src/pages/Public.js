import React, { Component } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import itemActions from '../redux/actions/item'
import categoryActions from '../redux/actions/category'
import NavigationBar from '../component/NavigationBar'
import imgSlide1 from '../assets/images/slider1.png'
import imgSlide2 from '../assets/images/slider2.png'
import imgCategory from '../assets/images/hicilpart1.png'

import {
    Container, Row, Col, Carousel,
    Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, CarouselIndicators, CarouselControl
} from 'reactstrap'

import imgJas from '../assets/images/jas.jpg'

import { Link } from 'react-router-dom'

const item = [
    {
        src: { imgSlide1 },
        altText: 'Slide 1',
        caption: 'Slide1'
    },
    {
        src: { imgSlide2 },
        altText: 'Slide 2',
        caption: 'Slide2'
    },
]


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
                    {/* <div>
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={items} activeInde{activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </div> */}
                    <div id="carouselExampleIndicators" className="carousel slide my-3" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex">
                                <img src={imgSlide1} className="d-block w-50" alt="slide" />
                                <img src={imgSlide2} className="d-block w-50" alt="slide" />
                            </div>
                            <div className="carousel-item">
                                <img src={imgSlide2} className="d-block w-50" alt="slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <div className="my-5">
                        <h1>Category</h1>
                        <Row className="my-3 justify-content-center">
                            {!isLoadingCategory && !isErrorCategory && dataCategory.length !== 0 && dataCategory.map(i => (
                                <Col md={3} lg={2}>
                                    <Link to={"/public/category/detail/" + i.id_category}>
                                        <Card color="" className="shadow my-3">
                                            <CardImg src={imgCategory} className="align-self-center" style={{ height: 100, width: 100 }} />
                                            <CardBody className="align-self-center">
                                                <CardTitle className="font-weight-bold text-dark">{i.name_category}</CardTitle>
                                            </CardBody>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div className="mt-5">
                        <h1>New</h1>
                        <Row className="my-3">
                            {!isLoadingItem && !isErrorItem && dataItem.length !== 0 && dataItem.map(o => (
                                <Col md={4} sm={6} lg={3} xs={6}>
                                    <Link to={"/public/product/detail/" + o.id_item}>
                                        <Card className="cardProduct shadow justify-content-between mt-3">
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