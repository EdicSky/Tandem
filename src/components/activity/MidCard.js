import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function LeftCard(props) {
  return (
    <>
      <Link
        className="position-absolute"
        to="/activitycontentpage"
        style={{
          right: props.data[0],
          maxHeight: props.data[1],
          maxWidth: props.data[2],
          zIndex: props.data[3],
          transition: props.data[4],
        }}
      >
        <img
          style={{
            filter: 'grayscale(' + props.data[5] + ')',
            transition: '0s',
          }}
          src="/images/activity/coding.png"
          className="aImg"
          alt="hotactivity_MainKV"
        />

        <div
          style={{ marginLeft: props.data[6], transition: '2s' }}
          className="aSideCarouselInfo position-absolute"
        >
          <Card.Title className="m-0">No.1</Card.Title>
        </div>
      </Link>
    </>
  )
}

export default LeftCard
