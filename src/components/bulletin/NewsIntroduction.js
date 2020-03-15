import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import {
  AiOutlineClockCircle,
  AiOutlineFolderOpen,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineSearch,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
function NewsIntroduction() {
  return (
    <>
      <div className="card news_introduction">
        <img src="news_images/hades.jpg" className="card-img-top" alt="..." />
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
    </>
  )
}

export default NewsIntroduction
