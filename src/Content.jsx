import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Tags from "./Tags";
import parse from "html-react-parser";

const Content = () => {
  // const params = useParams();
  // console.log(params);
  const fullPostData = useLoaderData();
  const tags = fullPostData.tags;
  return (
    <div>
      <img src={fullPostData.cover_image}></img>
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
        {tags.map((tag, index) => (
          <Tags key={index} tag={tag}></Tags>
        ))}
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold">
          {parse(fullPostData.body_html)}
          <a
            href={fullPostData.url}
            target="_blank"
            className="text-red-500 underline font-bold mt-6"
          >
            Click Here
          </a>{" "}
          to read from directly author's post.
        </h4>
      </div>
    </div>
  );
};

export default Content;
