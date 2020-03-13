import React from 'react'
import '../../css/activity.css'
function Bulletin() {
  return (
    <>
      <div className="container">
        <section className="carousell_wrapper d-flex justify-content-between">
          <div className="carousell">
            <img
              src={require('../images/Diesel_blog_the_cycle_season_2.jpg')}
              alt=""
            />
          </div>
        </section>
        <div className="category d-flex">
          <h2>分類:</h2>
          <a className="btn">新聞</a>
          <a className="btn">促銷</a>
        </div>
        <div className="row d-flex justify-content-between ">
          <div className="col-8 ">
            <div className="card news_introduction">
              <img
                src={require('../images/Diesel_blog_mtga_starter_guide.png')}
                className="card-img-top"
                alt="..."
              />
              <div className="news card-body">
                <div className="news_index_title">
                  <h4 className="card-title">《萬智牌：競技場》——新手指南</h4>
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
                      <i className="far fa-folder-open "></i>
                      <a href="#">新聞</a>
                    </div>
                    <div className="time_group d-flex">
                      <i className="far fa-clock fa-3x"></i>
                      <p className=" d-flex">2019.11.1</p>
                    </div>
                  </div>
                  <a className="btn">詳細內容</a>
                </div>
              </div>
            </div>
            <div className="card news_introduction">
              <img
                src={require('../images/Diesel_blog_mtga_starter_guide.png')}
                className="card-img-top"
                alt="..."
              />
              <div className="news card-body">
                <div className="news_index_title">
                  <h4 className="card-title">《萬智牌：競技場》——新手指南</h4>
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
                      <i className="far fa-folder-open "></i>
                      <a href="#">新聞</a>
                    </div>
                    <div className="time_group d-flex">
                      <i className="far fa-clock fa-3x"></i>
                      <p className=" d-flex">2019.11.1</p>
                    </div>
                  </div>
                  <a className="btn">詳細內容</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="input_icons position-relative">
              <i className="fas fa-search icon position-absolute"></i>
              <input
                type="text"
                placeholder="搜尋"
                className="form-control news_search"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bulletin
