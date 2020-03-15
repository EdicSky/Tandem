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
function LatestNews() {
  return (
    <>
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
    </>
  )
}

export default LatestNews
