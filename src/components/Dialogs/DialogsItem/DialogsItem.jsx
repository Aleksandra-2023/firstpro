import React from "react";
import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.d + " " + classes.active}>
      <NavLink to={"/Dialogs" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
