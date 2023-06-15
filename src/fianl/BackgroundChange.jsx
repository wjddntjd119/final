
import React, { useState, useContext } from "react";
import "../App.css"

function BackgroundChange() {
  const [bgColor, setBgColor] = useState("Purple"); // 초기 배경색 purple로 설정
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setBgColor(inputValue);
    setInputValue("");
  };

  return (
    <div className = "backgroundChange"style={{ backgroundColor: bgColor }}>
      <div className="backgroundChangeItem">
      Background Color : {bgColor}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>배경색 바꾸기</button>
      </div>
    </div>
  );
}
export default BackgroundChange;