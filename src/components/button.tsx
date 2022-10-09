import { useState } from "react";

const Button = () => {
  const [counter, setCounter] = useState(1);
  const handleClick = () => {
    setCounter(counter + 1);
    console.log(`Counter is ${counter}`);
  };

  return <button onClick={handleClick}>Click {counter}</button>;
};

export default Button;
