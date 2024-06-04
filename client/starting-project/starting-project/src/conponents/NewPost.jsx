import React from "react";

export default function NewPost({ onTextChange, onAddPost, valuePost }) {
  function submitHandler(event) {
    event.preventDefault();
    const postsData = {
      text: valuePost,
    };
    onAddPost(postsData);
    console.log(postsData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" label="header" />
        <input type="text" label="text" required onChange={onTextChange} />
        <button>submit</button>
      </form>
    </div>
  );
}
