import { signInWithPopup, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth, db, provider } from "../Utils/Firebase";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { tab } from "@testing-library/user-event/dist/tab";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // to navigate within app
  const navigate = useNavigate();

  // for user login confirmation
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setuser(authUser);
      } else {
        setuser(null);
      }
    });
  }, []);

  //   logging out user
  const handleLogout = () => {
    signOut(auth).then(() => {
      setuser(null);
      navigate("/");
      signUserOut();

      return toast.error("You've successfully Log Out");
    });
  };

  // i use this to se the type of page so as to disable link on pages
  const [pageType, pageTypeF] = useState(null);

  //   this is for the loader

  const [loader, setloader] = useState(false);

  //   to determine the id of the page
  const { id } = useParams();

  // Error Notification
  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationF("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  // Get blog from Firebase

  const [blogs, blogsF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "blogs"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        blogsF(list);
        setloader(false);

        // console.log("ghghffd");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // to delete blogs
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "blogs", id));
        setloader(false);
        toast.error("Blog successfully deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // to sign In for Comments

  const [signInType, signInTypeF] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const [commentUser, commentUserF] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isLoggedIn", true);
      commentUserF(true);
      signInTypeF("comment");
      window.location.reload();
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      commentUserF(false);
      signInTypeF(false);
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setuser,
        handleLogout,
        pageType,
        pageTypeF,
        navigate,
        loader,
        setloader,

        id,
        notification,
        notificationF,

        blogs,
        handleDelete,
        signInWithGoogle,
        commentUser,
        signInType,
        signInTypeF,
        signUserOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
