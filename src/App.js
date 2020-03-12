import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'

//頁面
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Logout from './pages/Logout'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Profile from './pages/Profile'

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
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/">
              <Home />
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
