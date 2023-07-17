import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const calculate = () => {
    try {
      // eslint-disable-next-line
      setInput(eval(input));
    } catch (error) {
      window.alert("Something went wrong!");
    }
  };

  return (
    <div className="calculator">
      <div className="row">
        <input className="input" type="text" readOnly={true} value={input} />
        <button className="clear" onClick={() => setInput("")}>
          Clear
        </button>
      </div>
      <div className="buttons">
        <div className="row">
          <button className="coloured" onClick={() => setInput(input + "+")}>
            +
          </button>
          <button className="coloured wide" onClick={calculate}>
            =
          </button>
        </div>
        <div className="row">
          <button className="coloured" onClick={() => setInput(input + "*")}>
            *
          </button>
          <button className="coloured" onClick={() => setInput(input + "-")}>
            -
          </button>
          <button className="coloured" onClick={() => setInput(input + "/")}>
            /
          </button>
        </div>
        <div className="row">
          <button onClick={() => setInput(input + "1")}>1</button>
          <button onClick={() => setInput(input + "2")}>2</button>
          <button onClick={() => setInput(input + "3")}>3</button>
        </div>
        <div className="row">
          <button onClick={() => setInput(input + "4")}>4</button>
          <button onClick={() => setInput(input + "5")}>5</button>
          <button onClick={() => setInput(input + "6")}>6</button>
        </div>
        <div className="row">
          <button onClick={() => setInput(input + "7")}>7</button>
          <button onClick={() => setInput(input + "8")}>8</button>
          <button onClick={() => setInput(input + "9")}>9</button>
        </div>
        <div className="row">
          <button className="full" onClick={() => setInput(input + "*")}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
