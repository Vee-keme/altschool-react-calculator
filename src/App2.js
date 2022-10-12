import { useState } from "react";
import "./index2.css";

function App2() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  //create digits 1 - 10
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          onClick={() => {
            updateCalc(`${i}`);
          }}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  //calculate final result after = press
  const calculate = () => {
    setCalc(`${eval(calc)}`);
  };

  //delete last value in input on DEL press
  const deleteLastValue = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  //clear all
  const clearAll = () => {
    const bts1 = "";
    setCalc(bts1);
    const bts2 = "";
    setResult(bts2);
  };

  return (
    <div className="calc-grid">
      <div className="output">
        <div className="previous-operand">
          {result ? <span>{result}</span> : ""}&nbsp;
        </div>
        <div className="current-operand">{calc || "0"}</div>
      </div>

      <button className="span-two" onClick={clearAll}>
        C
      </button>
      <button onClick={deleteLastValue}>DEL</button>
      <button onClick={() => updateCalc("0")}>0</button>
      {createDigits()}
      <button onClick={() => updateCalc("/")}>÷</button>
      <button onClick={() => updateCalc("*")}>*</button>
      <button onClick={() => updateCalc("+")}>+</button>
      <button onClick={() => updateCalc("-")}>-</button>
      <button onClick={() => updateCalc(".")}>.</button>

      <button className="span-two" onClick={calculate}>
        =
      </button>
    </div>
  );
}

export default App2;
