import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'
import '../../css/shop.scss'
import { AiOutlineStar,AiTwotoneStar } from 'react-icons/ai'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userCommentAsync } from '../../actions/index'

function Comment2(props) {
    console.log(props.leaveComment)
  const [starLength, setStarLength] = useState(0)
//發表留言
  const [commentContent,setCommentContent] = useState('')
  const [username,setUsername]=useState('')
  const [rating,setRating] = useState(5)
  const [oldCommentContent,setOldCommentContent]=useState([])
//   const [parentId,setParentId] = useState(0)//留言父層id
  const handleSubmit = (parentId = 0)=>{
      console.log('click')
      const userCommentContent = {'name':username,'content':commentContent,'rating':rating,'itemId':props.match.params.type,'parentId':parentId}
      console.log(userCommentContent)
      props.userCommentAsync(userCommentContent,()=>{alert('成功留言');window.location.reload()})
  }

//抓舊留言的function, set到OldCommentContent
async function getOldCommentAsync(productId){
    const request = new Request(
        // 'http://localhost:5555/comments/?itemId='+productId,
        'http://localhost:3300/product/comment/'+ productId,
        {
          method: 'GET',
          
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      const response = await fetch(request)
      const data = await response.json()
      console.log('res data', data)
      setOldCommentContent(data.result)
      
  }
  const productId = props.match.params.type;//取得商品id，當作參數
  useEffect(()=>{getOldCommentAsync(productId);
    },[])

function handleShowReply(element){
    console.log('element=>')
    console.log(element)
    // console.log('card-body',element.closest('.card-body').querySelector('.s-newreply').style.visibility = 'visible')
    element.closest('.card-body').querySelector('.s-newreply').style.maxHeight = '200px'
    element.closest('.card-body').querySelector('.s-newreply').style.border = '1px solid grey'
    // element.closest('.card-body').closest('.s-newreply').visibility('show')
    // targetElement.style('display','block')
    // console.log(targetElement)
}
  //base64 image
  let imagesrc = 'data:image/png;base64,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R1mub4ljp0ePHjrjjDOMxzXoljO62QW7ktXyyCOP1J133qmvv4aHy1fIef1tsB7z38oa5tJ3jCcWj2wmBWfMT3/6Ux199NFVr3JJKIBzJuO76qqrSnVvnT92xfSdG5dI+mkSkzLJPvG2su184oknBIInzfLYY49pjz2oxeQrNo5pDdN3YsAQvjSwl+YZ7owNx8wJJ5ygXXdlTqdfbrrpJhNDLSHbSnop/U9RmxHarWyrniFz/qo2Kq/+LqussooeffRRg28tFLLzCseOHavzzz+/lALWk/Ru9drJRw/ZeavJ6nudLE2KSy65xJzXsibHHnuswdWWEHB9lsXAUY41zFZFELvMxDYKsPh7772XGo9rmI/DAQccYDC0PjItzzDIMDpy21rDbNXED5zq0FF0WNNryAQ55ZRTanrPuG6Gk+q1117z6+4CSefFdZ889GMNs/UtUob85rS/0NVWW01vv/12RZxqks8xd+5ck9r1ve99zwARiJ0Glb59++rDDz/0a05ZQ5xvVuxWtt0coLQeJfZSKxjAbbfdZrCnUeSNN94wRv3++++rqalJq6++uknbApgeRoYMGaLnnnvOXAJKaM8999R+++1njBRMbTlZccUVtWDBMgW++A+SOeeHGUfe29oVs/UNXy3p+DS/bIxgxowZAv8aRjBEQip/+tOfNG/ePDU3Q0on4809++yzNW5cuHKf/fr1MwbuFca01lpr6ZZbbjErqZ/MmTNHPXv29PsVbBEbSvpfmOfKe1trmK1vGDKoH6b1Za+wwgqaNm2a4dQJKv/+97919dVXG5zqf/8Lpc6yMnTo0IqpXsVXAfW799579ckny7JNAny/7LLLTBZKcZ4mtCXf//73/YbxYJp1H1TfcbezhtmqUahEoBRJpRBmIDE5qIBHBXwwefLkktjUVVddVTfeeGM5JI7v7UgN+/jjj/Xpp59qypQpevDBB/X660trLpE+NmbMGLMae+Waa67RT37yE78+oU14KOizNUo7a5itb/qfkr6TxpdOcjPbUFajIMIZjjMfSc+sWuuuu64233xzk2UCpw/pW5999pn5/7jk73//uy688EI9++yzgr2AdDG23d7z66GHHqo77rij+JbzJPWW9J+4xpKXfqxhptwwp06dqm23Ba0WTMidHD9+vDEKUq2A6/Xq1StxhBApXf/4xz/M9pkfPgxslV3h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';


  const comment = (
    <>
      <div className="">
      <div className="container">
      {/* 以下是完整的1則留言 */}
      
                <div className="card my-2">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={imagesrc} className="img img-rounded img-fluid"/>
                                <p className="text-secondary text-center"></p>
                            </div>
                            <div className="col-md-10">
                                <p>
                                    <strong><input type="text" placeholder="請輸入暱稱" onChange={e=>setUsername(e.target.value)}></input></strong>
                                    <span className="float-right">
                                    <span>請給評分: </span>
                                    <input type="number" style={{'width':'35px'}} min="0" max="5" onChange={e=>setRating(e.target.value)}></input>
                                    <AiTwotoneStar className="text-warning" style={{'fontSize':'20px'}}/>
                                    </span>
                                    

                                </p>
                            <div className="clearfix"></div>
                            <form>
                                <textarea className="col-md-10 p mt-2" placeholder="請留言..." onChange={e=>setCommentContent(e.target.value)}></textarea>
                            </form>
                                <p>
                                    <button className="float-right btn btn-outline-primary ml-2" onClick={()=>handleSubmit()}> <i className="fa fa-reply"></i>發表留言</button>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 以上是完整的1則留言 */}

                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
                                <p className="text-secondary text-center">15 Minutes Ago</p>
                            </div>
                            <div className="col-md-10">
                                <p>
                                    <a className="float-left" href="#"><strong>小明</strong></a>
                                    <span className="float-right"><AiTwotoneStar className="text-warning" style={{'fontSize':'20px'}}/></span>
                                    

                            </p>
                            <div className="clearfix"></div>
                                <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <p>
                                    <a className="float-right btn btn-outline-primary ml-2"> <i className="fa fa-reply"></i> Reply</a>
                                    <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</a>
                            </p>
                            </div>
                        </div>
                            <div className="card card-inner">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
                                            <p className="text-secondary text-center">15 Minutes Ago</p>
                                        </div>
                                        <div className="col-md-10">
                                            <p><a href="#"><strong>Maniruzzaman Akash</strong></a></p>
                                            <p>Lorem Ipsum is simply dummy text of the pr make  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>
                                                <a className="float-right btn btn-outline-primary ml-2">  <i className="fa fa-reply"></i> Reply</a>
                                                <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</a>
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

  
  const old_comment=(
  <>
    <div className="container">
      {/* 以下是完整的1則舊留言 */}
      
      {oldCommentContent.map((msg,value)=>{
          return ( 
              msg.parentId ==0?
                <div className="card my-2" key={value}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
                                <p className="text-secondary text-center"></p>
                            </div>
                            <div className="col-md-10">
                                <p>
                                    <a className="float-left" href="#"><strong>{msg.name}</strong></a>
                                    
                                    <span className="float-right">{msg.rating}<AiTwotoneStar className="text-warning" style={{'fontSize':'20px'}}/></span>
                                    

                                </p>
                            <div className="clearfix"></div>
                            <form>
                                
                                <p className="col-md-10">{msg.content}</p>
                            </form>
                                <p>
                                    <button className="float-right btn btn-outline-primary ml-2" onClick={(e)=>handleShowReply(e.target)}> <i className="fa fa-reply"></i>Reply</button>
                                    
                                </p>
                                
                            </div>
                                                        
                        </div>
                        

                        {/* 每則留言內的inner留言，重新map找parentId ==上層id */}
                        {oldCommentContent.map( (innermsg,index)=>{return innermsg.parentId == msg.id ? (
                        <div className="card card-inner">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src="https://image.ibb.co/jw55Ex/def_face.jpg" className="img img-rounded img-fluid"/>
                                            <p className="text-secondary text-center">15 Minutes Ago</p>
                                        </div>
                                        <div className="col-md-10">
                                        
                                            
                                            <>
                                            <p><a href="#"><strong>{innermsg.name}</strong></a></p>
                                            
                                            <p>{innermsg.content}</p>
                                            <p>
                                                
                                                <a className="float-right btn text-white btn-danger"> <i className="fa fa-heart"></i> Like</a>
                                            </p>
                                            </>
                                            
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>):''
                                            })}

                            {}
                            {/* 回覆別人Reply */}
                        {<div className="card my-2 s-newreply" style={{maxHeight:'0',overflow:'hidden',border:'0'}}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src={imagesrc} className="img img-rounded img-fluid"/>
                                        <p className="text-secondary text-center"></p>
                                    </div>
                                    <div className="col-md-10">
                                        <p>
                                            <strong><input type="text" placeholder="請輸入暱稱" onChange={e=>setUsername(e.target.value)}></input></strong>
                                            <span className="float-right">
                                            <span>請給評分: </span>
                                            <input type="number" style={{'width':'35px'}} min="0" max="5" onChange={e=>{setRating(e.target.value)}}></input>
                                            <AiTwotoneStar className="text-warning" style={{'fontSize':'20px'}}/>
                                            </span>
                                            

                                        </p>
                                    <div className="clearfix"></div>
                                    <form>
                                        <textarea className="col-md-10 p mt-2" placeholder="請留言..." onChange={e=>setCommentContent(e.target.value)}></textarea>
                                    </form>
                                        <p>
                                            <button className="float-right btn btn-outline-primary ml-2" onClick={()=>{handleSubmit(msg.id)}}> <i className="fa fa-reply"></i>發表留言</button>
                                            
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>:''
            )
        })}
        {/* 以上是完整的1則留言 */}
    </div>
  </>)
  return <>{comment}{old_comment}</>
}
// 取得Redux中isAuth的值
const mapStateToProps = store => {
    return { leaveComment: store.leaveComment.messageIsLeft }
  }
// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ userCommentAsync }, dispatch)
  }
  

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Comment2))
