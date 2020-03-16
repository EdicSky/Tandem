import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/news.scss'
import {
  AiOutlineClockCircle,
  AiOutlineFolderOpen,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineSearch,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
function News() {
  return (
    <>
      <div className="wrapper">
        <div className="banner mb-4"></div>
        <div className="container pagination_news">
          <div className="pagination_news_content position-relative">
            <h1 className=" py-3 pagination_news">
              《萬智牌：競技場》——新手指南
            </h1>
            <div className="news_index_detail d-flex justify-content-between pt-2">
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
                  <p>2019.11.1</p>
                </div>
              </div>
            </div>
            <p className="py-5">
              《萬智牌：競技場》，劃定時代的集換式卡牌遊戲衍生出的廣受好評的新版本，現已在Epic
              Games Store
              上線。就在今天！《萬智牌：競技場》使傳奇的卡牌遊戲比以往都容易上手。'無需付費即可暢玩，提供遊戲玩法的指導，且自動執行所有規則，在遊戲中助您一臂之力。如果您一直想試試《萬智牌》，現在就是加入的最好時機。
              Epic Games Store將是您通向世界頂尖集換式卡牌遊戲的通道。
            </p>
            <NavLink to="#" className="position-absolute btn back_to_list">
              返回公告頁
            </NavLink>
          </div>
          <div className="related_news">
            <h2>相關新聞</h2>
            <ul className="d-flex justify-content-between">
              <NavLink to="#" className="a">
                <li>
                  <div className="related_img"></div>
                  <div className="related_content">
                    <div className="related_time">
                      <div className="time_group d-flex">
                        <AiOutlineClockCircle className="icon" />
                        <p>2019.11.1</p>
                      </div>
                    </div>
                    <div className="related_title">
                      <h4>《萬智牌：競技場》</h4>
                    </div>
                  </div>
                </li>
              </NavLink>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default News