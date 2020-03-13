import React from 'react'
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
function Bulletin() {
  return (
    <>
      <div className="container">
        <section className="carousell_wrapper d-flex justify-content-between">
          <div className="carousell">
            <img src={'news_images/hades.jpg'} alt="" />
          </div>
        </section>
        <div className="category d-flex">
          <h2>分類:</h2>
          <a className="btn">新聞</a>
          <a className="btn">促銷</a>
        </div>
        <div className="row d-flex justify-content-between ">
          <div className="col-7 ">
            <div className="card news_introduction">
              <img
                src="news_images/hades.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="news card-body">
                <div className="news_index_title">
                  <h2 className="card-title">《萬智牌：競技場》——新手指南</h2>
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
                    <a href="#" className="vendor_name">
                      世嘉(SEGA)
                    </a>
                    <div className="category_group d-flex">
                      <AiOutlineFolderOpen className="icon" />
                      <a href="#">新聞</a>
                    </div>
                    <div className="time_group d-flex">
                      <AiOutlineClockCircle className="icon" />
                      <p className=" d-flex">2019.11.1</p>
                    </div>
                  </div>
                  <a className="btn">詳細內容</a>
                </div>
              </div>
            </div>
            <div className="card news_introduction">
              <img
                src={'news_images/hades.jpg'}
                className="card-img-top"
                alt="..."
              />
              <div className="news card-body">
                <div className="news_index_title">
                  <h2 className="card-title">《萬智牌：競技場》——新手指南</h2>
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
                    <a href="#" className="vendor_name">
                      世嘉(SEGA)
                    </a>
                    <div className="category_group d-flex">
                      <AiOutlineFolderOpen className="icon" />
                      <a href="#">新聞</a>
                    </div>
                    <div className="time_group d-flex">
                      <AiOutlineClockCircle className="icon" />
                      <p className=" d-flex">2019.11.1</p>
                    </div>
                  </div>
                  <a className="btn">詳細內容</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 ">
            <div className="input_icons position-relative">
              <AiOutlineSearch className="icon_s position-absolute"></AiOutlineSearch>
              <input
                type="text"
                placeholder="搜尋"
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
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
              <div className="latest_news_group d-flex justify-content-between align-items-start">
                <div className="latest_news_img">
                  <img src="news_images/starter_guide.png" alt="" />
                </div>
                <div className="latest_news_title">
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
              <div className="latest_news_group d-flex justify-content-between align-items-start">
                <div className="latest_news_img">
                  <img src="news_images/starter_guide.png" alt="" />
                </div>
                <div className="latest_news_title">
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
              <div className="latest_news_group d-flex justify-content-between align-items-start">
                <div className="latest_news_img">
                  <img src="news_images/starter_guide.png" alt="" />
                </div>
                <div className="latest_news_title">
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
              <div className="latest_news_group d-flex justify-content-between align-items-start">
                <div className="latest_news_img">
                  <img src="news_images/starter_guide.png" alt="" />
                </div>
                <div className="latest_news_title">
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
              <div className="latest_news_group d-flex justify-content-between align-items-start">
                <div className="latest_news_img">
                  <img src="news_images/starter_guide.png" alt="" />
                </div>
                <div className="latest_news_title">
                  <a href="">
                    <h4>《萬智牌：競技場》——新手指南</h4>
                  </a>
                  <div className="time_group d-flex">
                    <AiOutlineClockCircle className="icon" />
                    <p className=" d-flex">2019.11.1</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="category_section">
              <h2>分類</h2>
              <div className="news">
                <a href="">
                  <h4>新聞公告(5)</h4>
                </a>
              </div>
              <div className="sales">
                <a href="">
                  <h4>優惠公告(4)</h4>
                </a>
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
      </div>
    </>
  )
}

export default Bulletin
