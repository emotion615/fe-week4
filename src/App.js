import { useState } from "react";
import InputSample from "./component/Input";
import Problem from "./component/Problem";
import Calculate from "./component/Calculate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        gdgddfda
      </button>
      <InputSample />
      <Problem />
      <Calculate></Calculate>
    </>
  );
}

export default App;
