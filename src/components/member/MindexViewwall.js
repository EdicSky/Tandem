import React from 'react'

function MindexViewwall() {
  return (
    <>
      <div className="M-gameviewWall">
        {/* 圖片牆二分之一始 */}
        <div className="M-viewwallPart">
          {/* 圖片牆四分之一 始*/}
          <div className="M-vwpuzzleWrapper">
            <div className="M-vwbigPuzzle" />
            <div className="M-vwsmlPuzzleWrapper">
              <div className="M-vwsmlPuzzleLeft" />
              <div className="M-vwsmlPuzzleRight" />
            </div>
          </div>
          {/* 圖片牆四分之一 終*/}
          {/* 圖片牆四分之一 始*/}
          <div className="M-vwpuzzleWrapper">
            <div className="M-vwsmlPuzzleWrapper">
              <div className="M-vwsmlPuzzleLeft" />
              <div className="M-vwsmlPuzzleRight" />
            </div>
            <div className="M-vwbigPuzzle" />
          </div>
          {/* 圖片牆四分之一 終*/}
        </div>
        {/* -----------------第二面-------------------- */}
        {/* 圖片牆二分之一始 */}
        <div className="M-viewwallPart">
          {/* 圖片牆四分之一 始*/}
          <div className="M-vwpuzzleWrapper">
            <div className="M-vwbigPuzzle" />
            <div className="M-vwsmlPuzzleWrapper">
              <div className="M-vwsmlPuzzleLeft" />
              <div className="M-vwsmlPuzzleRight" />
            </div>
          </div>
          {/* 圖片牆四分之一 終*/}
          {/* 圖片牆四分之一 始*/}
          <div className="M-vwpuzzleWrapper">
            <div className="M-vwsmlPuzzleWrapper">
              <div className="M-vwsmlPuzzleLeft" />
              <div className="M-vwsmlPuzzleRight" />
            </div>
            <div className="M-vwbigPuzzle" />
          </div>
          {/* 圖片牆四分之一 終*/}
        </div>
      </div>
    </>
  )
}

export default MindexViewwall
