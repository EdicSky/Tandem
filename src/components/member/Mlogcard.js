import React, { useState, useEffect } from 'react'

function Mlogcard() {
  // 卡片切換
  const [logswitch, setLogSwitch] = useState(false)
  //忘記密碼小卡彈跳
  const [forgetpwd, setForgetPwd] = useState(false)
  // 密碼查詢email
  const [fgtraceE, setFgtraceE] = useState('')
  //寄送密碼重設信件
  const resetEmail = () => {
    //TODO 輸入驗證---------------------
    //組裝資訊
    const userfgtraceE = { fgtraceE }
    // fetch後端送信
    async function posttraceE(userfgtraceE, callback) {
      const request = new Request('http://localhost:4000/fgpwd', {
        method: 'POST',
        body: JSON.stringify(userfgtraceE),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const response = await fetch(request)
      console.log('fetch完成')
      const payload = await response.json()
      console.log(payload)
    }
    // fire上方功能
    posttraceE(userfgtraceE)
  }

  //TODO
  //登入取值00 //值驗證 //發fetch後端確認搜索狀態 //成功寫入local//轉頁

  const [userlgE, setUserLgE] = useState('')
  const [Eerror, setEerror] = useState(false)
  const [userlgPwd, setUserlgPwd] = useState('')
  // 先擋掉輸入不正確的部分，減少IO
  useEffect(() => {
    let email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (userlgE === '' || !email_pattern.test(userlgE)) {
      return console.log('發生錯誤')
    } else {
      console.log('mail正確')
    }
  }, [userlgE])
  // 打包所有資訊，套上資料表用的key

  const handleLog = () => {
    // 把最新的輸入狀況抓取
    const userlogData = { mbE: userlgE, mbPwd: userlgPwd }
    // 這裡先對fetch方式做描述
    async function postLoginfo(userlogData, callback) {
      const request = new Request('http://localhost:4000/test', {
        method: 'POST',
        body: JSON.stringify(userlogData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const response = await fetch(request)
      console.log('fetch完成')
      const payload = await response.json()
      console.log(payload)
      // sessionStorage.setItem('key', 'payload') //測試儲存
      // 轉頁處理
      // setTimeout(() => {
      //   window.location.href = 'https://www.google.com/?hl=zh-tw'
      // }, 3000)
    }
    //呼叫上方fetch送後端
    postLoginfo(userlogData)
  }
  //註冊取值00//二次密碼驗證 //發fetch後端確認註冊重複性 //成功寫入local//轉首頁//首頁要因為認證的state可以轉換樣式

  const [userRE, setUserRE] = useState('')
  const [userRpwd, setUserRpwd] = useState('')
  const [userRpwd2, setUserRpwd2] = useState('')

  //TODO需要另外的UI機制來提示使用者
  // 檢查註冊email輸入格式
  useEffect(() => {
    let email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (userRE === '' || !email_pattern.test(userRE)) {
      return console.log('發生錯誤')
    } else {
      console.log('mail正確')
    }
  }, [userRE])
  // 檢查註冊pwd輸入格式
  useEffect(() => {
    if (userRpwd === '' || userRpwd !== userRpwd2) {
      return console.log('發生錯誤')
    } else {
      console.log('密碼比對正確')
    }
  }, [userRpwd2])

  const handleRE = () => {
    // 把最新的註冊輸入狀況抓取
    const userREData = { mbE: userRE, mbPwd: userRpwd }
    // 這裡先對fetch方式做描述
    async function postREinfo(userREData, callback) {
      const request = new Request('http://localhost:4000/test', {
        method: 'POST',
        body: JSON.stringify(userREData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const response = await fetch(request)
      console.log('RE fetch完成')
      const payload = await response.json()
      console.log(payload)
      setTimeout(() => {
        window.location.href = 'https://www.google.com/?hl=zh-tw'
      }, 3000)
    }
    //呼叫上方fetch送後端
    postREinfo(userREData)
  }

  // ---------之後利用local 取值或者是state?-----當作會員頁往後面fetch資料的id

  // 背景底色控制
  const loginWrapperDefault = 'M-loginWrapper'
  const loginWrapperChange = 'M-loginWrapper active'
  // 登入註冊切換
  const loginDefault = 'M-logCard'
  const loginChange = 'M-logCard active'
  // 方塊切換
  const Brick1Default = 'M-moveBrick1 Brick'
  const Brick1Change = 'M-moveBrick1 Brick active'
  const Brick2Default = 'M-moveBrick2 Brick'
  const Brick2Change = 'M-moveBrick2 Brick active'
  const Brick3Default = 'M-moveBrick3 Brick'
  const Brick3Change = 'M-moveBrick3 Brick active'
  const Brick4Default = 'M-moveBrick4 Brick'
  const Brick4Change = 'M-moveBrick4 Brick active'

  return (
    <>
      <div className={!logswitch ? loginWrapperDefault : loginWrapperChange}>
        {/* 移動的方塊 */}
        <div className={!logswitch ? Brick1Default : Brick1Change}></div>
        <div className={!logswitch ? Brick2Default : Brick2Change}></div>
        <div className={!logswitch ? Brick3Default : Brick3Change}></div>
        <div className={!logswitch ? Brick4Default : Brick4Change}></div>
        {/* 忘記密碼小卡 */}
        <div
          className="M-FgpwdCard"
          style={{ display: `${forgetpwd ? '' : 'none'}` }}
        >
          <div
            className="M-FgpwdCardcBtn"
            onClick={() => {
              setForgetPwd(!forgetpwd)
            }}
          ></div>
          <h6>請輸入電子信箱</h6>
          <input
            name="M-fgEmail"
            type="text"
            className="M-FgpwdCardinput"
            onChange={e => {
              setFgtraceE(e.target.value)
            }}
          />
          <button
            className="M-sendMail"
            onClick={() => {
              resetEmail()
            }}
          >
            寄送驗證信
          </button>
        </div>
        {/* <!-- 登入卡 --> */}

        <div className={!logswitch ? loginDefault : loginChange}>
          <div className="M-fakeLogo">
            <img src="/images/member/logo.svg" alt="" />
          </div>
          <h3>會員登入</h3>
          <div className="M-apiLog">
            <div className="M-icon"></div>
            <div className="M-icon"></div>
          </div>
          <h3>或使用電子郵件</h3>
          <div className="M-logForm">
            <input
              type="text"
              className="M-loginInput"
              name="lgE"
              placeholder="Email"
              required
              onChange={e => {
                setUserLgE(e.target.value)
              }}
            />
            <input
              type="password"
              className="M-loginInput"
              name="lgPwd"
              placeholder="Password"
              required
              onChange={e => {
                setUserlgPwd(e.target.value)
              }}
            />
            <br />
            <button
              className="M-forgetpwd"
              onClick={() => {
                setForgetPwd(!forgetpwd)
              }}
            >
              忘記密碼
            </button>
            <button
              className="M-loginBtn"
              style={{ display: 'inline-block' }}
              onClick={() => {
                handleLog()
              }}
            >
              登入
            </button>
            <div
              className="M-loginSwitch"
              onClick={() => {
                setLogSwitch(!logswitch)
              }}
            ></div>
          </div>
        </div>
        {/* -----------------註冊卡--------------- */}
        <div className="M-regCard">
          <div className="M-fakeLogo">
            <img src="/images/member/logo.svg" alt="" />
          </div>
          <h3>帳號創建</h3>
          <div className="M-apiLog">
            <div className="M-icon"></div>
            <div className="M-icon"></div>
          </div>
          <h3>或電子郵件註冊</h3>
          <div className="M-logForm">
            <input
              type="text"
              className="M-loginInput"
              name="reEmail"
              placeholder="Email"
              required
              onChange={e => {
                setUserRE(e.target.value)
              }}
            />
            <input
              type="password"
              className="M-loginInput"
              name="rePwd"
              placeholder="Password"
              required
              onChange={e => {
                setUserRpwd(e.target.value)
              }}
            />
            <input
              type="password"
              className="M-loginInput"
              name="re2Pwd"
              placeholder="Confirm Password"
              required
              onChange={e => {
                setUserRpwd2(e.target.value)
              }}
            />
            <br />
            <button
              className="M-regBtn"
              style={{ display: 'inline-block' }}
              onClick={() => {
                handleRE()
              }}
            >
              註冊
            </button>
            <div
              className="M-regSwitch"
              onClick={() => {
                setLogSwitch(!logswitch)
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mlogcard
