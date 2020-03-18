import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'
import '../../css/forum.css'

function ForumPost() {
  return (
    <>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="forum-form">
                        <form action="">
                            <div class="row">
                                <div class="col-12">
                                    <div class="single-input mb-50 mb-sm-30 mb-xs-20">
                                        <label>標題</label>
                                        <input name="title" type="text" placeholder="Enter topic title here"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="single-input mb-50 mb-sm-30 mb-xs-20">
                                       <label>主題類型</label>
                                       <input name="type" type="text" placeholder="Enter topic title here"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="single-input mb-50 mb-sm-30 mb-xs-20">
                                       <label>topic content</label>
                                       <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                    </div>
                                </div>
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

export default ForumPost