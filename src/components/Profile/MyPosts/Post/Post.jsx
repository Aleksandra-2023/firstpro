import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://as2.ftcdn.net/v2/jpg/05/63/71/55/1000_F_563715592_UImRuYp5B9YkNCsH5bcMDYigo0nTovkX.jpg" />
      {props.message}
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
