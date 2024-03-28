import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

import Tabs from "./Tabs";

const FullPost = () => {
  const fullPostData = useLoaderData();
  console.log(fullPostData);

  if (fullPostData.status === 404) {
    return (
      <div className="flex items-center justify-center font-bold text-3xl md:text-4xl lg:text-5xl text-red-500">
        Oops!! Sorry this post is no longer available!
      </div>
    );
  } else {
    return (
      <div className="max-w-[1000px] flex-col items-center justify-center px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {fullPostData.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
              <div className="flex items-center md:space-x-2">
                <p className="text-sm">
                  {fullPostData.reading_time_minutes} min read •{" "}
                  {new Date(fullPostData.published_at).toLocaleDateString()}
                </p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {fullPostData.comments_count} commnents •
                {fullPostData.public_reactions_count} views
              </p>
            </div>
          </div>
          <div>
            <Tabs stateId={fullPostData.id} users={fullPostData.users}></Tabs>
          </div>
        </article>
        <Outlet></Outlet>
      </div>
    );
  }
};

export default FullPost;
