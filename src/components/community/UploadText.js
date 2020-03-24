import React, { useState, useEffect } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

export default function UploadText(props) {
  const [uploadTitle, setUploadTitle] = useState('')
  const [uploadContent, setUploadContent] = useState('')

  let handleChangeContent = e => {
    setUploadContent(e.target.value)
  }
  let handleChangeTitle = e => {
    setUploadTitle(e.target.value)
  }
  useEffect(() => props.getStateContentfromchild(uploadContent), [
    uploadContent,
  ])
  useEffect(() => props.getStateTitleromchild(uploadTitle), [uploadTitle])

  return (
    <>
      <div
        style={{ height: '500px', width: '360px', margin: '0 40px' }}
        className="my-4"
      >
        <input
          type="text"
          value={uploadTitle}
          placeholder="請輸入貼文標題"
          onChange={handleChangeTitle}
          name="ptitle"
          // value={props.uploadTitle}
          style={{
            border: 'none',
            borderBottom: '1px solid #79cee2',
            margin: '40px 0 20px 0',
            width: '300px',
            padding: '5px 0',
          }}
        />
        <textarea
          rows="10"
          cols="36"
          name="pcontent"
          value={uploadContent}
          onChange={handleChangeContent}
          style={{ border: '2px dotted #79cee2' }}
        ></textarea>
        <div
          className="d-flex justify-content-between"
          style={{
            width: '300px',
            margin: '20px 2px',
            padding: '0 5px',
          }}
        >
          <span className="d-block">標記好友</span>{' '}
          <AiOutlineRight className="d-block" />
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            width: '300px',
            margin: '20px 2px',
            padding: '0 5px',
          }}
        >
          <span className="d-block">主題標籤 #</span>{' '}
          <AiOutlineRight
            className="d-block"
            onClick={() => console.log(' hi ok')}
          />
        </div>
      </div>
    </>
  )
}
