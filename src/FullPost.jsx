import React from "react";
import { useLoaderData } from "react-router-dom";

const FullPost = () => {
  const fullPostData = useLoaderData();
  console.log(fullPostData);
  return <div>This is FullPost</div>;
};

export default FullPost;
