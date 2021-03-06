import sample from './sample' //把自己的reducer import進來
// import getArticleData from './articleReducers' //把自己的reducer import進來

import { combineReducers } from 'redux'

export const getArticleData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ARTICLE':
      console.log('reducer', action.data)
      return action.data
    default:
      return state
  }
}

//文章細節
export const getArticleDetail = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ARTICLE_DETAIL':
      console.log('reducer', action.data)
      return action.data
    default:
      return state
  }
}

//全部留言
export const getCommentData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COMMENT':
      console.log('reducer', action.data)
      return action.data
    default:
      return state
  }
}

const allReducers = combineReducers({
  getArticleData,
  // getArticleDetail,
})

export default allReducers
