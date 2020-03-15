import React from "react";

function Mfriendlistcard() {
  return (
    <>
      <div class="M-friendcollectWrapper">
        {/* <!-- 朋友列表小卡 始--> */}
        <div class="M-friendcollectCard">
          {/* <!-- 小卡左側 --> */}
          <div class="M-friendcollectCardleft">
            <div class="M-friendcollectPhoto"></div>
            <a type="button" class="M-friendcollectClear" href="#">
              解除好友
            </a>
          </div>
          {/* <!-- 小卡右側 --> */}
          <div class="M-friendcollectCardright">
            <h5>KOTAKE</h5>
            <p>Hello45454646456464646464464</p>
            <div class="M-friendcollectDot"></div>
            <span>on</span>
          </div>
        </div>
        {/* <!-- 朋友列表小卡 終--> */}
      </div>
    </>
  );
}

export default Mfriendlistcard;
