import { useSelector } from "react-redux";

import Post from "./post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div>
      <h1>Sample Posts</h1>
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
