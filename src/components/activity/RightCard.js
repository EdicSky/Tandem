import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function RightCard(props) {
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
          src="/images/activity/smile.jpg"
          className="aImg"
          alt="hotactivity_sideKV"
        />

        <div
          style={{ marginLeft: props.data[6], transition: '2s' }}
          className="aSideCarouselInfo position-absolute"
        >
          <Card.Title className="m-0">No.2</Card.Title>
        </div>
      </Link>
    </>
  )
}

export default RightCard
