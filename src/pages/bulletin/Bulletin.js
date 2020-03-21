import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import News from '../bulletin/News'
import Sales from '../bulletin/Sales'
import LatestNews from '../../components/bulletin/LatestNews'
import NewsIntroduction from '../../components/bulletin/NewsIntroduction'
import $ from 'jquery'
import Carousell from '../../components/bulletin/Carousell'

import '../../css/newsIndex.scss'
//import '../../css/slider.css'
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

function Bulletin(props) {
  const [bulletinData, setBulletinData] = useState([])
  const [bulletinDetailData, setBulletinDetailData] = useState([])
  const [pageNum, setPagenum] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  function gotoPage(value) {
    setPagenum(value)
  }

  async function getBulletinData() {
    const req = new Request(`http://localhost:6001/bulletin/${pageNum}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(req)
    const data = await res.json()
    console.log(data)
    setBulletinData(data.bulletin)
    setTotalPages(parseInt(data.totalPages))
    //console.log(data.totalPages)
  }
  useEffect(() => {
    //fetch
    getBulletinData()
    //getBulletinDetailData()
  }, [])
  useEffect(() => {
    getBulletinData()
  }, [pageNum])
  // console.log(props)
  const arrPage = []
  for (let i = 1; i <= totalPages; i++) {
    arrPage.push(i)
  }
  let page = arrPage.map((page, i) => (
    <Link onClick={() => gotoPage(page)} to={`/bulletin/${page}`}>
      <li>{page}</li>
    </Link>
  ))

  return (
    <>
      <div className="container">
        <section className="carousell_wrapper d-flex justify-content-between">
          <Carousell />
          {/* <Link to="#" className="carousell_control_left">
                <AiOutlineDoubleLeft />
              </Link>
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
              <Link to="#" className="carousell_control_right">
                <AiOutlineDoubleRight />
              </Link> */}
        </section>
        <div className="category d-flex">
          <p className="category_title">分類:</p>
          <Link to="#" className="btn">
            新聞
          </Link>
          <Link to="#" className="btn">
            促銷
          </Link>
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
            {bulletinData.map((v, i) => (
              <NewsIntroduction ttt={v} />
            ))}
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
              <h3>最新消息</h3>
              {bulletinData.map((v, i) => (
                <LatestNews ttt={v} />
              ))}
            </div>
            <div className="category_section">
              <h3>分類</h3>
              <div className="news">
                <Link to="/bulletin/news">
                  <h5>新聞公告(5)</h5>
                </Link>
              </div>
              <div className="sales">
                <Link to="/bulletin/sales">
                  <h5>優惠公告(4)</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <ul className="d-flex">
            <li>
              <AiOutlineCaretLeft />
            </li>
            {page}
            <li>
              <AiOutlineCaretRight />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Bulletin
