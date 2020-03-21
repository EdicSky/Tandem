import sample from './sample' //把自己的reducer import進來

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sample,
})

export default allReducers
