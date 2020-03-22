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
import ProductList from './pages/shop/ProductList'
import Product from './pages/shop/Product'
import Payment from './pages/shop/Payment'
import Order from './pages/shop/Order'
import Shadow_Data from './pages/Shadow_Data_ver2'
import Cart_new from './pages/shop/Cart_new'

//選單
// import Menu from './components/Menu'

//載入react-bootstrap
// import { Button } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <>          
        <Header />
          {/* <div className="container mt-30"> */}
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
            <Route path="/cart_new">
              <Cart_new />
            </Route>
            <Route path="/productlist/:type?/:page?">
              <ProductList />
            </Route>
            <Route path="/product/:type?/:id?">
              <Product />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
            <Route path='/test'>
              <Shadow_Data/>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </Switch>

          {/* </div> */}
        <Footer/>
      </>
    </Router>
  )
}

export default App
