import React from "react";

const Reply = ({
  name,
  commentUser,
  email,
  handleReplyChange,
  replyObj,
  wIP,
  signInWithGoogle,
}) => {
  return (
    <div className="commentForm">
      <h4>Leave a Reply</h4>
      <p>
        {!commentUser && "Sign In with your Google Account to leave a Reply "}
      </p>

      {commentUser ? (
        <form>
          <div className="commentFlex">
            <input
              type="text"
              name="name"
              readOnly={true}
              value={name}
              placeholder="Your name...*"
            />
            <input
              type="email"
              name="email"
              readOnly={true}
              value={email}
              placeholder="Your Email*"
              className="secondInput"
            />
          </div>

          <textarea
            rows="4"
            name="replyTxt"
            onChange={handleReplyChange}
            value={replyObj.replyTxt}
            placeholder="Enter your reply here*"
          />
          <button onClick={wIP}>Submit</button>
        </form>
      ) : (
        <div onClick={signInWithGoogle} className="commmetSignIn">
          <div className="google">
            <img src="svg/search.png" alt="" />
          </div>
          <p>Continue with Google</p>
        </div>
      )}
    </div>
  );
};

export default Reply;
