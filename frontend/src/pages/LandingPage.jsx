import React, { useContext, useEffect } from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Login from "../components/Login";
import UserContext from "../context/UserContext";

const LandingPage = () => {
  const { userName } = useContext(UserContext);

  return (
    <>
      <div className="wrapper">
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
