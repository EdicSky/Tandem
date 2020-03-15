import React, { useState, useEffect } from "react";

function MindexProfile() {
  const [azenpdpos, setAzenpdPos] = useState("0rem");
  let startPos = 0;
  let walkingDis = 23.2;
  let endPos = -100;
  let finalPos = "";

  // useEffect(() => {
  //   setInterval(() => {
  //     startPos -= walkingDis;
  //     if (startPos < endPos) {
  //       startPos = 0;
  //     }
  //     finalPos = startPos + "rem";
  //     console.log(finalPos);
  //     setAzenpdPos(finalPos);
  //     console.log(azenpdpos);
  //   }, 5000);
  // }, []);

  return (
    <>
      <div>
        <div className="fakenav" />
        <div className="M-indexLeft">
          <div className="M-avatarWrapper">
            <section className="M-avatarTop">
              <div className="M-avatarPhoto">
                <img src="" />
              </div>
              <div className="M-avatarDes">
                <h3>Kotake</h3>
                <h6>只會爆裂魔法的...</h6>
              </div>
            </section>
            {/* 修改個人資料btn */}
            <a type="button" className="M-mbDeschagebtn" href="#">
              修改個人資料
            </a>
            {/* 調整大頭像btn */}
            <div className="M-avatarChange">
              {/* 修改個人資料主表 */}
              <section className="M-avatardwn">
                <form className="M-mbdesForm">
                  <div className="M-mbdesFormtop">
                    <div className="M-mbdesformLab">
                      <h6>玩家暱稱</h6>
                      <h6>真實姓名</h6>
                      <h6>來自國度</h6>
                      <h6>性別</h6>
                      <h6>生日</h6>
                      <h6>電子郵件</h6>
                      <h6>綁定手機</h6>
                      <h6>信用卡</h6>
                      <h6>發票載具</h6>
                    </div>
                    <div className="M-mbdesformIpt">
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />
                    </div>
                  </div>
                  <div className="M-mbdesFormdwn">
                    <h6>個人描述</h6>
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={5}
                      style={{ maxWidth: 230, maxHeight: 130, resize: "none" }}
                      defaultValue={""}
                    />
                  </div>
                  <input
                    type="submit"
                    className="M-mbdesSub"
                    defaultValue="確認修改"
                  />
                </form>
              </section>
            </div>
          </div>
          {/* 會員主頁左邊鈕 */}
          <div className="M-subbtnGroup">
            <a type="button" href="#">
              好友管理
            </a>
            <a type="button" href="#">
              遊戲倉庫
            </a>
            <a type="button" href="#">
              購買管理
            </a>
          </div>
          {/* 關注商品列表跑馬 */}
          <div className="M-LikeproductWrapper">
            <h3>關注商品</h3>
            {/* 關注商品顯示窗 */}
            <div className="M-azenproductListWindow">
              {/* 關注商品輸送帶 */}
              <div className="M-azenproductList" style={{ top: `{azenpdpos}` }}>
                {/* 商品本體 */}
                <div className="M-markpdWrapper">
                  <div className="M-markpdImg">
                    <img src="./images/markpdimg.jpg" alt="" />
                  </div>
                  <div className="M-markpdBody">
                    <h5>隻狼：暗影雙死</h5>
                    <span className="M-markpdSub">
                      {" "}
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                      </svg>
                    </span>
                    <span> 1345</span> | 售價 : <span>NT 1450</span>
                    <div className="M-markpdDes">
                      <p>
                        《隻狼：暗影雙死》是曾製作《黑暗靈魂》、《血源詛咒》的
                        FromSoftware團隊全新打造的原創動作遊戲，以日本戰國時代的虛構國家「葦名」為舞台，描述人稱「隻腕之狼」的獨臂忍者，憑藉著過人的武藝與犀利的義手，孤身一人踏上拯救主公、對抗魑魅魍魎之輩的不歸旅程。
                      </p>
                    </div>
                    <a className="M-markpdTrans clearfix" href="#">
                      <img src="./images/more.svg" alt="" />
                    </a>
                  </div>
                  {/* 還要處理遊戲名稱太長問題 */}
                  <h5 className="M-markpdOuttitle">Sekiro: Shadows Die </h5>
                </div>
                <div className="M-markpdWrapper">
                  <div className="M-markpdImg">
                    <img src="./images/markpdimg.jpg" alt="" />
                  </div>
                  <div className="M-markpdBody">
                    <h5>隻狼：暗影雙死</h5>
                    <span className="M-markpdSub">
                      {" "}
                      <svg className="svg-icon" viewBox="0 0 20 20">
                        <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                      </svg>
                    </span>
                    <span> 1345</span> | 售價 : <span>NT 1450</span>
                    <div className="M-markpdDes">
                      <p>
                        《隻狼：暗影雙死》是曾製作《黑暗靈魂》、《血源詛咒》的
                        FromSoftware團隊全新打造的原創動作遊戲，以日本戰國時代的虛構國家「葦名」為舞台，描述人稱「隻腕之狼」的獨臂忍者，憑藉著過人的武藝與犀利的義手，孤身一人踏上拯救主公、對抗魑魅魍魎之輩的不歸旅程。
                      </p>
                    </div>
                    <a className="M-markpdTrans clearfix" href="#">
                      <img src="./images/more.svg" alt="" />
                    </a>
                  </div>
                  {/* 還要處理遊戲名稱太長問題 */}
                  <h5 className="M-markpdOuttitle">Sekiro: Shadows Die </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MindexProfile;
