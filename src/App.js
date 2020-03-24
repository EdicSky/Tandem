import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Activity from './pages/activity/Activity'
import Bulletin from './pages/bulletin/Bulletin'
// community pages
import Community from './pages/community/Community'
import AddPost from './pages/community/AddPost'
import Posts from './pages/community/Posts'
import PostDetail from './pages/community/PostDetail'
import PostProfile from './pages/community/PostProfile'
import { CSSTransition } from 'react-transition-group'

// import Localstorage from './Shadow_Data_ver2'

import Forum from './pages/forum/Forum'
import Member from './pages/member/Member'
import Cart from './pages/shop/Cart'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/activity">
            <Activity />
          </Route>
          <Route path="/bulletin">
            <Bulletin />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/member">
            <Member />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          {/* //community */}
          <Route path={`/addpost`}>
            <AddPost />
          </Route>
          <Route path={`/posts`}>
            <Posts />
          </Route>
          {/* {({ match }) => (
            <CSSTransition
              // in={(match = null)}
              timeout={1200}
              classNames="page"
              unmountOnExit
              // onExit={onExit}
              // onEnter={onEnter}
            > */}
          <Route path={'/postdetail/:id?'}>
            <div className="page">
              <PostDetail />
            </div>
          </Route>
          <Route path={'/Communityprofile/:id?'}>
            <div className="page">
              <PostProfile />
            </div>
          </Route>
          {/* </CSSTransition>
          )} */}
        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
