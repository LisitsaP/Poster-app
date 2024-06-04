import React from "react";
import cls from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post(props) {
  return (
    <li className={cls.post}>
      <Link to={props.id}>
        <p className={cls.author}>{props.author}</p>
        <p className={cls.text}>{props.body}</p>
      </Link>
    </li>
  );
}
