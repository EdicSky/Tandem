import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'
import '../../css/activity.css'
import logo from '../../logo.svg'


function Activity() {
  return (
    <>
      <div className="container">
        <h1 className="py-2">熱門活動</h1>
      </div>
      <div className="aKV d-flex justify-content-between position-relative">
        <NavLink className="aSideCarousel ascLeft text-center border" to="/activitycontentpage">
          <img src={logo} className="aImg" alt="logo" />
        </NavLink>
        <NavLink className="aSideCarousel ascRight text-center border" to="/activitycontentpage">
          <img src={logo} className="aImg" alt="logo" />
        </NavLink>
        <div className="alarger position-absolute">
          <NavLink className="aMainCarousel text-center border" to="/activitycontentpage">
            <img src={logo} className="aImg" alt="logo" />
          </NavLink>
        </div>
      </div>
      <div className="aSearchbar"></div>
      <div className="container"><h1 className="py-2">活動列表</h1></div>
      <Container>
        <ListGroup className="d-flex">
          <Row className="d-flex justify-content-between">
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </NavLink>
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </NavLink>
          </Row>
          <Row className="d-flex justify-content-between">
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
              </div>
            </NavLink>
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
              </div>
            </NavLink>
          </Row>
          <Row className="d-flex justify-content-between">
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </NavLink>
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </NavLink>
          </Row>
          <Row className="d-flex justify-content-between">
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
              </div>
            </NavLink>
            <NavLink className="py-1" to="/activitycontentpage">
              <div className="d-flex border">
                <div style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>content.</Card.Text>
                  </Card.Body>
                </div>
                <div style={{ width: '17rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/250x150" />
                </div>
              </div>
            </NavLink>
          </Row>
        </ListGroup>
      </Container>
    </>
  )
}

export default Activity