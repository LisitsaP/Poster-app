// import { useState } from "react";
// import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import Posts from "../components/Posts";

function PostList() {
  // const [modalOpen, setModalOpen] = useState(false);

  // function modalCloseHandler() {
  //   setModalOpen(false);
  // }
  // function modalOpenHandler() {
  //   setModalOpen(true);
  // }
  return (
    <>
      {/* <MainHeader onCreatePost={modalOpenHandler} /> */}
      <Outlet />
      <main>
        <Posts
        // isPosting={modalOpen} modalCloseHandler={modalCloseHandler}
        />
      </main>
    </>
  );
}

export default PostList;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
