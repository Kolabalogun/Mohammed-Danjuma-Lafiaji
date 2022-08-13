import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Function/Context";
import Sidebar from "./Sidebar";

const Content = () => {
  const { blogs, handleDelete, user } = useGlobalContext();

  const userId = user?.uid;
  const points = blogs;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  return (
    <div className="blogContentDiv" id="blog">
      <div className="blogContent">
        {points?.map((blog) => (
          <div className="news" key={blog.dateId}>
            <Link to={`/detail/${blog.id}`}>
              <div className={`newsImg ${blog.category}`}>
                <img src={blog.imgUrl} alt="" />
              </div>
            </Link>
            <div className="bottom">
              <h3 style={{ border: "none" }} className={`${blog.category}`}>
                {blog.title}
              </h3>

              <span>
                {blog.author} - {blog.timestamp.toDate().toDateString()}
              </span>
              <p>{`${blog.description.substring(0, 100)}...`}</p>
            </div>
            {userId && blog.userId === user.uid && (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="bottom edits"
              >
                <Link to={`/updateBulletin/${blog.id}`}>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      padding: "5px 10px",
                      backgroundColor: "blue",
                      color: "white",
                    }}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(blog.id)}
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "5px 10px",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default Content;

// import React from "react";

// const Content = () => {
//   return (
//     <div className="blogContentDiv">
//       <div className="blogContent">
//         <div className="news">
//           <div className="newsImg">
//             <img src="news/a.jpg" alt="newsImage" />
//           </div>
//           <div className="bottom">
//             <h2 className="title">
//               Hon. Mohammed Danjuma bags Kwara North Senatorial Candidate
//             </h2>
//             <span>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
//               eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Tenetur, eius.
//             </span>
//             <span>
//               <span>
//                 {/* {blog.author} - {blog.timestamp.toDate().toDateString()} */}
//               </span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Content;

// {
//   /* <div className="recentPosts">
//   <h3>Recent Posts</h3>

//   <div className="posts">
//     <div className="post">
//       <img src="news/a.jpg" className="postImg" alt="" />
//       <div className="talks">
//         <p>I Belive I Can Fuck In Flyyy</p>
//         <p>Jan 1 2022</p>
//       </div>
//     </div>
//   </div>
// </div>; */
// }
