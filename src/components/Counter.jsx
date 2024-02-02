import { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  function increment(){
    setCount(count + incrementValue);
  }
  function decrement(){
    setCount(count-incrementValue);
  }
  function increaseIncrement(){
    setIncrementValue(incrementValue+1);
  }
  function decreaseIncrement(){
    setIncrementValue(incrementValue-1);
  }
  return (
  <div>
    <h2>Count value is: {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <h2>We are Incrementing & Decrementing By: {incrementValue}</h2>
    <button onClick={increaseIncrement}>Increase Increment</button>
    <button onClick={decreaseIncrement}>Decrease Increment</button>
  </div>
  );
}