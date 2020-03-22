import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

//style icon
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { AiFillLike, AiOutlineLike, AiFillMessage } from 'react-icons/ai'

function ActivityComment(props) {
  const aBData = props.aData
  const aId = aBData.aId
  const localUserData = JSON.parse(localStorage.getItem('LoginUserData'))
  const [aComment, setAComment] = useState('')
  const [aCommentInfo, setACommentInfo] = useState([])
  const [RUOK, setRUOK] = useState(false)

  console.log('aBData', aBData)
  console.log('aId', aId)
  console.log('RUOK', RUOK)

  // 讀取資料庫留言內容
  async function getACommentInfo() {
    let data = await fetch(`http://localhost:6001/activity/getComment/${aId}`)
    let getCommentInfo = await data.json()
    console.log('getCommentInfo', getCommentInfo)
    setACommentInfo(getCommentInfo)
  }

  //新增留言的button clickfunc
  const addNewComment = () => {
    console.log('localStorage', localUserData)
    //收集要送到後端的資料
    const addCommentData = { aComment, aBData, localUserData }
    //觸發將留言送至後端func
    console.log('commentToServer', addCommentData)
    sendNewCommentDataToServer(addCommentData, getACommentInfo)
  }

  //將留言送至後端
  async function sendNewCommentDataToServer(addCommentData, callback) {
    const request = new Request(
      `http://localhost:6001/activity${props.location.pathname}`,
      {
        method: 'POST',
        body: JSON.stringify(addCommentData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const response = await fetch(request)
    const success = await response.json()
    console.log(success)
    callback()
  }

  // 導入頁面即載入內容
  // useEffect(() => {
  //   getACommentInfo()
  // }, [])

  useEffect(() => {
    if (aId) {
      setRUOK(true)
      getACommentInfo()
    } else {
      setRUOK(false)
    }
  }, [aBData])

  //更新留言即再抓一次最新資料
  // useEffect(() => {
  //   getACommentInfo()
  // }, [aCommentInfo])
  console.log('aCommentInfo', aCommentInfo)

  const NO = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const OK = (
    <>
      {/* 新增留言 */}
      <Col md={{ span: 8, offset: 2 }} className="text-center py-3">
        <Row className="aReply">
          <textarea
            className="form-control"
            name="aComment"
            id="aComment"
            placeholder="說點話吧~"
            onChange={e => setAComment(e.target.value)}
          ></textarea>
        </Row>
        <Row className="justify-content-end">
          <button className="aBtn p-2" onClick={() => addNewComment()}>
            <div className="aCommentbtn">新增留言</div>
          </button>
        </Row>
      </Col>
      <Col md={4} className="text-right"></Col>
      <Col md={{ span: 8, offset: 2 }}>
        {aCommentInfo.map((value, ind) => (
          <Row className="aComment d-flex">
            <div className="aCommentAvatar" key={ind}>
              <Link href="">
                <img src="images/activity/pucca.jpg" alt="" />
              </Link>
            </div>
            <div className="aCommentMeta">
              <div className="aMemberInfo d-flex justify-content-between">
                <h5 className="aCommentName m-2">{value.mbName}</h5>
                <p className="aCommentDate m-2 text-right">
                  {value.created_at}
                </p>
              </div>
              <div className="aCommentInfo">{value.aComment}</div>
              <div className="aFunctionLine justify-content-start ">
                <div className="aCommentLike m-2">
                  <AiFillLike />
                </div>
                <div className="aFallowing m-2">
                  <AiFillMessage />
                </div>
              </div>
            </div>
          </Row>
        ))}
      </Col>
      {/* {aCommentInfo} */}

      {/* 內層留言 */}
      <Row className="aComment d-flex">
        <div className="aCommentAvatar">
          <Link href="">
            <img src="images/activity/pucca.jpg" alt="" />
          </Link>
        </div>
        <Col className="aCommentMeta">
          <div className="aMemberInfo d-flex  justify-content-between">
            <h5 className="aCommentName m-2">member name</h5>
            <p className="aCommentDate m-2 text-right">20 January, 2020</p>
          </div>
          <div className="aCommentInfo">
            comment comment comment comment comment comment comment
          </div>
          <Row className="aFunctionLine justify-content-start">
            <div className="aCommentLike m-2">
              <AiOutlineLike />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  )

  return <>{RUOK ? OK : NO}</>
}

export default withRouter(ActivityComment)
