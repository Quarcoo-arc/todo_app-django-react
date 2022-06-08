import React, { useContext, useState } from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Login from "../components/Login";
import UserContext from "../context/UserContext";
import { ReactComponent as UserIcon } from "../assets/svgs/UserIcon.svg";

const LandingPage = () => {
  const { userName, setUserName } = useContext(UserContext);

  const [clicked, setClicked] = useState(false);

  const showDropdown = () => {
    setClicked(true);
  };

  const hideDropdown = () => {
    setClicked(false);
  };

  const logoutUser = () => {
    setClicked(!clicked);
    setUserName("");
  };

  return (
    <>
      <div className="wrapper">
        {userName && (
          <div>
            <div className="user" onClick={showDropdown}>
              <UserIcon width="1rem" fill="white" className="userIcon" />{" "}
              {userName.toUpperCase()}
            </div>
            <div
              className={clicked ? "dropdown show" : "dropdown"}
              onClick={logoutUser}
              onMouseOut={hideDropdown}
            >
              Logout
            </div>
          </div>
        )}
        <h1 className="title">
          {userName ? new Date().toDateString() : "Todo App"}
        </h1>
        {userName ? <Form /> : <Login />}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
