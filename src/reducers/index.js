import sample from './sample' //把自己的reducer import進來

import MindexDisplaychange from './MindexDisplaychange'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sample,
  MindexDisplaychange,
})

export default allReducers
