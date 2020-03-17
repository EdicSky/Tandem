import React from 'react'
// 收藏遊戲細節頁
import McollectgameDetail from '../../components/member/McollectgameDetail'

function Mmygame() {
  return (
    <>
      {/* list最外層 */}
      <div className="M-mygameListWrapper">
        <McollectgameDetail />
        {/* 個別遊戲小卡 */}
        <div className="M-mygameListcard">
          <img src="/images/member/mygameSample.jpg" alt="" />
          <div
            className="M-mygameUplayer"
            onClick={() => {
              alert('ok')
            }}
          >
            <h5>血緣詛咒666666666666667777744</h5>
            <div className="M-mygameUnderline"></div>
          </div>
        </div>
        <div className="M-mygameListcard"></div>
        <div className="M-mygameListcard"></div>
        <div className="M-mygameListcard"></div>
        <div className="M-mygameListcard"></div>
      </div>
    </>
  )
}

export default Mmygame
