import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

export default function () {
  const [valuePostText, setValuePostText] = useState("");
  const [dataArr, setDataArr] = useState([]);

  function valueHandlerText(event) {
    setValuePostText(event.target.value);
  }

  function addInArrayData(postData) {
    setDataArr((oldArr) => [postData, ...oldArr]);
  }

  return (
    <>
      <NewPost
        onTextChange={valueHandlerText}
        onAddPost={addInArrayData}
        valuePost={valuePostText}
      />
      <ul>
        <Post valuePostText={valuePostText} />
        {dataArr.map((post) => (
          <Post text={post.text} />
        ))}
      </ul>
    </>
  );
}
