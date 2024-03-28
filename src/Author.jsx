import React from "react";
import { useLoaderData } from "react-router-dom";

const Author = () => {
  const loadAllData = useLoaderData();
  const users = loadAllData.user;
  console.log(users);
  return <div>fjlasdjflsd</div>;
};

export default Author;
