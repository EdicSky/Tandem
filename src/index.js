import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './css/headerfooter.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

//導入所需模組與方法
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/index'

//建立store，下面是為了要配合瀏覽器開發外掛使用
// const store = createStore(rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  /*preloadedState, */ composeEnhancers(applyMiddleware(thunk))
)

// const store = createStore(
//   rootReducer /*preloadwdState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister()