import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Counter from './pages/Counter'
import PrivateRoute from './component/PrivateRoute'
import Episode from './pages/Episode'
import Item from './pages/Item'
import Category from './pages/Category'
import Public from './pages/Public'
import DetailCategory from './pages/DetailCategory'
import DetailProduct from './pages/DetailProduct'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Address from './pages/Address'
import Checkout from './pages/Checkout'

//import store
import store from './redux/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  // componentDidMount() {
  //   if (localStorage.getItem){

  //   }
  // }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={() => <Public />} exact />
            <Route path='/login' render={(props) => <Login {...props} />} />
            <Route path='/register' render={(props) => <Register {...props} />} />

            <PrivateRoute path='/profile/address'>
              <Address />
            </PrivateRoute>

            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>

            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>

            <PrivateRoute path='/episode'>
              <Episode />
            </PrivateRoute>

            <Route path='/category/detail/:id' render={(props) => <DetailCategory {...props} />} />
            <Route path='/product/detail/:id' render={(props) => <DetailProduct {...props} />} />
            {/* <Route path='/public' render={() => <Public />} /> */}
            <Route path='/category' render={() => <Category />} />
            <Route path='/product' render={() => <Item />} />
            {/* <Route path='/checkout' render={() => <Checkout />} /> */}
            {/* <Route path='/cart' render={() => <Cart  />} /> */}
            {/* <Route path='/profile/address' render={() => <Address />} /> */}
            {/* <Route path='/profile' render={() => <Profile />} /> */}
            {/* <Route path='/episode' render={() => <Episode />} /> */}
            <PrivateRoute patch="/cart">
              <Cart />
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}