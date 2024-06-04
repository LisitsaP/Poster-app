import { Outlet } from "react-router-dom";
import Posts from "../components/Posts";

function PostList() {
  return (
    <>
      <Outlet />
      <main>
        <Posts />
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
