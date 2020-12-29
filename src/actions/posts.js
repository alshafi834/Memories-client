import * as api from "../api/index.js";

const postUrl = "http://localhost:5000/posts";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("hahaha", data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.createPost(post);
    //const { data } = await axios.post(postUrl, post);
    console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
