import { combineReducers } from 'redux'

import episode from './episode'
import item from './item'
import category from './category'

export default combineReducers({
    episode,
    item,
    category
})