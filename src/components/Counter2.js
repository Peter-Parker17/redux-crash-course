import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function Counter2() {

    const dispatch = useDispatch()
  return (
    <div>
      <h1>This is Counter2</h1>
      <button onClick={() => dispatch(increment(10))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
