import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

//components
import ActivityContentKV from '../../components/activity/ActivityContentKV'
import ActivityContentInfo from '../../components/activity/ActivityContentInfo'
import ActivityComment from '../../components/activity/ActivityComment'

//bootstrap
import { Col } from 'react-bootstrap'

function ActivityContentPage(props) {
  // console.log('contentpageprops', props.location)

  const [aData, setAData] = useState([])

  async function activityData() {
    let data = await fetch(
      `http://localhost:6001/activity${props.location.pathname}`
    )
    let activityData = await data.json()
    setAData(activityData)
    // console.log('activityData', activityData)
  }

  useEffect(() => {
    activityData()
  }, [])

  return (
    <>
      <div className="container activityWrap">
        {/* 活動圖 */}
        <ActivityContentKV aData={aData} />
        {/* 活動內容 + icon */}
        <ActivityContentInfo aData={aData} />
        <br />
        <hr style={{ border: '1px solid lightgray', margin: '20px 100px' }} />
        {/* 留言標題 */}
        <Col md={{ span: 6, offset: 3 }}>
          <div className="container py-2">
            <h2 className="py-2">留言</h2>
          </div>
        </Col>
        {/* 留言內容 */}
        <ActivityComment aData={aData} />
      </div>
    </>
  )
}

export default withRouter(ActivityContentPage)
