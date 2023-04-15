import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [res, setRes] = useState();
  const [firstValue, setFirstValue] = useState(``);
  const [secondValue, setSecondValue] = useState(``);
  const [operator, setOperator] = useState(``);
  const [calculation, setCalculation] = useState({});

  const operatorUrls = {
    "*": "/api/calculations/multiplication",
    "/": "/api/calculations/division",
    "+": "/api/calculations/add",
    "-": "/api/calculations/subtraction",
  };

  const calc = async () => {
    const url = operatorUrls[operator];
    const res = await axios.post(`http://localhost:8080${url}`, calculation);

    setRes(res.data.results);
    setFirstValue(res.data.results);
    console.log(res.data.results);
  };

  useEffect(() => {
    setCalculation({ operand1: firstValue, operand2: secondValue });
  }, [firstValue, secondValue]);
  console.log(firstValue);
  console.log(secondValue);
  return (
    <main>
      <div className="calculator-container">
        <div className="result">
          <p>
            {res
              ? res
              : calculation.operand1 + `${operator}` + calculation.operand2}
          </p>
        </div>
        <div className="grid-container">
          <button className="numberC" onClick={() => setRes(`0`)}>
            C
          </button>
          <button className="numberDel">Del</button>
          <button className="numberMult" onClick={() => setOperator("*")}>
            *
          </button>
          <button className="numberDiv" onClick={() => setOperator("/")}>
            /
          </button>
          <button
            className="number7"
            onClick={() =>
              !operator
                ? setFirstValue(firstValue + "7")
                : setSecondValue(secondValue + "7")
            }
          >
            7
          </button>
          <button
            className="number8"
            onClick={() => (firstValue ? setSecondValue(8) : setFirstValue(8))}
          >
            8
          </button>
          <button
            className="number9"
            onClick={() => (firstValue ? setSecondValue(9) : setFirstValue(9))}
          >
            9
          </button>
          <button className="numberPlus" onClick={() => setOperator("+")}>
            +
          </button>
          <button
            className="number4"
            onClick={() => (firstValue ? setSecondValue(4) : setFirstValue(4))}
          >
            4
          </button>
          <button
            className="number5"
            onClick={() => (firstValue ? setSecondValue(5) : setFirstValue(5))}
          >
            5
          </button>
          <button
            className="number6"
            onClick={() => (firstValue ? setSecondValue(6) : setFirstValue(6))}
          >
            6
          </button>
          <button className="numberMin" onClick={() => setOperator("-")}>
            -
          </button>
          <button
            className="number1"
            onClick={() => (firstValue ? setSecondValue(1) : setFirstValue(1))}
          >
            1
          </button>
          <button
            className="number2"
            onClick={() => (firstValue ? setSecondValue(2) : setFirstValue(2))}
          >
            2
          </button>
          <button
            className="number3"
            onClick={() => (firstValue ? setSecondValue(3) : setFirstValue(3))}
          >
            3
          </button>
          <button onClick={calc} className="numberEq">
            =
          </button>

          <button
            className="number0"
            onClick={() => (firstValue ? setSecondValue(0) : setFirstValue(0))}
          >
            0
          </button>
          <button
            className="numberDot"
            onClick={() => (secondValue ? firstValue + "." : secondValue + ".")}
          >
            .
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
