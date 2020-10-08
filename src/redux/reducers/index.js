import { combineReducers } from 'redux'

import episode from './episode'
import item from './item'
import category from './category'
import detailCategory from './detailCategory'

export default combineReducers({
    episode,
    item,
    category,
    detailCategory
})