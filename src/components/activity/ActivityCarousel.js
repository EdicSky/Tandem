import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
// import $ from 'jquery'
import { AiTwotoneCrown } from 'react-icons/ai'

function AcitvityHomeCarousel() {
  return (
    <>
      {/* <div style={{ fontSize: '150px', color: 'gold' }}>
        <AiFillCrown />
      </div>
      <div style={{ fontSize: '150px', color: 'gold' }}>
        <AiOutlineCrown />
      </div>
      <div className="aCrown">
        <AiTwotoneCrown />
      </div> */}

      <div className="aKV d-flex justify-content-between position-relative">
        <Link
          className="aSideCarousel ascLeft position-relative bounce"
          to="/activitycontentpage"
        >
          <img
            src="/images/activity/IMG_6108.jpg"
            className="aImg"
            alt="hotactivity_sideKV"
          />
          <div className="aCrown ascLeft silver">
            <AiTwotoneCrown />
          </div>
          <div className="aSideCarouselInfo ascLeft position-absolute">
            <Card.Title className="m-0">Card Title</Card.Title>
          </div>
        </Link>
        <Link
          className="aSideCarousel ascRight position-relative bounce"
          to="/activitycontentpage"
        >
          <img
            src="/images/activity/smile.jpg"
            className="aImg"
            alt="hotactivity_sideKV"
          />
          <div className="aCrown ascRight copper">
            <AiTwotoneCrown />
          </div>
          <div className="aSideCarouselInfo ascRight position-absolute">
            <Card.Title className="m-0">Card Title</Card.Title>
          </div>
        </Link>
        <div className="aMainCarousel position-absolute bounce">
          <Link className="text-center" to="/activitycontentpage">
            <img
              src="/images/activity/coding.png"
              className="aImg"
              alt="hotactivity_MainKV"
            />
            <div className="aCrown ascLeft gold">
              <AiTwotoneCrown />
            </div>
            <div className="aMainCarouselInfo ascLeft position-absolute">
              <Card.Title className="m-0">Card Title</Card.Title>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default AcitvityHomeCarousel
