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
                  href="/productlist"
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
            <NavLink href="/cart_new">
              <AiOutlineShoppingCart />
              
            </NavLink>
            <span className="s-cart_count" style={{position:'relative',top:'5px',right:'15px',color:'white',backgroundColor:'orange',fontSize:'16px',
            border:'1px solid orange', borderRadius:'50%',width:'25px',height:'25px',textAlign:"center"}}>{localStorage.getItem('cart') !== null?JSON.parse(localStorage.getItem('cart')).length:0}</span>
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
