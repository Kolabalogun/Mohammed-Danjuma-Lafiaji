import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Function/Context";
import { db } from "../Utils/Firebase";

const Sidebar = () => {
  const { blogs } = useGlobalContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = blogs;
  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  return (
    <div className="SearchSection">
      <div className="recentPosts">
        <h3>Recent Posts</h3>

        <div className="posts">
          {points?.map((blog, index) => (
            <Link className="post" key={index} to={`/detail/${blog.id}`}>
              <div className="postImg">
                <img src={blog.imgUrl} alt="" className="" />
              </div>

              <div className="talks">
                <p style={{ border: "none" }} className={`${blog.category}`}>
                  {blog.title}
                </p>
                <p>{blog.timestamp.toDate().toDateString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
