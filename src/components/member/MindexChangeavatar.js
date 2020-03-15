import React from "react";

function MindexChangeavatar() {
  return (
    <>
      <div className="M-dollcardWrapper">
        <div className="M-dollcancelBtn" />
        {/* 主要頭像 canvas*/}
        <div className="M-dollcardMajor">
          <canvas width={230} height={230} />
        </div>
        <div className="M-dollhControlgroup">
          {/* 選擇控制表按鈕 */}
          <div className="M-dollhSelect" id="left" value={30} />
          <h5>頭部選擇</h5>
          <div className="M-dollhSelect" />
        </div>
        {/* 頭部選擇表最外框 */}
        <div className="M-dollhimgOuter">
          {/* 頭部圖片乘載器 */}
          <ul className="M-dollhimgList">
            <li>
              <img src="./images/img1.png" alt />
            </li>
            <li>
              <img src="./images/img2.jpg" alt />
            </li>
            <li>
              <img src alt />
            </li>
            <li>
              <img src alt />
            </li>
          </ul>
        </div>
        {/* 身體選擇器 */}
        <div className="M-dollhControlgroup">
          {/* 選擇控制表按鈕 */}
          <div className="M-dollhSelect" test={10} />
          <h5>下半選擇</h5>
          <div className="M-dollhSelect" />
        </div>
        {/* 下半選擇表最外框 */}
        <div className="M-dollhimgOuter">
          {/* 下半圖片乘載器 */}
          <ul className="M-dollhimgList">
            <li>
              <img src="./images/img1.png" alt />
            </li>
            <li>
              <img src="./images/img2.jpg" alt />
            </li>
            <li>
              <img src alt />
            </li>
            <li>
              <img src alt />
            </li>
          </ul>
        </div>
        <a type="button" className="M-dollconfrimBtn" href="#">
          確認修改
        </a>
      </div>
      ;
    </>
  );
}

export default MindexChangeavatar;
