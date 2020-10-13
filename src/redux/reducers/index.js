import { combineReducers } from 'redux'

import episode from './episode'
import item from './item'
import category from './category'
import detailCategory from './detailCategory'
import detailProduct from './detailProduct'
import auth from './auth'
import cart from './cart'
import profile from './profile'
import address from './address'
import register from './register'

export default combineReducers({
    episode,
    item,
    category,
    detailCategory,
    detailProduct,
    cart,
    auth,
    profile,
    address,
    register
})