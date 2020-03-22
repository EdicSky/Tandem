import React, { useEffect, useState } from 'react'

import ActivityTitle from '../../components/activity/ActivityTitle'
import { useHistory } from 'react-router-dom'

//redux reducer action
// import { useDispatch } from 'react-redux'

//bootstrap icon
import { Row, Col, Button } from 'react-bootstrap'
import { AiOutlinePicture } from 'react-icons/ai'
// import ActivityNewInfo from '../../components/activity/ActivityNewInfo'

//檔案上傳套件
import { useDropzone } from 'react-dropzone'

// 圖檔上傳設定
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  top: 0,
  left: '40px',
}
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 600,
  height: 400,
  padding: 4,
  boxSizing: 'border-box',
}
const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}
const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
}

function ActivityAddNew(props) {
  const history = useHistory()
  // const dispatch = useDispatch()
  // const aAddNew = useSelector(state => state.activityAddNew)
  //活動名稱 , 活動日期 , 人數限制 , 預算 , 需時 , 活動類別 , 起訖時間 , 活動內容 , 活動地點 , 活動文宣
  const [aName, setAName] = useState('')
  const [aDate, setADate] = useState('')
  const [aLimit, setALimit] = useState('')
  const [aBudget, setABudget] = useState('')
  const [aCostTime, setACostTime] = useState('')
  const [aCategory, setACategory] = useState('')
  const [aStartDate, setAStartDate] = useState('')
  const [aEndDate, setAEndDate] = useState('')
  const [aContent, setAContent] = useState('')
  const [aLocation, setALocation] = useState('')
  const [files, setFiles] = useState([])

  //錯誤訊息設定
  // const [error, setError] = useState(false)
  // const [errorMessages, setErrorMessages] = useState([])

  //圖檔上傳設定
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="uploadpic" />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const addNewActivity = () => {
    const addNewAcData = {
      aName,
      aDate,
      aLimit,
      aBudget,
      aCostTime,
      aCategory,
      aStartDate,
      aEndDate,
      aContent,
      aLocation,
      files,
    }
    sendNewActivityDataToServer(addNewAcData, redirect)
  }

  async function sendNewActivityDataToServer(addNewAcData, callback) {
    const request = new Request(`http://localhost:6001/activity/addNewAc`, {
      method: 'POST',
      body: JSON.stringify(addNewAcData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // console.log('addNewAcData', JSON.stringify(addNewAcData))

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    callback()
  }

  function redirect() {
    history.goBack()
  }

  return (
    <>
      <ActivityTitle atitlename="新增活動" />
      <article className="content container text-center aAddInfo">
        <form>
          <Row className="m-2">
            <Col md={3} className="text-right">
              活動名稱
            </Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="text"
                name="aName"
                id="aName"
                placeholder="請輸入中文或英文"
                required
                onChange={e => setAName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              活動日期
            </Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="date"
                name="aDate"
                id="aDate"
                placeholder="請選擇時間"
                required
                onChange={e => setADate(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              人數上限
            </Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="number"
                name="aLimit"
                id="aLimit"
                placeholder="請輸入數值"
                required
                onChange={e => setALimit(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              預算
            </Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="number"
                name="aBudget"
                id="aBudget"
                placeholder="請輸入數值"
                required
                onChange={e => setABudget(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              活動需時
            </Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="number"
                name="aCostTime"
                id="aCostTime"
                placeholder="請輸入數值"
                required
                onChange={e => setACostTime(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              類別
            </Col>
            <Col md={3} className="text-left">
              <select
                className="form-control"
                name="aCategory"
                id="aCategory"
                placeholder="請選擇類別"
                required
                onChange={e => setACategory(e.target.value)}
              >
                <option value="">輕鬆聚會</option>
                <option value="">專題講座</option>
                <option value="">技能競賽</option>
                <option value="">運動休閒</option>
                <option value="">地圖探索</option>
                <option value="">活動管理</option>
              </select>
              {/* <input className="form-control" type="text" /> */}
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              開放報名時間
            </Col>
            <Col md={3} className="text-left aDateInput d-flex">
              <input
                className="form-control"
                type="date"
                name="aStartDate"
                id="aStartDate"
                required
                onChange={e => setAStartDate(e.target.value)}
              />
            </Col>
            <Col md={1}>～</Col>
            <Col md={3} className="text-left">
              <input
                className="form-control"
                type="date"
                name="aEndDate"
                id="aEndDate"
                required
                onChange={e => setAEndDate(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              活動內容
            </Col>
            <Col md={8} className="text-left">
              <textarea
                className="form-control"
                cols="30"
                rows="5"
                name="aContent"
                id="aContent"
                placeholder="請填寫活動內容"
                required
                onChange={e => setAContent(e.target.value)}
              ></textarea>
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              地址
            </Col>
            <Col md={8} className="text-left">
              <input
                className="form-control"
                type="text"
                name="aLocation"
                id="aLocation"
                placeholder="請填寫地址"
                required
                onChange={e => setALocation(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={3} className="text-right">
              活動文宣
            </Col>
            <Col md={8} className="text-center">
              <section className="aUplodePic position-relative" name="aKV">
                <div
                  style={{ width: '500px' }}
                  {...getRootProps({ className: 'dropzone' })}
                >
                  <input
                    style={{}}
                    {...getInputProps()}
                    placeholder="Username"
                    required
                  />
                  <p>
                    <AiOutlinePicture
                      style={{
                        display: 'flex',
                        margin: 'auto',
                        fontSize: '50px',
                      }}
                    />
                    －－新增文宣檔案，點擊或拖曳圖片至此－－
                  </p>
                  <aside className="position-absolute" style={thumbsContainer}>
                    {thumbs}
                  </aside>
                </div>
              </section>
            </Col>
          </Row>
          <Button
            className="aBtn m-3"
            onClick={() => addNewActivity()}
            onSubmit
          >
            新增
          </Button>
        </form>
      </article>
    </>
  )
}

export default ActivityAddNew
