import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";

import AnimatedPage from "../Utils/AnimatedPage";
import { db } from "../Utils/Firebase";
import Comment from "./Comment";
import Sidebar from "./Sidebar";
import Line from "../Components/Line";

const Details = () => {
  const { id } = useParams();
  const [blog, blogF] = useState(null);
  const [Allblog, AllblogF] = useState(null);

  const [loader, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    id && getBlogDetails();
  }, [id]);

  const getBlogDetails = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    blogF(blogDetail.data());
    setloader(false);
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <AnimatedPage>
          <div id="home">
            <TopBar
              name={blog?.title}
              link="/bulletin"
              backname="Bulletin"
              banklink="/bulletin"
            />
            <div className="detailsContainer" id="blog">
              <div className="detailCon">
                <div className="detail">
                  <div className="detailImg">
                    <img src={blog?.imgUrl} alt="" />
                  </div>

                  <div className="detailHeader">
                    <h1>{blog?.title}</h1>
                    <p>
                      {blog?.author}
                      {" - "}
                      {blog?.timestamp.toDate().toDateString()}
                    </p>
                  </div>

                  <div className="detailPiece">
                    <p>{blog?.description}</p>
                  </div>
                  <Line />
                </div>
                <Comment />
              </div>
              <Sidebar blog={blog} />
            </div>

            <Line />

            {/* <Contact /> */}
            <Footer />
          </div>
        </AnimatedPage>
      )}
    </>
  );
};

export default Details;
