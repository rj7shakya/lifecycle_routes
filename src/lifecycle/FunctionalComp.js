import React, { useEffect, useState } from "react";

const FunctionalComp = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("effect call");
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h2 onClick={() => setCounter(counter + 1)}>+</h2>
    </div>
  );
};

export default FunctionalComp;
