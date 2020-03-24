import React, { useState, useEffect } from 'react'
import UploadFile from '../../components/community/UploadFile'
import UploadText from '../../components/community/UploadText'
import {
  AiOutlineCloseCircle,
  // AiOutlinePlusSquare,
  // AiOutlineFileImage,
} from 'react-icons/ai'

export default function AddPost(props) {
  // console.log(props)
  const [contentfromchild, setContentfromchild] = useState('')
  const [titlefromchild, setTitlefromchild] = useState('')
  const [imagefromchild, setImagefromchild] = useState('')
  const [loginUserId, setLoginUserId] = useState('')

  useEffect(() => {
    const getDatafromlocal = JSON.parse(localStorage.getItem('LoginUserData'))
    const input = { mbId: getDatafromlocal.mbId }
    // const jsonInput = JSON.stringify(input)

    setLoginUserId(input.mbId)
    console.log(input.mbId)
  }, [])

  const handleSubmit = () => {
    // async function sendDatatoServer(postData, callback) {
    // 注意資料格式要設定，伺服器才知道是json格式

    const formdata = new FormData()
    formdata.append('communityImage', imagefromchild[0])
    formdata.append('title', titlefromchild)
    formdata.append('content', contentfromchild)
    formdata.append('memberId', loginUserId)

    addNewPosttoServer(formdata, () => alert('成功上傳照片'))

    async function addNewPosttoServer(formdata, callback) {
      // console.log('addNewPosttoServer---')
      // console.log(imagefromchild[0])

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request('http://localhost:5555/items/uploaditem/', {
        method: 'POST',
        credentials: 'include',
        body: formdata,
        headers: new Headers({
          Accept: 'application/json',
        }),
      })
      console.log('JSON.stringify(formdata)')

      const response = await fetch(request)
      const data = await response.json()
      console.log('from addpost :', data)
      callback()
    }
  }

  return (
    <>
      <div className="container" style={{ marginBottom: '60px' }}>
        <div className="row">
          {/* 上傳大區塊                 */}
          {/* boxShadow: '3px 3px 50px #F2F2F2' */}

          <form
            // encType="multipart/form-data"
            className="col-12"
            style={{ boxShadow: '0px 0px 10px #adb6bd' }}
          >
            {/* 發布和取消按鈕 */}

            <div className="m-3 d-flex justify-content-between">
              <AiOutlineCloseCircle style={iconStyle} className="d-block" />
              <button
                style={buttonStyle}
                onClick={() => {
                  handleSubmit()
                }}
              >
                <span>發布</span>
              </button>
            </div>

            {/* 上傳區塊                 */}
            <div className="d-flex">
              <UploadFile
                getStateImagefromchild={value => {
                  console.log(value)
                  setImagefromchild(value)
                }}
              />
              <UploadText
                getStateContentfromchild={value => {
                  // console.log(value)
                  setContentfromchild(value)
                }}
                getStateTitleromchild={value => {
                  // console.log(value)

                  setTitlefromchild(value)
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const buttonStyle = {
  padding: '2px 20px',
  height: '30px',
  background: 'transparent',
  border: '2px solid #79cee2',
  color: '#79cee2',
  fontWeight: 'bold',
}

const iconStyle = {
  fontSize: '30px',
  color: '#F9A451',
}
