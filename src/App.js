import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

//頁面
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Activity from './pages/activity/Activity'
import Bulletin from './pages/bulletin/Bulletin'
import Community from './pages/community/Community'
import Forum from './pages/forum/Forum'
import Member from './pages/member/Member'
import Cart from './pages/shop/Cart'

//選單
// import Menu from './components/Menu'

//載入react-bootstrap
// import { Button } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className=" mt-30">
          {/* <Home className="mt-3"/> */}
          <Switch>
            <Route path="/activity">
              <Activity />
            </Route>
            <Route path="/bulletin">
              <Bulletin />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
            <Route exact path="/forum">
              <Forum />
            </Route>
            <Route path="/member">
              <Member />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App
