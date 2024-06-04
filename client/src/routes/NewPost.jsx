import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onAddPost }) {
  const [eventBody, setEventBody] = useState("");

  function bodyChangeHandler(event) {
    setEventBody(event.target.value);
  }
  const [eventAuthor, setEventAuthor] = useState("");

  function authorChangeHandler(event) {
    setEventAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: eventBody,
      author: eventAuthor,
      id: 0,
    };
    onAddPost(postData);
    console.log(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <Link to="/">Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
