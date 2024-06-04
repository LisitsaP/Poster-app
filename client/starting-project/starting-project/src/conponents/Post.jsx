import React from "react";

export default function Post(props) {
  console.log(props.text);
  return (
    <div>
      <div>Header</div>
      <div>{props.text}</div>
    </div>
  );
}
