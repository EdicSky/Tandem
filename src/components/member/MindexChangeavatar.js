import React, { useState, useEffect } from 'react'

function MindexChangeavatar() {
  // 拿到canvas
  const canvasRef = React.useRef(null)

  // 定義兩個圖片物件
  const img = new Image()
  const img2 = new Image()
  // 輸送帶位置參數
  const [headlistpos, setHeadlistpos] = useState(0)
  const [bodylistpos, setBodylistpos] = useState(0)
  let headinital = 0
  // 上限修正-22
  const moveHead = movedis => {
    headinital = headlistpos
    if (headinital > -5) {
      headinital = -5
    }
    if (headinital < -22) {
      headinital = -22
    }
    headinital += movedis
    setHeadlistpos(headinital)
  }

  let bodyinital = 0
  const moveBody = movedis => {
    bodyinital = bodylistpos
    if (bodyinital > -5) {
      bodyinital = -5
    }
    if (bodyinital < -22) {
      bodyinital = -22
    }
    bodyinital += movedis
    setBodylistpos(bodyinital)
  }

  // 圖片控制參數
  const [headimg, setHeadImg] = useState('')
  const [bodyimg, setBodyImg] = useState('')
  // component載入時要加入使用者紀錄的圖片路徑
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
    ctx.drawImage(img2, 65, 0, 98, 120)
  }, [headimg])
  // 動下半
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    img.src = bodyimg
    ctx.drawImage(img, 40, 90, 140, 140)
    img2.src = headimg
    ctx.drawImage(img2, 65, 0, 98, 120)
  }, [bodyimg])

  // 點擊分別注入兩種state 用effect處理
  const getHead = e => {
    setHeadImg(e.target.src)
  }
  const getBody = e => {
    setBodyImg(e.target.src)
  }

  //紀錄使用者最終的canvas狀態
  const [finalcanvas, setFinalCanvas] = useState()

  const getCanvas = () => {
    let finalcanvasbase64 = canvasRef.current.toDataURL()
    console.log(finalcanvasbase64)
    // 取得base64轉給state
    setFinalCanvas(finalcanvasbase64)
    // 再發一個fetch修改後端資料

    // 用redux連接資料讓所有component的圖像一起更改
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
          <div
            className="M-dollhSelect"
            onClick={() => {
              moveHead(5)
            }}
          />
          <h5>頭部選擇</h5>
          {/* 頭部控制右 */}

          <div
            className="M-dollhSelect"
            onClick={() => {
              moveHead(-5)
            }}
          />
        </div>
        {/* 頭部選擇表最外框 */}
        <div className="M-dollhimgOuter">
          {/* 頭部圖片乘載器 */}
          <ul className="M-dollhimgList" style={{ left: headlistpos + 'rem' }}>
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
          <div
            className="M-dollhSelect"
            onClick={() => {
              moveBody(5)
            }}
          />
          <h5>下半選擇</h5>
          <div
            className="M-dollhSelect"
            onClick={() => {
              moveBody(-5)
            }}
          />
        </div>
        {/* 下半選擇表最外框和頭共用 */}
        <div className="M-dollhimgOuter">
          {/* 下半圖片乘載器 */}
          <ul className="M-dollbimgList" style={{ left: bodylistpos + 'rem' }}>
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
        <button
          type="button"
          className="M-dollconfrimBtn"
          onClick={() => {
            getCanvas()
          }}
        >
          確認修改
        </button>
      </div>
      ;
    </>
  )
}

export default MindexChangeavatar
