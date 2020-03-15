import React from 'react'
//引入會員中心CSS樣式
import '../../css/Mb.css'
//會員中心左側介面
import MindexProfile from '../../components/member/MindexProfile'
//會員中心右側介面
//layer1
import MindexViewwall from '../../components/member/MindexViewwall'

const test = 1

function Mbcenterindex() {
  return (
    <>
      <div className="M-indexWrapper">
        <div className="M-indexLeftContainer">
          <MindexProfile />
        </div>
        <div className="M-indexRightContainer">
          <div
            className={`M-indexRightlayer1 + ${
              test === 2 || test === 3 ? 'layerDisappear' : ''
            }`}
          >
            <MindexViewwall />
          </div>
          <div
            className={`M-indexRightlayer2 + ${
              test === 1 || test === 3 ? 'layerDisappear' : ''
            }`}
          ></div>
          <div
            className={`M-indexRightlayer3 + ${
              test === 1 || test === 2 ? 'layerDisappear' : ''
            }`}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Mbcenterindex
