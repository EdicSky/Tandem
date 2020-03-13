import React, { useState, useEffect } from 'react'
import { withRouter, NavLink, Switch, Route } from 'react-router-dom'

function Config(props) {
  const table = (
    <>
      <div className="d-flex justify-content-center">
        <table class="table table-striped col-8">
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">作業系統: </th>
              <td>Windows 7/10 (latest service pack)</td>
            </tr>
            <tr>
              <th scope="row">處理器:</th>
              <td> AMD Ryzen™ 5 2600 (Intel i7-4770)</td>
            </tr>
            <tr>
              <th scope="row">記憶體:</th>
              <td>16 GB 記憶體</td>
            </tr>
            <tr>
              <th scope="row">顯示卡:</th>
              <td>AMD Radeon™ RX 590 or NVIDIA GeForce GTX 1060 6GB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
  return <>{table}</>
}

export default withRouter(Config)
