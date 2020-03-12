import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
import logo from '../logoV1.svg'
// import { ReactComponent as Logo } from '../logo.svg'
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

function Header() {
  const headerheight = {
    height: '100px',
    paddingbottom: '70px',
  }

  return (
    <>
    
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark mb-5"
        style={headerheight}
      >
        <div className="container">
          

        <NavLink className="" to="/">
        <img src={logo} className="logosize" alt="Logo" />
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav headerlist ">
            <li className="nav-item">
              {/* 特別注意：要加上exact屬性，首頁的樣式才會正常被套用，不然就會一直有被按到的樣式 */}
              <NavLink
                activeClassName="active"
                className="nav-link"
                href="/cart"
              >
                遊戲庫
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                href="/community"
              >
                社群探索
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                href="/activity"
              >
                活動揪團
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                href="/forum"
              >
                開發論壇
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-linkgit"
                href="/bulletin"
              >
                新聞公告
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end header-icon">
          <NavLink>        
            <AiOutlineCalendar />
          </NavLink>
          <NavLink>
            <AiOutlineShoppingCart />
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-linkgit"
            href="/member"
          >
            <AiOutlineUser />
          </NavLink>
        </div>
        </div>
      </nav>

    </>
  )
}

export default Header
