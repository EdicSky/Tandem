import { combineReducers } from 'redux'
import sample from './sample' //把自己的reducer import進來
import activity from './activityData' //activity reducer
import activityLike from './activityLike'

const allReducers = combineReducers({
    sample,
    activity,
    activityLike,
})

export default allReducers
