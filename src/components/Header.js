import React from 'react'
import { NavLink } from 'react-bootstrap'
import logo from '../logo.svg'
import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <NavLink className="" to="/">
            <img src={logo} className="logosize" alt="Logo" />
          </NavLink>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav headerlist ">
              <li className="nav-item">
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
