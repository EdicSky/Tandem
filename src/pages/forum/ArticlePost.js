import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Container,
  Row,
  Card,
  ListGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '../../css/forum.css'

function ArticlePost() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="f-gap-2"></div>
            <div class="forum-form">
              <form action="">
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex f-post-category">
                      <label>文章類型：</label>
                      {/* <input name="title" type="text" placeholder="Enter topic title here"/> */}
                      <DropdownButton
                        className=""
                        id="f-post-dropdown"
                        title="選擇類型"
                      >
                        <Dropdown.Item href="#/action-1">
                          技術研討
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          原畫創作
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          廠商徵才
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div class="f-gap"></div>
                    <div class="d-flex f-post-category">
                      <label>主題類型：</label>
                      {/* <input name="title" type="text" placeholder="Enter topic title here"/> */}
                      <DropdownButton
                        className=""
                        id="f-post-dropdown"
                        title="選擇類型"
                      >
                        <Dropdown.Item href="#/action-1">
                          技術分享
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          問題求解
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          聯合創作
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          情報分享
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          輕鬆閒聊
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div class="f-gap"></div>
                  </div>

                  <div class="f-gap-3"></div>
                  <div class="col-12">
                    <div class="single-input mb-50 mb-sm-30 mb-xs-20">
                      <label>標題：</label>
                      <input
                        name="type"
                        type="text"
                        placeholder="Enter topic title here"
                      />
                    </div>
                  </div>

                  <div class="f-gap-2"></div>
                  <div class="col-12">
                    <div class="single-input mb-50 mb-sm-30 mb-xs-20">
                      <label>文章內容：</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        onInit={editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log('Editor is ready to use!', editor)
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData()
                          console.log({ event, editor, data })
                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor)
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor)
                        }}
                      />
                    </div>
                  </div>

                  <div class="f-gap-3"></div>
                  <div class="col-12 f-article-post-btn ">
                    <button
                      href="#"
                      class="f-index-btn f-index-btn-rounded f-index-btn-color"
                    >
                      留言
                    </button>
                    {/* <button class="f-index-btn f-index-btn-rounded f-index-btn-color">留言</button> */}
                  </div>
                  <div class="f-gap-3"></div>

                  {/* <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon">
                                            <i className="fas fa-pencil-alt prefix"></i>
                                            </span>
                                        </div>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlePost
