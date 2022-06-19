import { useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 380px;
  height: 500px;
  margin: 20px 30px 20px 30px;
  border: 2px solid black;
`;

const Cal_Input = styled.div`
  width: 330px;
  height: 100px;
  border: 1px solid #a9a9a9;
  margin: 20px 25px 20px 25px;
`;

const Button_Wrapper = styled.div`
  width: 300px;
  height: 420px;
  border: 1px solid #a9a9a9;
  margin: 10px 40px 90px 40px;
`;

const Button = styled.button`
  float: left;
  height: 72px;
  width: 75px;
  border: 1px solid #a9a9a9;
  font: black;
  font-size: 20px;
  text-align: center;
  line-height: 70px;
  font-weight: bold;
  &:hober {
    background-color: #50c8ff;
  }
`;

const Calculator = () => {
  const [number, setNumber] = useState("");
  const [previousvalue, setPreviousValue] = useState("");
  const [operation, setOperation] = useState("");

  const onClickButton = (e) => {
    setNumber(number + e.target.value);
  };
  const onClickOperation = (e) => {
    setPreviousValue(number);
    setNumber("");
    setOperation(e.target.value);
  };
  const onClickReset = (e) => {
    setNumber("");
    setOperation("");
    setPreviousValue("");
  };
};

const onClickEqual = () => {
  const result = calculate(previousValue, number, operation);
  setNumber(result);

  function calculate(operand1, operand2, operation) {
    if (operation === "+") {
      return parseInt(previousValue) + parseInt(number);
    }
    if (operation === "-") {
      return parseInt(previousValue) - parseInt(number);
    }
    if (operation === "/") {
      return parseInt(previousValue) / parseInt(number);
    }
    return parseInt(previousValue) * parseInt(number);
  }

  return (
    <CalculatorWrapper>
      <Cal_Input>{number}</Cal_Input>
      <Button_Wrapper>
        <Button onClick={onClickButton} value={7}>
          7
        </Button>
        <Button onClick={onClickButton} value={8}>
          8
        </Button>
        <Button onClick={onClickButton} value={9}>
          9
        </Button>
        <Button onClick={onClickOperation} value={"/"}>
          /
        </Button>

        <Button onClick={onClickButton} value={4}>
          4
        </Button>
        <Button onClick={onClickButton} value={5}>
          5
        </Button>
        <Button onClick={onClickButton} value={6}>
          6
        </Button>
        <Button onClick={onClickOperation} value={"x"}>
          x
        </Button>

        <Button onClick={onClickButton} value={1}>
          1
        </Button>
        <Button onClick={onClickButton} value={2}>
          2
        </Button>
        <Button onClick={onClickButton} value={3}>
          3
        </Button>
        <Button onClick={onClickOperation} value={"-"}>
          -
        </Button>

        <Button onClick={onClickReset} value={"@"}>
          @
        </Button>
        <Button onClick={onClickButton} value={0}>
          0
        </Button>
        <Button onClick={onClickOperation} value={"+"}>
          +
        </Button>
        <Button onClick={onClickEqual} value={"="}>
          =
        </Button>
      </Button_Wrapper>
    </CalculatorWrapper>
  );
};

export default Calculator;
