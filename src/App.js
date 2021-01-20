import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
// import Home from './pages/Home'
// import Counter from './pages/Counter'
import PrivateRoute from './component/PrivateRoute'
import AdminRoute from './component/AdminRoute'
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

// ADMIN PAGE
import ManageProduct from './pages/admin/product/Product'
import AddProduct from './pages/admin/product/AddProduct'
import EditProduct from './pages/admin/product/EditProduct'
import ManageCategory from './pages/admin/category/Category'
import AddCategory from './pages/admin/category/AddCategory'
import EditCategory from './pages/admin/category/EditCategory'

// import store
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
// const { token } = useSelector((state) => state.auth)
// import { PrivateRoute } from './helpers/PrivateRoute'

const App = () => {
  return (
    <Provider store={store().store}>
      {/* {console.log(Provider)} */}
      <PersistGate loading={null} persistor={store().persistor} >
        <BrowserRouter>
          <Switch>
            <Route path='/' render={() => <Public />} exact />
            <Route path='/login' render={(props) => <Login {...props} />} />
            <Route path='/register' render={(props) => <Register {...props} />} />
            <Route path='/category/detail/:id' render={(props) => <DetailCategory {...props} />} />
            <Route path='/product/detail/:id' render={(props) => <DetailProduct {...props} />} />

            <PrivateRoute path='/cart'>
              <Cart />
            </PrivateRoute>

            <PrivateRoute path='/checkout'>
              <Checkout />
            </PrivateRoute>
            
            <PrivateRoute path='/profile/address'>
              <Address />
            </PrivateRoute>

            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>

            <AdminRoute path='/admin/product/edit/:id'>
              <EditProduct />
            </AdminRoute>

            <AdminRoute path='/admin/product/add'>
              <AddProduct />
            </AdminRoute>

            <AdminRoute path='/admin/product' >
              <ManageProduct />
            </AdminRoute>

            <AdminRoute path='/admin/category/edit/:id'>
              <EditCategory />
            </AdminRoute>

            <AdminRoute path='/admin/category/add'>
              <AddCategory />
            </AdminRoute>

            <AdminRoute path='/admin/category'>
              <ManageCategory />
            </AdminRoute>

          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
