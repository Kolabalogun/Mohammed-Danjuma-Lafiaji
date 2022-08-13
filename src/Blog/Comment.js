import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../Utils/Firebase";

const Comment = () => {
  const { id } = useParams();

  const commentTime = new Date().toDateString();
  const dateId = new Date().getTime();
  // console.log(commentTime);

  const [form, setform] = useState("");
  const [comment, commentF] = useState({
    name: "",
    commentTxt: "",
    email: "",
    website: "",
    commentTime: commentTime,
    dateId: dateId,
  });

  const { name, commentTxt, email, website } = comment;

  const handleChange = (e) => {
    commentF((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // for update Blog

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setform({ ...snapshot.data() });
    }
  };

  //hhdhd
  const updateComment = async (e) => {
    e.preventDefault();

    if (name && commentTxt) {
      // if we adding new blog

      try {
        await updateDoc(doc(db, "blogs", id), {
          ...form,
          comment: arrayUnion(comment),
          // dateId: dateId,
        });
        toast.success("Comment uploaded");
      } catch (err) {
        console.log(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
    window.location.reload();
  };

  //   receiving comments from Firebase

  const [storedComments, storedCommentsF] = useState([
    { name: "", commentTxt: "" },
  ]);

  useEffect(() => {
    id && getBlogDetails();
  }, [id]);

  const getBlogDetails = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    storedCommentsF(blogDetail.data().comment);
  };

  const points = storedComments;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  function GetComments() {
    if (points.length > 0) {
      const hh = points.map((com, index) => {
        return (
          <div key={index} className="eachComment">
            <div className="topp">
              <div className="icon">
                <img src="/blog/c.jpg" alt="" />
              </div>
              <div className="name">
                <h4>{com.name}</h4>
                <span>{com.commentTime}</span>
              </div>
            </div>

            <div className="commentTxt">
              <p>{com.commentTxt}</p>
            </div>
          </div>
        );
      });

      return hh;
    }
  }

  return (
    <div className="commentSection">
      <div className="comment">
        <h1>{points.length} Comments</h1>
        <div className="commentsSection">{points && <GetComments />}</div>
      </div>

      <div className="commentForm">
        <h4>Leave a Reply</h4>
        <p>
          Your email address will not be published. Required fields are marked *{" "}
        </p>
        <form>
          <div className="commentFlex">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="Your name...*"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Your Email*"
              style={{ marginLeft: 10 }}
            />
          </div>
          <input
            type="text"
            name="website"
            onChange={handleChange}
            value={website}
            placeholder="Your Website"
          />

          <textarea
            rows="4"
            name="commentTxt"
            onChange={handleChange}
            value={commentTxt}
            placeholder="Enter your comments here*"
          />
          <button onClick={updateComment}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
