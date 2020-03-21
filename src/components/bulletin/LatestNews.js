import React from 'react'

import { Link } from 'react-router-dom'

import {
  AiOutlineClockCircle,
  AiOutlineFolderOpen,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineSearch,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
function LatestNews(props) {
  console.log(props.ttt)
  let news = props.ttt ? props.ttt : ''
  let title = news.bTitle
  let img = news.bImg
  let time = news.bDate
  let url = news.sId === '' ? 'news/' + news.bId : 'sales/' + news.sId
  return (
    <>
      <div className="latest_news_group d-flex   py-3">
        <div className="latest_news_img mr-3">
          <img
            src={`data:image/png;base64,${img}`}
            alt=""
            className="latest_img"
          />
        </div>
        <div className="latest_news_title">
          <Link to={`/${url}`}>
            <h6>{title}</h6>
          </Link>
          <div className="time_group d-flex">
            <AiOutlineClockCircle className="icon" />
            <p className=" d-flex">{time}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestNews
