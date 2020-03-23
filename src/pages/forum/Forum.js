import React, { useState, useEffect } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
// import { NavLink } from 'react-bootstrap'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getArticleData } from '../../actions/articleActions'
import { NavLink } from 'react-bootstrap'
import ForumLatestBox from '../../components/forum/ForumLatestBox'
import ForumLatestLeftBox from '../../components/forum/ForumLatestLeftBox'
import ForumLatestRightBox from '../../components/forum/ForumLatestRightBox'
import ForumHotPostBox from '../../components/forum/ForumHotPostBox'
import ForumArticleListBox from '../../components/forum/ForumArticleListBox'
import {
  AiOutlineGithub,
  AiOutlineHighlight,
  AiOutlineSolution,
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'
import $ from 'jquery'
import '../../css/forum.scss'

function Forum(props) {
  // const [article, setArticle] = useState([])
  // const articleId = props.match.params.type
  // console.log(articleId)
  // const [defaultPic, setDefaultPic] = useState('')
  const [tagName, setTagname] = useState('')
  const [className, setClassname] = useState('')
  const [indexOfLastArtical, setIndexOfLastArtical] = useState(0)

  useEffect(() => {
    console.log('dddd', props)
    props.getArticleData()
  }, [])

  // console.log('內容', props.article)

  // $(document).ready(function() {
  //   var width = $('.f-latest-right-box-info').width()
  //   var toggle = true
  //   $('.f-latest-left-box-article').click(function() {
  //     if (toggle) {
  //       $('.f-latest-right-box-info')
  //         .stop()
  //         .animate({ left: 0 }, 1000)
  //     } else {
  //       $('.f-latest-right-box-info')
  //         .stop()
  //         .animate({ left: -width }, 1000)
  //     }
  //     toggle = !toggle
  //   })
  // })

  function changeTagName(newTagName) {
    setTagname(newTagName)
  }

  function changeClassName(newClassName) {
    setClassname(newClassName)
  }

  function changeIndexOfLastArtical(index) {
    setIndexOfLastArtical(index)
  }
  return (
    <>
      <div class="container">
        {/* 文章分類  */}
        <div class="f-gap-2"></div>
        <div class="row f-vertical-gap">
          <div class="col-lg-4">
            <div class="f-category">
              <div class="f-category-icon">
                {/* <img src="./images/forum/icon-mouse.svg" alt=""/> */}
                <AiOutlineGithub />
              </div>
              <div class="f-category-content">
                <h3 class="f-category-title">
                  <NavLink
                    activeClassName="active"
                    className=""
                    href="#"
                    onClick={() => changeTagName('1')}
                  >
                    程式設計
                    <br />
                    <span class="f-category-title f-category-text">
                      技術研討
                    </span>
                  </NavLink>
                </h3>
                {/* <h4 class="f-category-title f-category-text"><a href="#">技術研討</a></h4> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="f-category">
              <div class="f-category-icon">
                {/* <img src="./images/forum/icon-gamepad.svg" alt=""/> */}
                <AiOutlineHighlight />
              </div>
              <div class="f-category-content">
                <h3 class="f-category-title">
                  <NavLink
                    activeClassName="active"
                    className=""
                    href="#"
                    onClick={() => changeTagName('2')}
                  >
                    原畫創作
                    <br />
                    <span class="f-category-title f-category-text">
                      靈感發想
                    </span>
                  </NavLink>
                </h3>
                {/* <h4 class="f-category-title f-category-text"><a href="#"></a></h4> */}
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class=" f-category">
              <div class=" f-category-icon">
                {/* <img src="./images/forum/icon-gamepad-2.svg" alt=""/> */}
                <AiOutlineSolution />
              </div>
              <div class=" f-category-content">
                <h3 class="f-category-title">
                  <NavLink
                    activeClassName="active"
                    className=""
                    href="#"
                    onClick={() => changeTagName('3')}
                  >
                    遊戲廠商
                    <br />
                    <span class="f-category-title f-category-text">
                      合作徵才
                    </span>
                  </NavLink>
                </h3>
                {/* <h4 class=" f-category-title  f-category-text"><a href="#">合作徵才</a></h4> */}
              </div>
            </div>
          </div>
        </div>

        {/* 最新文章  */}
        <div class="f-gap-2"></div>
        <h3 class="f-latest-title">
          <span>
            <span class="f-category-text-1">最新</span> 文章
          </span>
        </h3>

        {/* {props.article &&
          props.article.map((value, index) => {
            return <ForumLatestBox key={index} data={props.article[index]} />
          })} */}

        <div class="f-gap"></div>

        <div class="f-latest-left-box">
          <div class="f-latest-left-box-list">
            <div class="f-nano f-latest-scrollbar">
              <div
                class="f-nano-content"
                tabindex="0"
                style={{ right: '-17px' }}
              >
                {props.article &&
                  props.article.map((value, index) => {
                    return (
                      <ForumLatestLeftBox
                        key={index}
                        data={props.article[index]}
                        index={index}
                        changeIndex={num => {
                          changeIndexOfLastArtical(num)
                        }}
                      />
                    )
                  })}
              </div>
              <div class="f-nano-pane">
                <div
                  class="f-nano-slider"
                  style={{ height: '272px', transform: 'translate(0px, 0px)' }}
                ></div>
              </div>
            </div>
          </div>

          {/* 將左列文章放大至右邊顯示細節 */}
          {props.article &&
            props.article.map((value, index) => {
              if (index === indexOfLastArtical) {
                return (
                  <ForumLatestRightBox
                    key={indexOfLastArtical}
                    data={props.article[indexOfLastArtical]}
                  />
                )
              }
            })}
          {/* <div class=" f-latest-right-box-info">
            <div class="f-nano f-latest-scrollbar">
              <div
                class="f-nano-content"
                tabindex="0"
                style={{ right: '-17px' }}
              >
                <div class=" f-latest-left-box-article-image">
                  <img
                    src="./images/forum/post-1.jpg"
                    alt="Smell magic in the air. Or maybe barbecue"
                  />
                  <span class=" f-latest-left-box-article-category">
                    <span class="f-index-bg-5">程式設計</span>
                  </span>
                </div>
                <h3 class=" f-latest-left-box-article-title">
                  Smell magic in the air. Or maybe barbecue
                </h3>
                <div class=" f-latest-left-box-article-text">
                  <p>
                    With what mingled joy and sorrow do I take up the pen to
                    write to my dearest friend! Oh, what a change between to-day
                    and yesterday! Now I am friendless and alone...
                  </p>
                </div>
                <div class="d-flex justify-content-between f-right-side">
                  <a href="#" class=" f-latest-left-box-article-more">
                    Read More
                  </a>
                  <div class="d-flex f-latest-right-box-article-date f-right-side-article">
                    <AiOutlineFile />
                    Sep 18, 2018
                  </div>
                </div>
              </div>
              <div class="f-nano-pane">
                <div
                  class="f-nano-slider"
                  style={{ height: '365px', transform: 'translate(0px, 0px)' }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>

        {/* 熱門文章  */}
        <div class="f-gap-3"></div>
        <h3 class="f-latest-title">
          <span>
            <span class="f-category-text-1">熱門</span> 文章
          </span>
        </h3>
        <div class="f-gap"></div>

        <div class="f-hot-grid">
          <div class="row">
            {props.article &&
              props.article.map((value, index) => {
                if (tagName) {
                  if (props.article[index].articleCategoryId === tagName) {
                    return (
                      <ForumHotPostBox
                        key={index}
                        data={props.article[index]}
                        tagName={tagName}
                      />
                    )
                  }
                } else {
                  return (
                    <ForumHotPostBox
                      key={index}
                      data={props.article[index]}
                      tagName={props.article[index].articleCategoryId}
                    />
                  )
                }
              })}

            {/* <div class="col-md-6 col-lg-3">
              <div class="f-hot-post">
                <a href="#" class="f-hot-post-img">
                  <img
                    src="./images/forum/post-5-mid.jpg"
                    alt="He made his passenger captain of one"
                  />
                  <span class="f-hot-post-comments-count">94</span>
                  <span class="f-hot-post-category">
                    <span class="f-index-bg-5">程式設計</span>
                  </span>
                </a>
                <div class="f-gap"></div>
                <h2 class="f-hot-post-title f-index-h4">
                  <a href="#">He made his passenger captain of one</a>
                </h2>
                <div class="f-hot-post-text">
                  <p>
                    Just then her head struck against the roof of the hall: in
                    fact she was now more than nine feet high, and she at once
                    took up the little golden key and hurried off to the garden
                    door...
                  </p>
                </div>
                <div class="f-gap"></div>
                <div class="d-flex justify-content-between">
                  <a
                    href="#"
                    class="f-index-btn f-index-btn-rounded f-index-btn-color f-index-btn-hover"
                  >
                    Read More
                  </a>
                  <div class="f-hot-post-date">
                    <AiOutlineFile />
                    Jul 23, 2018
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="f-hot-post">
                <a href="#" class="f-hot-post-img">
                  <img
                    src="./images/forum/post-6-mid.jpg"
                    alt="At first, for some time, I was not able to answer"
                  />
                  <span class="f-hot-post-comments-count">87</span>
                  <span class="f-hot-post-category">
                    <span class="f-index-bg-5">程式設計</span>
                  </span>
                </a>
                <div class="f-gap"></div>
                <h2 class="f-hot-post-title f-index-h4">
                  <a href="#">
                    At first, for some time, I was not able to answer
                  </a>
                </h2>
                <div class="f-hot-post-text">
                  <p>
                    This little wandering journey, without settled place of
                    abode, had been so unpleasant to me, that my own house, as I
                    called it to myself, was a perfect settlement to me compared
                    to that...
                  </p>
                </div>
                <div class="f-gap"></div>
                <div class="d-flex justify-content-between">
                  <a
                    href="#"
                    class="f-index-btn f-index-btn-rounded f-index-btn-color f-index-btn-hover"
                  >
                    Read More
                  </a>
                  <div class="f-hot-post-date">
                    <AiOutlineFile />
                    Jul 3, 2018
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="f-hot-post">
                <a href="#" class="f-hot-post-img">
                  <img
                    src="./images/forum/post-7-mid.jpg"
                    alt="At length one of them called out in a clear"
                  />
                  <span class="f-hot-post-comments-count">75</span>
                  <span class="f-hot-post-category">
                    <span class="f-index-bg-6">原畫創作</span>
                  </span>
                </a>
                <div class="f-gap"></div>
                <h2 class="f-hot-post-title f-index-h4">
                  <a href="#">At length one of them called out in a clear</a>
                </h2>
                <div class="f-hot-post-text">
                  <p>
                    TJust then her head struck against the roof of the hall: in
                    fact she was now more than nine feet high, and she at once
                    took up the little golden key and hurried off to the garden
                    door...
                  </p>
                </div>
                <div class="f-gap"></div>
                <div class="d-flex justify-content-between">
                  <a
                    href="#"
                    class="f-index-btn f-index-btn-rounded f-index-btn-color f-index-btn-hover"
                  >
                    Read More
                  </a>
                  <div class="f-hot-post-date">
                    <AiOutlineFile />
                    Jul 3, 2018
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="f-hot-post">
                <a href="#" class="f-hot-post-img">
                  <img
                    src="./images/forum/post-8-mid.jpg"
                    alt="For good, too though, in consequence"
                  />
                  <span class="f-hot-post-comments-count">64</span>
                  <span class="f-hot-post-category">
                    <span class="f-index-bg-6">原畫創作</span>
                  </span>
                </a>
                <div class="f-gap"></div>
                <h2 class="f-hot-post-title h4">
                  <a href="#">For good, too though, in consequence</a>
                </h2>
                <div class="f-hot-post-text">
                  <p>
                    This little wandering journey, without settled place of
                    abode, had been so unpleasant to me, that my own house, as I
                    called it to myself, was a perfect settlement to me compared
                    to that...
                  </p>
                </div>
                <div class="f-gap"></div>
                <div class="d-flex justify-content-between">
                  <a
                    href="#"
                    class="f-index-btn f-index-btn-rounded f-index-btn-color f-index-btn-hover"
                  >
                    Read More
                  </a>
                  <div class="f-hot-post-date float-right">
                    <AiOutlineFile />
                    Jul 3, 2018
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* 文章列表  */}
        <div class="f-gap-3"></div>
        <h3 class="f-latest-title">
          <span>
            <span class="f-category-text-1">文章</span> 列表
          </span>
        </h3>
        <div class="f-gap"></div>

        <div class="col-lg-12">
          {/* 文章分類  */}
          <div class="f-index-tab">
            <ul
              class="nav nav-tabs nav-tabs-fill f-index-nav f-index-nav-tab f-index-nav-tab-fill"
              role="tablist"
            >
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="true"
                >
                  全部文章
                </a>
              </li>
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="false"
                  onClick={() => changeClassName('1')}
                >
                  技術分享
                </a>
              </li>
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="false"
                  onClick={() => changeClassName('2')}
                >
                  問題求解
                </a>
              </li>
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="false"
                  onClick={() => changeClassName('3')}
                >
                  聯合創作
                </a>
              </li>
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="false"
                  onClick={() => changeClassName('4')}
                >
                  情報分享
                </a>
              </li>
              <li class="nav-item f-index-nav-list">
                <a
                  class="nav-link f-index-nav-link"
                  href="#"
                  role="tab"
                  data-toggle="tab"
                  aria-selected="false"
                  onClick={() => changeClassName('5')}
                >
                  輕鬆閒聊
                </a>
              </li>
            </ul>
          </div>

          <div class="tab-content">
            {/* TAB切換  */}
            <div
              role="tabpanel"
              class="tab-pane fade active show"
              id="tabs-1-1"
            >
              <div class="f-gap"></div>

              {/* {props.article &&
                props.article.map((value, index) => {
                  return (
                    <ForumArticleListBox
                      key={(1, 2, 3, 4)}
                      data={props.article[index]}
                    />
                  )
                })} */}

              {props.article &&
                props.article.map((value, index) => {
                  if (tagName) {
                    if (className) {
                      if (
                        tagName === props.article[index].articleCategoryId &&
                        className === props.article[index].articleClassId
                      ) {
                        return (
                          <ForumArticleListBox
                            key={index}
                            data={props.article[index]}
                            tagName={tagName}
                            className={className}
                          />
                        )
                      }
                    } else {
                      if (tagName === props.article[index].articleCategoryId) {
                        return (
                          <ForumArticleListBox
                            key={index}
                            data={props.article[index]}
                            tagName={tagName}
                            className={props.article[index].articleClassId}
                          />
                        )
                      }
                    }
                  } else {
                    if (className) {
                      if (className === props.article[index].articleClassId) {
                        return (
                          <ForumArticleListBox
                            key={index}
                            data={props.article[index]}
                            tagName={props.article[index].articleCategoryId}
                            className={className}
                          />
                        )
                      }
                    } else {
                      return (
                        <ForumArticleListBox
                          key={index}
                          data={props.article[index]}
                          tagName={props.article[index].articleCategoryId}
                          className={props.article[index].articleClassId}
                        />
                      )
                    }
                  }
                })}

              {/* <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-7-mid-square.jpg"
                        alt="At length one of them called out in a clear"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">程式設計</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">
                        At length one of them called out in a clear
                      </a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10 d-flex">
                      <AiOutlineUser />
                      <a href="#">Wolfenstein</a>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineFile />
                      <span>Jul 3, 2018</span>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineMessage />
                      <a href="#">12 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        TJust then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="#" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-9-mid-square.jpg"
                        alt="He made his passenger captain of one"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">程式設計</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">He made his passenger captain of one</a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10 d-flex">
                      <AiOutlineUser />
                      <a href="#">Wolfenstein</a>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineFile />
                      <span>Jul 3, 2018</span>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineMessage />
                      <a href="#">12 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        Just then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-7-mid-square.jpg"
                        alt="At length one of them called out in a clear"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">程式設計</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">
                        At length one of them called out in a clear
                      </a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10 d-flex">
                      <AiOutlineUser />
                      <a href="#">Wolfenstein</a>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineFile />
                      <span>Jul 3, 2018</span>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineMessage />
                      <a href="#">12 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        TJust then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-7-mid-square.jpg"
                        alt="At length one of them called out in a clear"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">程式設計</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">
                        At length one of them called out in a clear
                      </a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10 d-flex">
                      <AiOutlineUser />
                      <a href="#">Wolfenstein</a>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineFile />
                      <span>Jul 3, 2018</span>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineMessage />
                      <a href="#">12 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        TJust then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-7-mid-square.jpg"
                        alt="At length one of them called out in a clear"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">程式設計</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">
                        At length one of them called out in a clear
                      </a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10 d-flex">
                      <AiOutlineUser />
                      <a href="#">Wolfenstein</a>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineFile />
                      <span>Jul 3, 2018</span>
                      <div class="f-gap-article-list"></div>
                      <AiOutlineMessage />
                      <a href="#">12 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        TJust then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>               
              </div> */}

              <div class="f-gap-2"></div>
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

              {/* 分頁按鈕 */}
              {/* <div class="f-pagenumber f-pagenumber-center">
                <a href="#" class="f-category-icon">
                  <AiOutlineLeft />
                </a>
                <ul class="d-flex ">
                  <li class="nav-item" href="#">
                    1
                  </li>
                  <li class="nav-item" href="#">
                    2
                  </li>
                  <li class="nav-item" href="#">
                    3
                  </li>
                  <li class="nav-item" href="#">
                    4
                  </li>
                  <li class="nav-item">...</li>
                  <li class="nav-item" href="#">
                    14
                  </li>
                </ul>
                <a href="#" class="f-category-icon">
                  <AiOutlineRight />
                </a>
              </div> */}

              <div class="f-gap"></div>
            </div>

            {/* TAB內容底部  */}
            {/* </div> */}

            <div role="tabpanel" class="tab-pane fade" id="tabs-1-2">
              <div class="f-gap"></div>

              <div class="f-hot-post">
                <div class="row f-vertical-gap">
                  <div class="col-lg-3 col-md-5">
                    <a href="#" class="f-hot-post-img">
                      <img
                        src="./images/forum/post-5-mid-square.jpg"
                        alt="He made his passenger captain of one"
                      />
                      <span class="f-hot-post-category">
                        <span class="f-index-bg-5">MMO</span>
                      </span>
                    </a>
                  </div>
                  <div class="col-lg-9 col-md-7">
                    <h2 class="f-hot-post-title h4">
                      <a href="#">He made his passenger captain of one</a>
                    </h2>
                    <div class="f-hot-post-date mt-10 mb-10">
                      <span class="fa fa-calendar"></span>Jul 23, 2018
                      <span class="fa fa-comments"></span>
                      <a href="#">13 comments</a>
                    </div>
                    <div class="f-hot-post-text">
                      <p>
                        Just then her head struck against the roof of the hall:
                        in fact she was now more than nine feet high, and she at
                        once took up the little golden key and hurried off to
                        the garden door...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="f-gap"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = store => {
  return { article: store.getArticleData }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getArticleData }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Forum))
