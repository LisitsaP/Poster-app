import React, { useState, useEffect } from "react";
import Post from "./Post";
import cls from "./Posts.module.css";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

export default function Posts({ isPosting, modalCloseHandler }) {
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const posts = useLoaderData();

  // useEffect(() => {
  //   async function fetchPost() {
  //     setLoading(true);
  //     const res = await fetch("http://localhost:8080/posts");
  //     const resData = await res.json();
  //     setPosts(resData.posts);
  //     setLoading(false);
  //   }
  //   fetchPost();
  // }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={modalCloseHandler}>
          <NewPost onCancel={modalCloseHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {
        // !loading &&
        posts.length > 0 && (
          <ul className={cls.posts}>
            {posts.map((post) => (
              <Post author={post.author} body={post.body} key={post.id++} />
            ))}
          </ul>
        )
      }
      {
        // !loading &&
        posts.length == 0 && (
          <div style={{ textAlign: "center", color: "white" }}>
            <h2>There are no posts yet.</h2>
            <p>Start adding some!</p>
          </div>
        )
      }
      {/* {loading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading...</h2>
        </div>
      )} */}
    </>
  );
}
