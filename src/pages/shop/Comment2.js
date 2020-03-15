import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import '../../css/shop.scss'
import { AiOutlineStar,AiTwotoneStar } from 'react-icons/ai'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userCommentAsync } from '../../actions/index'

function Comment(props) {
    console.log(props.leaveComment)
  const [starLength, setStarLength] = useState(0)
//   useEffect(() => {}, [])
  const [commentContent,setCommentContent] = useState('')
  const handleSubmit = ()=>{
      console.log('click')
      const userCommentContent = {'comment':commentContent}
      console.log(userCommentContent)
      props.userCommentAsync(userCommentContent,()=>alert('成功留言'))
  }
  const comment = (
    <>
      <div className="">
      <div class="container">
                <div class="card my-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                <p class="text-secondary text-center"></p>
                            </div>
                            <div class="col-md-10">
                                <p>
                                    <a class="float-left" href="#"><strong>小陳</strong></a>
                                    <span class="float-right"><AiTwotoneStar class="text-warning" style={{'fontSize':'20px'}}/></span>
                                    

                                </p>
                            <div class="clearfix"></div>
                            <form>
                                <textarea className="col-md-10" placeholder="請留言..." onChange={e=>setCommentContent(e.target.value)}></textarea>
                            </form>
                                <p>
                                    <button class="float-right btn btn-outline-primary ml-2" onClick={()=>handleSubmit()}> <i class="fa fa-reply"></i>發表留言</button>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                <p class="text-secondary text-center">15 Minutes Ago</p>
                            </div>
                            <div class="col-md-10">
                                <p>
                                    <a class="float-left" href="#"><strong>小明</strong></a>
                                    <span class="float-right"><AiTwotoneStar class="text-warning" style={{'fontSize':'20px'}}/></span>
                                    

                            </p>
                            <div class="clearfix"></div>
                                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>
                                    <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Reply</a>
                                    <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                            </p>
                            </div>
                        </div>
                            <div class="card card-inner">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" class="img img-rounded img-fluid"/>
                                            <p class="text-secondary text-center">15 Minutes Ago</p>
                                        </div>
                                        <div class="col-md-10">
                                            <p><a href="#"><strong>Maniruzzaman Akash</strong></a></p>
                                            <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>
                                                <a class="float-right btn btn-outline-primary ml-2">  <i class="fa fa-reply"></i> Reply</a>
                                                <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
  return <>{comment}</>
}
// 取得Redux中isAuth的值
const mapStateToProps = store => {
    return { leaveComment: store.leaveComment.messageIsLeft }
  }
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userCommentAsync }, dispatch)
  }
  

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Comment))
