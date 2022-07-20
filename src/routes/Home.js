import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <div>this is Home Screen </div>
      <div
        onClick={() =>
          navigate("/about/rajad", {
            state: {
              name: "rajad",
            },
          })
        }
      >
        go to about page
      </div>
    </>
  );
};

export default Home;
