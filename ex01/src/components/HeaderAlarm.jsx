import React from "react";
import greenee from "../img/greenee.png";

// const style = {
//     display:flex
// }

const HeaderAlarm = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src={greenee}
            className={"greenee"}
            style={{ width: "70px", padding: "20px" }}
          />
        </div>
        {/* <div>여기에 실시간 알림?</div> */}
      </div>
    </div>
  );
};

export default HeaderAlarm;