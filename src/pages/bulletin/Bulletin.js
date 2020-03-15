import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import React from 'react'
import News from '../bulletin/News'
import Sales from '../bulletin/Sales'

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
                  className="input_icons position-relative "
                  style={{ marginBottom: 80 + 'px' }}
                >
                  <AiOutlineSearch className="icon_s position-absolute"></AiOutlineSearch>
                  <input
                    type="text"
                    placeholder="請輸入搜尋內容"
                    className="form-control news_search"
                  />
                </div>
                <div className="card news_introduction">
                  <img
                    src="news_images/hades.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="news card-body">
                    <div className="news_index_title">
                      <h2 className="card-title">萬智牌：競技場》——新手指南</h2>
                    </div>
                    <div className="news_index_content">
                      <p className="card-text">
                        《萬智牌：競技場》，劃定時代的集換式卡牌遊戲衍生出的廣受好評的新版本，現已在Epic
                        Games Store
                        上線。就在今天！《萬智牌：競技場》使傳奇的卡牌遊戲比以往都容易上手。'無需付費即可暢玩，提供遊戲玩法的指導，且自動執行所有規則，在遊戲中助您一臂之力。如果您一直想試試《萬智牌》，現在就是加入的最好時機。
                        Epic Games Store將是您通向世界頂尖集換式卡牌遊戲的通道。
                      </p>
                    </div>
                    <div className="news_index_detail d-flex justify-content-between ">
                      <div className="news_index_detail_icon_group d-flex justify-content-between">
                        <NavLink to="#" className="vendor_name">
                          世嘉(SEGA)
                        </NavLink>
                        <div className="category_group d-flex">
                          <AiOutlineFolderOpen className="icon" />
                          <NavLink to="/bulletin/news">新聞</NavLink>
                        </div>
                        <div className="time_group d-flex">
                          <AiOutlineClockCircle className="icon" />
                          <p className=" d-flex">2019.11.1</p>
                        </div>
                      </div>
                      <NavLink to="/bulletin/news" className="more_btn btn">
                        詳細內容
                      </NavLink>
                    </div>
                  </div>
                </div>
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
                  <div className="latest_news_group d-flex justify-content-between align-items-start">
                    <div className="latest_news_img">
                      <img src="news_images/starter_guide.png" alt="" />
                    </div>
                    <div className="latest_news_title">
                      <NavLink to="/bulletin/news">
                        <h4>《萬智牌：競技場》——新手指南</h4>
                      </NavLink>
                      <div className="time_group d-flex">
                        <AiOutlineClockCircle className="icon" />
                        <p className=" d-flex">2019.11.1</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category_section">
                  <h2>分類</h2>
                </div>
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
