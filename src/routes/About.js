import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  const { name } = useParams();
  const { state } = useLocation();

  console.log("state", state);

  return (
    <>
      <div>This is About Screen {name}</div>
      <div onClick={() => navigate("/")}>go to home page</div>
    </>
  );
};

export default About;
