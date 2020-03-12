import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

//頁面
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Activity from './pages/activity/activity'
import Bulletin from './pages/bulletin/bulletin'
import Community from './pages/community/community'
import Forum from './pages/forum/forum'
import Member from './pages/member/member'
import Cart from './pages/shop/cart'

//選單
// import Menu from './components/Menu'

//載入react-bootstrap
// import { Button } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <>          
        <Header />
          <div className="container mt-30">
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
        <Footer/>
      </>
    </Router>
  )
}

export default App
