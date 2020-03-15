import React from 'react'
//引入會員中心CSS樣式
import '../../css/Mb.css'
//會員中心左側介面
import MindexProfile from '../../components/member/MindexProfile'
//會員中心右側介面
//layer1
import MindexViewwall from '../../components/member/MindexViewwall'
import MindexcomCard from '../../components/member/MindexcomCard'

//redux控制
// 引入store state
import { useSelector } from 'react-redux'

function Mbcenterindex() {
  // 控制顯示層
  const dispalyLayer = useSelector(state => state.MindexDisplaychange)
  return (
    <>
      <div className="M-indexWrapper">
        <div className="M-indexLeftContainer">
          <MindexProfile />
        </div>
        <div className="M-indexRightContainer">
          <div
            className={`M-indexRightlayer1 + ${
              dispalyLayer === 1 ? '' : 'layerDisappear'
            }`}
          >
            <MindexViewwall />
            <MindexcomCard />
          </div>
          <div
            className={`M-indexRightlayer2 + ${
              dispalyLayer === 2 ? '' : 'layerDisappear'
            }`}
          ></div>
          <div
            className={`M-indexRightlayer3 + ${
              dispalyLayer === 3 ? '' : 'layerDisappear'
            }`}
          ></div>
          <div
            className={`M-indexRightlayer4 + ${
              dispalyLayer === 4 ? '' : 'layerDisappear'
            }`}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Mbcenterindex
