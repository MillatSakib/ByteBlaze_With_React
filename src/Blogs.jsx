import React from "react";
import Blog from "./Blog";
import { Link, useLoaderData } from "react-router-dom";

const Blogs = () => {
  const articleDate = useLoaderData();
  // console.log(articleDate);
  //  const [cover_image, created_at, description] = articleDate[0];
  // console.log(cover_image, created_at, description);
  return (
    <div>
      <section>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            to={`/blogs/${articleDate[1].id}`}
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12"
          >
            <img
              src={articleDate[1].social_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {articleDate[1].title}
              </h3>
              <span className="text-xs">
                {new Date(
                  articleDate[1].published_timestamp
                ).toLocaleDateString()}
              </span>
              <p>{articleDate[1].description}</p>
            </div>
          </Link>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6">
          {articleDate.map((singleArticle) => (
            <Blog key={singleArticle.id} singleArticle={singleArticle}></Blog>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
