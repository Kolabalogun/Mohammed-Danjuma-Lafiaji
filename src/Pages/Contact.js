import React, { useState } from "react";
import { useEffect } from "react";

import TopBar from "../Components/TopBar";
import { useGlobalContext } from "../Function/Context";
import Footer from "../Components/Footer";
import AnimatedPage from "../Utils/AnimatedPage";

const Contact = () => {
  const [form, setform] = useState("");
  const [comment, commentF] = useState({
    name: "",
    commentTxt: "",
    email: "",
    website: "",
  });

  const { name, commentTxt, email, website } = comment;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function handleChange(params) {}
  return (
    <AnimatedPage>
      <TopBar name="Contact" link="/contact" id="home" />
      <div className="contact" id="blog">
        <div className="leftcontact">
          <div className="items">
            <div className="imgg">
              <img src="svg/g.svg" alt="" />
            </div>
            <div className="mm">
              <h4>Location</h4>
              <p>Nagenu Compound, Lafiagi, Kwara State.</p>
            </div>
          </div>
          <div className="items">
            <div className="imgg">
              <img src="svg/e.svg" alt="" />
            </div>
            <div className="mm">
              <h4>Email</h4>
              <p>danjumagombe@gmail.com</p>
            </div>
          </div>
          <div className="items">
            <div className="imgg">
              <img src="svg/p.svg" alt="" />
            </div>
            <div className="mm">
              <h4>Call</h4>
              <p>+2348132667126</p>
            </div>
          </div>
        </div>

        <div className="rightcontact">
          <div className="commentForm contactForm">
            <form>
              <div className="commentFlex">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Your Email"
                  style={{ marginLeft: 10 }}
                />
              </div>
              <input
                type="text"
                name="website"
                onChange={handleChange}
                value={website}
                placeholder="Subject"
              />

              <textarea
                rows="4"
                name="commentTxt"
                onChange={handleChange}
                value={commentTxt}
                placeholder="Message"
              />

              <button className="contactSubmit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />\
    </AnimatedPage>
  );
};

export default Contact;
