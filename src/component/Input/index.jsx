import { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setNickName(e.target.value);
    }
  };

  const onReset = () => {
    setName("");
    setNickName("");
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}
          value={nickName}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      <ViewWrapper>
        값 :{" "}
        {`${name ? name : "이름이 없습니다."}:${
          nickName ? nickName : "(별명이 없습니다)."
        }`}
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
