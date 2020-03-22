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
} from 'react-icons/ai'
import '../../css/forum.css'

function ForumLatestLeftBox(props) {
  return (
    <>
      {/* <div class="f-latest-left-box-article f-latest-left-box-article-active"> */}
      <div class="f-latest-left-box-article ">
        <div class="f-latest-left-box-article-img">
          <img
            src="./images/forum/post-1-sm.jpg"
            alt="Smell magic in the air. Or maybe barbecue"
          />
        </div>
        <img
          src="./images/forum/post-1.jpg"
          alt="Smell magic in the air. Or maybe barbecue"
          class="f-latest-left-box-article-fullimg"
        />
        <h3 class="f-latest-left-box-article-title">
          <span>{props.data.articleName}</span>
        </h3>
        <span class="f-latest-left-box-article-category">
          <span class="f-index-bg-5">程式設計</span>
        </span>
        <div class="f-latest-left-box-article-text">
          <p>{props.data.articleContent}</p>
        </div>
        <a href="#" class="f-latest-left-box-article-url">
          Read More
        </a>
        <div class="d-flex f-latest-left-box-article-date">
          <AiOutlineFile />
          <p>{props.data.created_at}</p>
        </div>
      </div>
    </>
  )
}

export default ForumLatestLeftBox
