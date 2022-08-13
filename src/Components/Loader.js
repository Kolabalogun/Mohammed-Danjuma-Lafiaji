import React from "react";

const Loader = ({ notification }) => {
  return (
    <div className="loaderCon">
      <div className="loader"></div>

      {notification && (
        <>
          <p style={{ textAlign: "center" }}>{notification}</p>
          <p style={{ textAlign: "center" }}>
            Refresh the page once you're connected to the internet!!
          </p>
        </>
      )}
    </div>
  );
};

export default Loader;
