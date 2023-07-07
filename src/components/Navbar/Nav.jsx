import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = (props) => {
  // let friendElement = props.friends.map((f) => (
  //   <Sidebar name={f.name} id={f.id} />
  // ));
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/Profile"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Dialogs"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/News"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Settings"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/Sidebar"
          style={({ isActive }) => ({ color: isActive ? "green" : "black" })}
        >
          <h2>Friends</h2>
          {/* <div className="friendItem">{friendElement}</div> */}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
