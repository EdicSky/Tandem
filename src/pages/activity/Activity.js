import React, { useState, useEffect } from 'react'

//components
import ActivityCarousel from '../../components/activity/ActivityCarousel'
import ActivitySearchbar from '../../components/activity/ActivitySearchbar'
import ActivityListCard from '../../components/activity/ActivityListCard'

//style bootstrap
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {
  AiFillPlusCircle,
  AiOutlinePlusCircle,
  AiOutlineCaretLeft,
  AiOutlineCaretRight,
} from 'react-icons/ai'

function Activity(props) {
  const [aData, setAData] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // console.log('pageNum', pageNum)

  //連接資料庫
  async function activityData() {
    let data = await fetch(`http://localhost:6001/activity/${pageNum}`)
    let activityData = await data.json()
    setTotalPages(parseInt(activityData.totalPages))
    setAData(activityData.activity)
  }

  //首次Effect連接資料庫資料
  useEffect(() => {
    activityData()
  }, [])

  //只要頁數更動就再撈一次資料
  useEffect(() => {
    activityData()
  }, [pageNum])

  //頁數更動的function
  function gotoPage(value) {
    setPageNum(value)
    console.log('click', pageNum)
  }

  //儲存頁數的陣列
  const arrPage = []

  //for迴圈跑頁數放到陣列中
  for (let i = 1; i <= totalPages; i++) {
    arrPage.push(i)
  }

  //用map將頁數帶入標籤中並傳給變數page
  let page = arrPage.map((value, inx) => (
    <div key={inx}>
      <Link onClick={() => gotoPage(value)} to={`/activity/${value}`}>
        <li>{value}</li>
      </Link>
    </div>
  ))

  return (
    <>
      {/* 輪播牆 */}
      <ActivityCarousel />
      {/* 搜尋框 */}
      <div className="m-5">
        <ActivitySearchbar />
      </div>
      {/* 列表 */}
      <Container className="d-flex flex-wrap justify-content-between">
        {aData.map((value, index) => {
          return <ActivityListCard activity={value} key={index} />
        })}
      </Container>
      {/* 頁數 */}
      <Container>
        <div className="pagination">
          <ul className="d-flex">
            <li>
              <AiOutlineCaretLeft />
            </li>
            {page}
            <li>
              <AiOutlineCaretRight />
            </li>
          </ul>
        </div>
      </Container>
      {/* 新增活動 */}
      <div className="py-2 text-right m-3 aAddActivity">
        <Link to="/activityAddNew">
          <AiFillPlusCircle />
          <AiOutlinePlusCircle />
        </Link>
      </div>
    </>
  )
}

export default Activity
