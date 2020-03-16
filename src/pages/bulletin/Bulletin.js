import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import React from 'react'
import News from '../bulletin/News'
import Sales from '../bulletin/Sales'
import LatestNews from '../../components/bulletin/LatestNews'
import NewsIntroduction from '../../components/bulletin/NewsIntroduction'

import '../../css/newsIndex.scss'
import {
  AiOutlineClockCircle,
  AiOutlineFolderOpen,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineSearch,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
function Bulletin() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/bulletin/news">
            <News />
          </Route>
          <Route path="/bulletin/sales">
            <Sales />
          </Route>
          <div className="container">
            <section className="carousell_wrapper d-flex justify-content-between">
              <NavLink to="#" className="carousell_control_left">
                <AiOutlineDoubleLeft />
              </NavLink>
              <div className="carousell">
                <ul>
                  <li>
                    <img src={'news_images/hades.jpg'} alt="" />
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <NavLink to="#" className="carousell_control_right">
                <AiOutlineDoubleRight />
              </NavLink>
            </section>
            <div className="category d-flex">
              <h2>分類:</h2>
              <NavLink to="#" className="btn">
                新聞
              </NavLink>
              <NavLink to="#" className="btn">
                促銷
              </NavLink>
            </div>
            <div className="row d-flex justify-content-between ">
              <div className="col-md-7 ">
                <div
                  className=" position-relative mobile_input"
                  style={{ marginBottom: 80 + 'px' }}
                >
                  <AiOutlineSearch className="icon_s position-absolute"></AiOutlineSearch>
                  <input
                    type="text"
                    placeholder="請輸入搜尋內容"
                    className="form-control news_search"
                  />
                </div>
                <NewsIntroduction />
                <NewsIntroduction />
              </div>
              <div className="col-md-5 ">
                <div className="input_icons position-relative">
                  <AiOutlineSearch className="icon_s position-absolute"></AiOutlineSearch>
                  <input
                    type="text"
                    placeholder="請輸入搜尋內容"
                    className="form-control news_search"
                  />
                </div>
                <div className="latest_news">
                  <h2>最新消息</h2>
                  <LatestNews />
                  <LatestNews />
                  <LatestNews />
                  <LatestNews />
                  <LatestNews />
                </div>
                <div className="category_section">
                  <h2>分類</h2>
                  <div className="news">
                    <NavLink to="/bulletin/news">
                      <h4>新聞公告(5)</h4>
                    </NavLink>
                  </div>
                  <div className="sales">
                    <NavLink to="/bulletin/news">
                      <h4>優惠公告(4)</h4>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <ul className="d-flex">
              <li>
                <AiOutlineCaretLeft />
              </li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>
                <AiOutlineCaretRight />
              </li>
            </ul>
          </div>
        </Switch>
      </>
    </Router>
  )
}

export default Bulletin
