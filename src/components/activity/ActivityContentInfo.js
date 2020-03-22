import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiOutlineBook,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineLink,
} from 'react-icons/ai'

function ActivityContentInfo(props) {
  const infoData = props.aData
  // console.log('Info', infoData)
  return (
    <>
      <Container className="text-center aContent">
        <Col>
          <Row className="m-2">
            <Col md={2} className="text-right">
              主辦者
            </Col>
            <Col md={3} className="text-left">
              {infoData.mbName}
            </Col>
            <Col md={2} className="text-right">
              活動日期
            </Col>
            <Col md={4} className="text-left">
              {infoData.aDate}
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={2} className="text-right">
              人數上限
            </Col>
            <Col md={3} className="text-left">
              {infoData.aLimit}
            </Col>
            <Col md={2} className="text-right">
              預算
            </Col>
            <Col md={4} className="text-left">
              {infoData.aBudget}
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={2} className="text-right">
              活動需時
            </Col>
            <Col md={3} className="text-left">
              {infoData.aCostTime}
            </Col>
            <Col md={2} className="text-right">
              報名期間
            </Col>
            <Col md={4} className="text-left">
              {infoData.aBookingTime}
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={2} className="text-right">
              活動內容
            </Col>
            <Col md={9} className="text-left">
              {infoData.aContent}
            </Col>
          </Row>
          <Row className="m-2">
            <Col className="text-right">地址</Col>
            <Col md={10} className="text-left">
              {infoData.aLocation}
            </Col>
          </Row>
          <Row className="m-2">
            <Col md={{ span: 8, offset: 2 }} className="text-left aMap">
              MAP
            </Col>
          </Row>
          <Row className="aCreatTime">
            <Col md={9} className="text-right">
              創建時間
            </Col>
            <Col className="text-left">{infoData.created_at}</Col>
          </Row>
        </Col>
      </Container>
      {/* Icon區，判斷報名結束時間過後自動隱藏報名鈕 */}
      <Container className="">
        <Col md={{ span: 4, offset: 2 }}>
          <Row className="aIcon d-flex justify-content-between">
            <Link>
              <Col className="aBook">
                <AiOutlineBook />
              </Col>
            </Link>
            <Link>
              <Col className="aFallow">
                <AiOutlineHeart />
              </Col>
            </Link>
            <Link>
              <Col className="aLike">
                <AiOutlineStar />
              </Col>
            </Link>
            <Link>
              <Col className="aLink">
                <AiOutlineLink />
              </Col>
            </Link>
          </Row>
        </Col>
      </Container>
    </>
  )
}

export default ActivityContentInfo
