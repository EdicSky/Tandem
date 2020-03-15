import React from "react";

function McollectgameDetail() {
  return (
    <>
      <div className="collectcarddetailWrapper">
        <div className="collectcarddetailLeft">
          <div className="collectcarddetailImg"></div>
        </div>
        <div className="collectcarddetailRight">
          <a className="collectcarddetailCbtn" type="button" href="#"></a>
          <h4>血源詛咒</h4>
          <p>購買日期 2020/01/04</p>
          <p>
            位於遙遠東方，人煙罕至的山區中有一古都「雅南（Yharnam）」，眾所皆知是個被詛咒的城市，自古流傳著「怪獸瘟疫」的奇特地方性疾病。如同病症之名，罹患此病症患者如同病名般將會成為喪失心智的野獸。然而，宛如被詛咒般的古城中，同時也相傳有可以醫治病根的醫療技術，多數罹患病症的患者長途跋涉至「雅南」，尋求解救的方法，而主角，也是那其中一人。
          </p>
          <a type="button" className="M-collectcarddetailStart" href="#">
            開始遊玩
          </a>
        </div>
      </div>
    </>
  );
}

export default McollectgameDetail;
