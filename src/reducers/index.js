import sample from './sample' //把自己的reducer import進來
import communityLike from './communityLike'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sample,
  communityLike,
})

export default allReducers
