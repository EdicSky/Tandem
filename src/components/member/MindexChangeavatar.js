import React, { useState, useEffect } from 'react'
import { dollImg } from '../../MimgRef'

function MindexChangeavatar() {
  // 拿到canvas
  const canvasRef = React.useRef(null)

  // 定義兩個圖片物件
  let img = new Image()
  let img2 = new Image()

  const [headlistpos, setHeadlistpos] = useState(0)
  const [headimg, setHeadImg] = useState('')
  const [bodyimg, setBodyImg] = useState('')
  // component載入
  useEffect(() => {}, [])
  //圖片任何參數更動都要再畫一次
  // 動頭
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    img.src = bodyimg
    ctx.drawImage(img, 40, 90, 140, 140)
    img2.src = headimg
    ctx.drawImage(img2, 65, 5, 98, 120)
  }, [headimg])
  // 動下半
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    img.src = bodyimg
    ctx.drawImage(img, 40, 90, 140, 140)
    img2.src = headimg
    ctx.drawImage(img2, 65, 5, 98, 120)
  }, [bodyimg])

  // 分別注入兩種state 用effect處理
  const getHead = e => {
    setHeadImg(e.target.src)
  }
  const getBody = e => {
    console.log(e.target.src)
    setBodyImg(e.target.src)
  }

  return (
    <>
      <div className="M-dollcardWrapper">
        <div className="M-dollcancelBtn" />
        {/* 主要頭像 canvas*/}
        <div className="M-dollcardMajor">
          <canvas ref={canvasRef} width={230} height={230} />
        </div>
        {/* 頭部選擇區 */}
        <div className="M-dollhControlgroup">
          {/* 選擇控制表按鈕 */}
          {/* 頭部控制左 */}
          <div className="M-dollhSelect" />
          <h5>頭部選擇</h5>
          {/* 頭部控制右 */}

          <div className="M-dollhSelect" />
        </div>
        {/* 頭部選擇表最外框 */}
        <div className="M-dollhimgOuter">
          {/* 頭部圖片乘載器 */}
          <ul className="M-dollhimgList">
            <li>
              <img
                src="/images/member/dollsystemImg/head1.png"
                alt=""
                onClick={e => getHead(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head2.png"
                alt=""
                onClick={e => getHead(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head3.png"
                alt=""
                onClick={e => getHead(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head4.png"
                alt=""
                onClick={e => getHead(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head5.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head6.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head7.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head8.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head9.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/head10.png"
                alt=""
                onClick={e => {
                  getHead(e)
                }}
              />
            </li>
          </ul>
        </div>
        {/* 身體選擇器 */}
        <div className="M-dollhControlgroup">
          {/* 選擇控制表按鈕 */}
          <div className="M-dollhSelect" test={10} />
          <h5>下半選擇</h5>
          <div className="M-dollhSelect" />
        </div>
        {/* 下半選擇表最外框和頭共用 */}
        <div className="M-dollhimgOuter">
          {/* 下半圖片乘載器 */}
          <ul className="M-dollbimgList">
            <li>
              <img
                src="/images/member/dollsystemImg/body1.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body2.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body3.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body4.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body5.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body6.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body7.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body8.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body9.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
            <li>
              <img
                src="/images/member/dollsystemImg/body10.png"
                alt=""
                onClick={e => getBody(e)}
              />
            </li>
          </ul>
        </div>
        <button type="button" className="M-dollconfrimBtn" href="#">
          確認修改
        </button>
      </div>
      ;
    </>
  )
}

export default MindexChangeavatar
