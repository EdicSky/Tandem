import sample from './sample' //把自己的reducer import進來
// 會員中心使用
import MindexDisplaychange from './MindexDisplaychange'
import Mmbinfo from './Mmbinfo'
import Mdollcalling from './Mdollcalling'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sample,
  MindexDisplaychange,
  Mmbinfo,
  Mdollcalling,
})

export default allReducers
