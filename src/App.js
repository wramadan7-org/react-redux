import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Counter from './pages/Counter'
import PrivateRoute from './component/PrivateRoute'
import Episode from './pages/Episode'
import Item from './pages/Item'
import Category from './pages/Category'

//import store
import store from './redux/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  state = {
    id: 0,
    id_role: 0,
    isLogin: false,
    counter: 0
  }

  setLogin = (data, cb) => {
    this.setState(data, () => {
      cb()
    })
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' render={(props) => <Home {...props} counter={this.state.counter} />} exact />
            <Route path='/login' render={(props) => <Login {...props} login={(data, cb) => this.setLogin(data, cb)} />} />
            <PrivateRoute path='/counter' isLogin={this.state.isLogin}>
              <Counter
                counter={this.state.counter}
                increment={() => this.setState({ counter: this.state.counter + 1 })}
                decrement={() => this.setState({ counter: this.state.counter - 1 })}

              />
            </PrivateRoute>
            <Route path='/episode' render={() => <Episode />} />
            <Route path='/item' render={() => <Item />} />
            <Route path='/category' render={() => <Category />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}