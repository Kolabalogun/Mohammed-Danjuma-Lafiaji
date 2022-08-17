import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../Function/Context";
import { db } from "../Utils/Firebase";
import Reply from "./Reply";

const Comment = () => {
  const { id } = useParams();
  const { user, commentUser, signInWithGoogle, signUserOut, handleLogout } =
    useGlobalContext();

  // #============================================#
  const [form, setform] = useState("");

  // for auto get Blog from Firebase

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

  // #===========================================#

  // Comments  Info

  const commentTime = new Date().toDateString();
  const dateId = new Date().getTime();

  const [comment, commentF] = useState({
    name: user?.displayName,
    commentTxt: "",
    email: user?.email,
    photoID: user?.photoURL,
    commentTime: commentTime,
    dateId: dateId,
    reply: [],
  });

  const { name, email, photoID, commentTxt, reply } = comment;

  const handleChange = (e) => {
    commentF((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // #=============================================#

  // Send Comment to Firebase

  const updateComment = async (e) => {
    e.preventDefault();

    if (commentTxt) {
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

  // #=============================================#

  //   To auto Receive comments from Firebase

  const [storedComments, storedCommentsF] = useState([
    {
      name: "",
      commentTxt: "",
      replyTxt: "",
      photoID: "",
      dateId: "",
      reply: [],
    },
  ]);

  useEffect(() => {
    id && getBlogDetails();
  }, [id]);

  const getBlogDetails = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    storedCommentsF(blogDetail.data().comment);
    console.log(blogDetail.data().comment);
  };

  const points = storedComments;

  points.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  // #=============================================#

  const [openReply, openReplyF] = useState(false);
  const [commentId, commentIdF] = useState("");

  // Toggle Open Reply Form
  function handleOpenReply(id) {
    openReplyF(!openReply);

    commentIdF(id);
  }

  // #=============================================#

  // showcase each comment

  function GetComments() {
    if (points.length > 0) {
      const hh = points.map((com, index) => {
        return (
          <div key={index}>
            <div>
              <div className="eachComment">
                <div className="topp">
                  <div className="icon">
                    <img src={com.photoID} alt="" />
                  </div>
                  <div className="name">
                    <div className="replyandName">
                      <h4>{com.name}</h4>
                      <div
                        className="reply"
                        onClick={() => handleOpenReply(com.dateId)}
                      >
                        <img src="svg/rr.svg" alt="" />
                        <p>Reply</p>
                      </div>
                    </div>

                    <span>{com.commentTime}</span>
                  </div>
                </div>

                <div className="commentTxt">
                  <p>{com.commentTxt}</p>
                </div>
              </div>
            </div>
            {/* Replies */}
            {/* Replies */}

            {com.reply.map((rep, index) => (
              <div key={index} style={{ marginLeft: 30 }}>
                <div className="eachComment">
                  <div className="topp">
                    <div className="icon">
                      <img src={rep.photoID} alt="" />
                    </div>
                    <div className="name">
                      <div className="replyandName">
                        <h4>{rep.name}</h4>
                      </div>

                      <span>{rep.commentTime}</span>
                    </div>
                  </div>

                  <div className="commentTxt">
                    <p>{rep.replyTxt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      });

      return hh;
    }
  }

  // #=============================================#
  // reply Info

  const [replyObj, replyObjF] = useState({
    name: user?.displayName,
    replyTxt: "",
    email: user?.email,
    photoID: user?.photoURL,
    commentTime: commentTime,
    dateId: dateId,
  });

  const { replyTxt } = replyObj;

  const handleReplyChange = (e) => {
    replyObjF((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // #=============================================#

  // Updating Comments with Replies
  const [updatedComments, updatedCommentsF] = useState("");

  // Function responsible for checking if the selected commet and adding reply to comments
  function RED() {
    let eachComment = storedComments.map((comm) => {
      if (comm.dateId === commentId) {
        return {
          ...comm,
          reply: [...comm.reply, replyObj],
        };
      }

      return comm;
    });
    updatedCommentsF(eachComment);
  }

  // Function responsible for sending replies and comments to Firestore

  const wIP = async (e) => {
    e.preventDefault();

    RED();

    if (updatedComments === "") {
    } else if (replyTxt) {
      try {
        await updateDoc(doc(db, "blogs", id), {
          ...form,
          comment: updatedComments,
        });
        toast.success("Reply uploaded");
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="commentSection">
      <div className="comment">
        <h1>{points.length} Comments</h1>
        <div className="commentsSection">{points && <GetComments />}</div>
      </div>
      {openReply && (
        <Reply
          handleChange={handleChange}
          name={name}
          email={email}
          handleReplyChange={handleReplyChange}
          replyObj={replyObj}
          wIP={wIP}
          commentUser={commentUser}
          signInWithGoogle={signInWithGoogle}
        />
      )}

      {!openReply && (
        <div className="commentForm">
          <h4>Leave a Comment</h4>
          <p>
            {commentUser
              ? " Your email address will not be published. Required fields are marked *"
              : "Sign In with your Google Account to leave a Comment "}
          </p>
          {commentUser ? (
            <form>
              <div className="commentFlex">
                <input
                  type="text"
                  name="name"
                  // onChange={handleChange}
                  readOnly={true}
                  value={comment.name}
                  placeholder="Your name...*"
                />
                <input
                  type="email"
                  name="email"
                  // onChange={handleChange}
                  readOnly={true}
                  value={comment.email}
                  placeholder="Your Email*"
                  className="secondInput"
                />
              </div>

              <textarea
                rows="4"
                name="commentTxt"
                onChange={handleChange}
                value={commentTxt}
                placeholder="Enter your comments here*"
              />

              <button onClick={updateComment}>Submit</button>
            </form>
          ) : (
            <div onClick={signInWithGoogle} className="commmetSignIn">
              <div className="google">
                <img src="svg/search.png" alt="" />
              </div>
              <p>Continue with Google</p>
            </div>
          )}

          {/* <button onClick={signUserOut}>LOgiuudf</button> */}
          {/* <button onClick={handleLogout}>handleLogout</button> */}
        </div>
      )}
    </div>
  );
};

export default Comment;
