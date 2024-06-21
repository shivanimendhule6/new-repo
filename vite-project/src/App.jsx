import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrement = () => setCount(count + 1);
  const handelDecrement = () => setCount(count - 1);

  return (
    <div className="d-flex jutify-content-center align-items-center">
      <div>
        <h1 className="text-center" style={{ fontSize: "70px" }}>
          {count}
        </h1>
        <div className="d-flex">
          <button onClick={handelIncrement} className="btn btn-success me-3">
            Increment
          </button>
          <button onClick={handelDecrement} className="btn btn-danger ms-3">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}
