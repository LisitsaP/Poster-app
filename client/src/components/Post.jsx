import React from "react";
import cls from "./Post.module.css";

export default function Post(props) {
  return (
    <li className={cls.post}>
      <p className={cls.author}>{props.author}</p>
      <p className={cls.text}>{props.body}</p>
    </li>
  );
}
