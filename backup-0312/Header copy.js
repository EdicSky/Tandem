import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-bootstrap'
import { ReactComponent as Logo } from '../logo.svg'
// import { FaCalendarAlt, AiOutlineShoppingCart, FaRegUser } from 'react-icons/ai'
// import '../css/headerfooter.css'

function Header() {
  // const headerheight = {
  //   height: '100px',
  //   paddingbottom: '70px',
  // }

  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark headerclass"
      >
        <NavLink className="navbar-brand" to="/">
          <Logo/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><Logo/></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav headercss">
            <li className="nav-item headerlist">
              {/* 特別注意：要加上exact屬性，首頁的樣式才會正常被套用，不然就會一直有被按到的樣式 */}
              <NavLink
                exact
                activeClassName="active"
                className="nav-link headerlist"
                to="/"
              >
                遊戲庫
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                社群探索
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                活動揪團
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/"
              >
                開發論壇
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"  
                to="/profile"
              >
                新聞公告
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">遊戲庫</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">社群探索</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">活動揪團</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">開發論壇</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">新聞公告</Nav.Link>
        </Nav.Item>
      </Nav>

      <Nav className="justify-content-end" activeKey="/home">
        <FaCalendarAlt />
        <AiOutlineShoppingCart />
        <FaRegUser />
      </Nav> */}
    </>
  )
}

export default Header
