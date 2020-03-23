import React, { useState, useEffect } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
// import { NavLink } from 'react-bootstrap'
//redux
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { getArticleData } from '../../actions/articleActions'
// import { NavLink } from 'react-bootstrap'
import {
  AiOutlineGithub,
  AiOutlineHighlight,
  AiOutlineSolution,
  AiOutlineUser,
  AiOutlineFile,
  AiOutlineMessage,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import ArticleTag from '../../components/forum/ArticleTag'
import '../../css/forum.scss'

function ArticleDetail(props) {
  //   console.log('細節2', props)
  console.log('component內容', props)

  const [article, setArticle] = useState([])
  const [tagName, setTagname] = useState('')
  const articleId = props.match.params.articleId
    ? props.match.params.articleId
    : ''
  console.log('ID', articleId)

  async function getDetailFromServer(articleId) {
    const request = new Request('http://localhost:6001/articles/' + articleId, {
      method: 'GET',
      credentials: 'include',
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('文章1', data)
    setArticle(data[0])
  }

  useEffect(() => {
    console.log('文章2', props)
    getDetailFromServer(articleId)
  }, [])

  console.log('內容2', article)
  return (
    <>
      <div class="f-hot-post-text mt-0">
        <div class="f-single-post-img">
          <a>
            <img
              src={`../../images/forum/article${article.articleId}.jpg`}
              alt=""
            />
          </a>
        </div>

        <div class="f-gap-1"></div>
        <h1 class="f-hot-post-title h4">{article.articleName}</h1>
        <div class="f-gap"></div>
        <div class="f-hot-post-by">
          <img
            src="./images/forum/avatar-2.jpg"
            alt=""
            class="rounded-circle"
            width="35"
          />{' '}
          by <a href="#">{article.articleAuthor}</a> in Sep 5, 2018
          <div class="f-hot-post-category">
            <ArticleTag tagName={props.tagName} />
            {/* {props.article &&
              props.article.map((value, index) => {
                  if (props.articleId.articleCategoryId === tagName) {
                    return (
                      <ArticleTag
                        key={index}
                        data={props.articleId}
                        tagName={tagName}
                      />
                    )
                  }
                }
              }   */}
            {/* <span class="f-index-bg-5">程式設計</span>
            <span class="f-index-bg-6">原畫創作</span> */}
            <span>
              <AiOutlineEdit />
            </span>
            <span>
              <AiOutlineDelete />
            </span>
          </div>
        </div>

        <div class="f-gap-1"></div>
        <div class="f-single-article-content">
          {article.articleContent}
          {/* {props.article &&
  props.article.map((value, index) => {
    return <div key={index} data={props.data.articleContent} />
  })} */}
        </div>
        <img
          class="float-left mt-0"
          // src={`./images/forum/article${article.articleId}.jpg`}
          // src="./images/forum/post-inner-img.jpg"
          alt=""
        />

        <div class="f-gap-1"></div>
        <div class="f-post-share justify-content-between">
          <span class="">Share Article:</span>
          <div class="d-flex f-post-share-icon">
            <AiOutlineGoogle />
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiOutlineLinkedin />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ArticleDetail)
