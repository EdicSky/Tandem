import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Activity from './pages/activity/Activity'
import Bulletin from './pages/bulletin/Bulletin'
import Community from './pages/community/Community'
import Forum from './pages/forum/Forum'
import Article from './pages/forum/Article'
import ForumPost from './pages/forum/ForumPost'
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
            <Route path="/article">
              <Article />
            </Route>
            <Route path="/forumpost">
              <ForumPost />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>

          </Switch>


        <Footer/>

      </>
    </Router>
  )
}

export default App
