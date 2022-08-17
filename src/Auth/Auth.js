import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useGlobalContext } from "../Function/Context";
import { useNavigate, useParams } from "react-router-dom";

import { auth } from "../Utils/Firebase";
import AuthNav from "./AuthNav";
import TopBar from "../Components/TopBar";
import AuthTopBar from "./AuthTopBar";
import AnimatedPage from "../Utils/AnimatedPage";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";

const initialState = {
  firstName: "",
  lastName: "",

  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ user, handleLogout, pageType, pageTypeF }) => {
  const { loader, setloader, notification, notificationF, signInTypeF } =
    useGlobalContext();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [state, setstate] = useState(initialState);
  const [signUp, setsignUp] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = state;

  function handleChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!signUp) {
      if (email && password) {
        setloader(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            notificationF("");
            navigate("/");
            signInTypeF(false);
            setloader(false);
            return toast("You've successfully Signed In");
          })

          .catch((error) => {
            setloader(true);
            const errorCode = error.code;
            const errorMessage = error.message;
            notificationF(errorMessage);
            setloader(false);
          });
      } else {
        return toast.error("All fields must be filled");
      }
    } else {
      if (password !== confirmPassword) {
        return toast.error("Password don't match");
      }
      if (firstName && email && password) {
        setloader(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        navigate("/");
        setloader(false);
        return toast("You've successfully Signed Up");
      } else {
        return toast.error("All fields must be filled");
      }
    }
  };

  return (
    <AnimatedPage>
      {loader ? (
        <Loader notification={notification} />
      ) : (
        <>
          <AuthTopBar
            user={user}
            handleLogout={handleLogout}
            name="Authentication"
          />
          <div className="authBody">
            <div className="authform">
              <form onSubmit={handleAuth}>
                <div className="authTitle">
                  <h3>{!signUp ? "Sign In" : "Sign Up"}</h3>
                </div>

                {signUp && (
                  <>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={firstName}
                      required
                      minLength={4}
                      placeholder="FirstName"
                      name="firstName"
                    />
                    <input
                      type="text"
                      onChange={handleChange}
                      value={lastName}
                      minLength={4}
                      placeholder="LastName"
                      name="lastName"
                    />
                  </>
                )}

                <input
                  type="email"
                  onChange={handleChange}
                  value={email}
                  required
                  minLength={4}
                  placeholder="Email"
                  name="email"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  value={password}
                  required
                  minLength={4}
                  placeholder="Password"
                  name="password"
                />
                {signUp && (
                  <>
                    <input
                      type="password"
                      onChange={handleChange}
                      value={confirmPassword}
                      required
                      minLength={4}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                    />
                  </>
                )}

                <p style={{ color: "red", textAlign: "center" }}>
                  {notification}
                </p>

                <button>{!signUp ? "Sign In" : "Sign Up"}</button>
              </form>

              {/* <div className="dhac">
            {!signUp ? (
              <h6>
                Don't have an account?{" "}
                <span onClick={() => setsignUp(true)}>Sign Up</span>
              </h6>
            ) : (
              <h6>
                Already have an account?{" "}
                <span onClick={() => setsignUp(false)}>Sign In</span>
              </h6>
            )}
          </div> */}
            </div>
          </div>
          <Footer />
        </>
      )}
    </AnimatedPage>
  );
};

export default Auth;
