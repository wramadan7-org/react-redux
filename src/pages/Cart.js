import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Input, Button,
  Row, Col
} from 'reactstrap'
import NavigationBar from '../component/NavigationBar'
import imgJas from '../assets/images/jas.jpg'
import cartActions from '../redux/actions/cart'
import numeral from 'numeral'
import {useHistory} from 'react-router-dom'
// import dotenv from 'dotenv'
// dotenv.config()

const Cart = () => {
   const history = useHistory();
  const { token } = useSelector((state) => state.auth)
  const stateCart = useSelector((state) => state.cart)

  console.log('cart', stateCart)
  console.log(process.env.REACT_APP_BACKEND_URL)
  const env = process.env.REACT_APP_BACKEND_URL

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(cartActions.getCart(token))
  }, [])

  const increase = (e) => {
    console.log('tambah')
  }

  const decrease = (e) => {
    console.log('kurang')
  }
  return (
      <div>
         <NavigationBar />
         <Container className="my-3">
               <h1>My bag</h1>
               <Row>
                  <Col md={8} sm={12} className="">
                     <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3">
                           <div className="p-2 d-flex justify-content-between">
                              <div className="d-flex align-self-center" style={{width: 500}}>
                                 <div className=" align-items-center justify-content-center ml-2">
                                    <Input type="checkbox" />
                                 </div>
                                 <div className="">
                                    <h6 className="">Select all items </h6>
                                 </div>
                                 <div className="">
                                    <h6 className="ml-2 text-muted">(2 items selected)</h6>
                                 </div>
                              </div>
                              <div className="">
                                 <p onClick={() => console.log('deleted')} className="text-danger">Deleted</p>
                              </div>
                           </div>
                     </Col>

                     {!stateCart.isLoading && !stateCart.isError && stateCart.dataCart?.length > 0 && stateCart.dataCart.map(o => (
                           <Col xs={12} sm={12} md={12} lg={12} className="shadow my-3" key={o.id}>
                              <Row className="align-items-center p-2 ">
                                 <Col sm={4} md={4} lg={3} className="align-self-center ">
                                       {/* <Input type="checkbox" name="check" /> */}
                                       <div className="d-flex align-items-center justify-content-around">
                                          <div className=" align-items-center justify-content-center">
                                             <Input type="checkbox" />
                                          </div>
                                          <div style={{width: 103, height: 69}} className="">
                                             <img src={`${env}${o.picture}`} style={{ width: 103, height: 69 }} className="w-75" />
                                          </div>
                                       </div>
                                 </Col>
                                 <Col className="d-flex justify-content-between align-items-center">
                                       <div className="" style={{ width: 150 }}>
                                          <h6 className="font-weight-bold">{o.item}</h6>
                                          <span className="text-muted">Category</span>
                                       </div>
                                 </Col>
                                 <Col className="">
                                       <div className=" align-items-center justify-content-between d-flex" style={{ width: 120 }}>
                                          <div style={{width: 36, height: 36}}>
                                             <Button onClick={() => decrease} className="rounded-pill" style={{backgroundColor: 'lightgrey', color: 'white', width: 36, height: 36}}>-</Button>
                                          </div>
                                          <div> {o.qty} </div>
                                          <div style={{width: 36, height: 36}}>
                                             <Button onClick={() => increase} className="rounded-pill" style={{backgroundColor: 'white', color: 'black', width: 36, height: 36}}>+</Button>
                                          </div>
                                       </div>
                                 </Col>
                                 <Col className="">
                                       <div className="text-right">
                                          <h6 className="font-weight-bold">Rp {numeral(o.price).format(0,0).toString().replace(',', '.')}</h6>
                                       </div>
                                 </Col>
                              </Row>
                           </Col>
                     ))}
                  </Col>

                  <Col className="p-3">
                     <div className="p-2 shadow " style={{height: 180}}>
                        <h6>Shopping summary</h6>
                        <div className="d-flex justify-content-between my-4">
                              <p style={{color: 'grey'}}>Total price</p>
                              <p className="font-weight-bold">Rp {numeral(stateCart.total).format(0, 0).toString().replace(',', '.')}</p>
                        </div>
                        <div className="my-3">
                           <Button onClick={() => history.push('/checkout')} block className="rounded-pill mt-2" style={{backgroundColor: '#DB3022'}}>Buy</Button>
                        </div>
                     </div>
                  </Col>
               </Row>
               {stateCart.isLoading && !stateCart.isError && (
                  <div>Loading</div>
               )}

               {stateCart.isError && stateCart.alertMsg && (
                  <div>{stateCart.alertMsg}</div>
               )}
         </Container>
      </div >
  )
}

export default Cart
