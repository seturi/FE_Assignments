import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [change, setChange] = useState(false);
  const onInc = () => setCounter((value) => value + 1);
  const onDec = () => setCounter((value) => value - 1);
  const onRes = () => setCounter(0);

  useEffect(() => {
    setChange(true);
    setTimeout(()=>{setChange(false)}, 300);
  }, [counter]);

  return (
    <div className="contents">
      <div className={change ? "number change" : "number"}>{counter}</div>
		  <hr />
      <div className="buttons">
        <button className="inc" onClick={onInc}>+1</button>
        <button className="res" onClick={onRes}>Reset</button>
        <button className="dec" onClick={onDec}>-1</button>
      </div>
    </div>
  );
}

export default App;
