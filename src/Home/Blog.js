import React from "react";
import { useGlobalContext } from "../Function/Context";

import { Link } from "react-router-dom";

const Blog = () => {
  const { blogs } = useGlobalContext();

  const itemsToRender = blogs.slice(0, 4);

  const points = itemsToRender;
  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  return (
    <div className="recentblog" id="blog">
      <div className="recentBlogHeader">
        <h2>Recent Bulletin Posts</h2>
      </div>
      <div className="recentBlogRow">
        {points?.map((blog) => (
          <div className="recentBlogPost" key={blog.dateId}>
            <div className="recentBlogPostImg">
              <img src={blog.imgUrl} alt="" />
            </div>
            <div className="meta">
              <div className="postDate">
                {blog.timestamp.toDate().toDateString()}
              </div>
              <div className="postAuthor">/ {blog.author}</div>
            </div>
            <h3>{blog.title}</h3>
            <p>{`${blog.description.substring(0, 100)}...`}</p>
            <Link className="postLink" to={`/detail/${blog.id}`}>
              <span>Read More</span>
              <img src="svg/a.svg" alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
