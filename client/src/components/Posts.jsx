import React, { useState, useEffect } from "react";
import Post from "./Post";
import cls from "./Posts.module.css";

import { useLoaderData } from "react-router-dom";

export default function Posts({}) {
  const posts = useLoaderData();

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
      {posts.length > 0 && (
        <ul className={cls.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.id++} />
          ))}
        </ul>
      )}
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
