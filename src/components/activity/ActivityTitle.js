import React from 'react'

function Banner(props) {
  return (
    <>
      <div className="container py-2">
        <h2 className="py-2">{props.atitlename}</h2>
      </div>
    </>
  )
}

export default Banner
