import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://img5.goodfon.ru/wallpaper/big/0/9b/gora-dom-priroda-2.jpg" />
      </div>
      <div className={classes.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
