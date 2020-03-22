import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
// import { useSelector, useDispatch } from 'react-redux'
// import { activityLike } from '../../actions'
import { AiOutlineSearch } from 'react-icons/ai'

function ActivitySearchbar(props) {
  // const dispatch = useDispatch()
  // const aLike = useSelector(state => state.activityLike)
  return (
    <>
      <Row className="text-center align-items-center">
        <Col md={{ span: 1, offset: 2 }} className="text-right">
          <h3>活動列表</h3>
        </Col>
        <Col md={{ span: 7 }} className="text-right">
          <Link className="aCategory">輕鬆聚會</Link>
          <Link className="aCategory">專題講座</Link>
          <Link className="aCategory">技能競賽</Link>
          <Link className="aCategory">運動休閒</Link>
          <Link className="aCategory">地圖探索</Link>
          <Link className="aCategory">活動管理</Link>
        </Col>
        <Col className="py-2 position-relative text-left">
          <input className="aSearchbar text-center" type="text" />
          <div className="position-absolute aSearchIcon">
            <AiOutlineSearch />
          </div>
        </Col>
      </Row>
      {/* <p>{aLike}</p> */}
      {/* <button onClick={dispatch(activityLike())}>test</button> */}
      {/* </Container> */}
    </>
  )
}

export default ActivitySearchbar
