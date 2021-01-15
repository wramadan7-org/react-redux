/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import numeral from 'numeral'

import itemActions from '../redux/actions/item'
import categoryActions from '../redux/actions/category'
import NavigationBar from '../component/NavigationBar'
import imgSlide1 from '../assets/images/slider1.png'
import imgSlide2 from '../assets/images/slider2.png'
import imgCategory from '../assets/images/hicilpart1.png'

import {
  Container, Row, Col,
  Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle,
  Carousel, CarouselCaption, CarouselItem, CarouselControl, CarouselIndicators
} from 'reactstrap'

import { Link } from 'react-router-dom'

const Public = () => {
  const stateItem = useSelector(state => state.item)
  const stateCategory = useSelector(state => state.category)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(itemActions.getData())
    dispatch(categoryActions.getData())
  }, [])

  const { isLoadingItem, dataItem, isErrorItem, alertMsgItem } = stateItem
  const { isLoadingCategory, dataCategory, isErrorCategory, alertMsgCategory } = stateCategory
  const env = process.env.REACT_APP_BACKEND_URL
  return (
    <>
        <NavigationBar />
        <Container>
            {/* <div>
                <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous}>
                    < CarouselIndicators items={this.item} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                    {this.slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
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
                <Row className="my-3">
                    {!isLoadingCategory && !isErrorCategory && dataCategory?.length !== 0 && dataCategory.map(i => (
                        <Col md={3} lg={2} key={i.id_category}>
                            <Link to={'/category/detail/' + i.id_category}>
                                <Card color="" className="shadow my-3 justify-content-between" style={{ height: 220, width: 170 }}>
                                    <CardImg src={`${env}${i.picture}`} className="align-self-center" style={{ height: 150 }} />
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
                    {!isLoadingItem && !isErrorItem && dataItem?.length !== 0 && dataItem.map(o => (
                        <Col md={4} sm={6} lg={3} xs={6} key={o.id_item}>
                            <Link to={'/product/detail/' + o.id_item}>
                                <Card className="cardProduct shadow justify-content-between mt-3" style={{ height: 350 }}>
                                    <CardImg className="align-items-center" src={`${env}${o.picture}`} />
                                    <CardBody className="align-items-sm-start">
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

export default Public
