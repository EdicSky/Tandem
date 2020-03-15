import React from "react";

function Maddfriendcard() {
  return (
    <>
      <div className="M-addfriendCardWrapper">
        <div className="M-addfriendcardCricle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306 209">
            <defs></defs>
            <title></title>
            <path
              className="cls-1"
              d="M125.55,319.48v40a64,64,0,1,1,0,128v40h302v-208Z"
              transform="translate(-125.55 -319.48)"
            />
          </svg>
          <div className="M-addfriendBricktop"></div>
          <div className="M-addfriendBrickdwn"></div>
          <div className=" M-addfriendcardcbtn"></div>

          {/* <!-- 加好友訊息描述 --> */}
          <div className="M-addfriendDes">
            <div className="M-addfrienddesLeft">
              <h5>Kotake</h5>
              <p>這是測試這是測試這是測試這是測試這是測試這是測試這是測試</p>
              <a href="">加入好友</a>
              <h6>來自國度</h6>
              <h6>Taiwan</h6>
            </div>
            <div className="M-addfrienddesRight"></div>
          </div>
        </div>
        <div className="M-addfriendPhoto"></div>
      </div>
    </>
  );
}

export default Maddfriendcard;
