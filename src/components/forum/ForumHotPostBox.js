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

function ForumHotPostBox(props) {
  return (
    <>
      <div class="col-md-6 col-lg-3">
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
            <a href="#">{props.data.articleName}</a>
          </h2>
          <div class="f-hot-post-text">
            <p>{props.data.articleContent}</p>
          </div>
          <div class="f-gap"></div>
          <div class="d-flex justify-content-between">
            <a
              href={'./article/' + props.data.articleId}
              class="f-index-btn f-index-btn-rounded f-index-btn-color f-index-btn-hover"
            >
              Read More
            </a>
            <div class="d-flex f-hot-post-date">
              <AiOutlineFile />
              {props.data.created_at}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForumHotPostBox
