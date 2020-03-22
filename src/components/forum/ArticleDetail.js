import React, { useState, useEffect } from 'react'
// import { withRouter, Switch, Route } from 'react-router-dom'
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
import '../../css/forum.css'

function ArticleDetail(props) {
  //   console.log('細節', props)
  return (
    <>
      <div class="f-hot-post-text mt-0">
        <div class="f-hot-post-img">
          <img
            src="./images/forum/post-2.jpg"
            alt="Grab your sword and fight the Horde"
          />
        </div>

        <div class="f-gap-1"></div>
        <h1 class="f-hot-post-title h4">{props.data.articleName}</h1>
        <div class="f-gap"></div>
        <div class="f-hot-post-by">
          <img
            src="./images/forum/avatar-2.jpg"
            alt="Witch Murder"
            class="rounded-circle"
            width="35"
          />{' '}
          by <a href="#">{props.data.articleAuthor}</a> in Sep 5, 2018
          <div class="f-hot-post-category">
            <span class="f-index-bg-5">程式設計</span>
            <span class="f-index-bg-6">原畫創作</span>
            <span>
              <AiOutlineEdit />
            </span>
            <span>
              <AiOutlineDelete />
            </span>
          </div>
        </div>

        {props.data.articleContent}
        {/* {props.article &&
  props.article.map((value, index) => {
    return <div key={index} data={props.data.articleContent} />
  })} */}

        <img
          class="float-left mt-0"
          src="./images/forum/post-inner-img.jpg"
          alt=""
        />

        <div class="f-gap"></div>
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

export default ArticleDetail
