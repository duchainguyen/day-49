import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Slider = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [randomCorrectValue, setRandomCorrectValue] = useState(null);
  const [temp, setTemp] = useState(0);
  const maxAttempts = 7; // Giới hạn số lần chọn
  console.log(randomCorrectValue);
  useEffect(() => {
    resetGame();
  }, [maxAttempts]);
  const resetGame = () => {
    setRandomCorrectValue(null);
    setEnteredNumber("");
    setTemp(0);
  };
  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value, 10));
    setRandomCorrectValue(null);
    toast.success("trò chơi bắt đầu");
  };

  const handleInputClick = () => {
    if (randomCorrectValue === null) {
      const randomValue = Math.floor(Math.random() * sliderValue) + 1;
      setRandomCorrectValue(randomValue);
      setEnteredNumber(randomValue.toString());
      setTemp(0);
    }
  };

  const handleNumberChange = (e) => {
    setEnteredNumber(e.target.value);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      checkNumber();
    }
  };
  const checkNumber = () => {
    const parsedNumber = parseInt(enteredNumber, 10);
    if (!isNaN(parsedNumber)) {
      const difference = parsedNumber - randomCorrectValue;
      if (difference === 0) {
        toast.success(`Tìm kiếm thành công số ${randomCorrectValue}!`);
      } else if (difference > 0) {
        toast.error("Giảm một chút!");
      } else {
        toast.error("Tăng một chút!");
      }
      setTemp(temp + 1);
      if (temp >= maxAttempts) {
        toast.error("Bạn đã hết số lần chọn");
        resetGame();
        handleInputClick();
      }
    } else {
      toast.success("Vui lòng nhập một số hợp lệ.");
    }
  };

  return (
    <div>
      <h3>Bạn cần tìm kiếm một số từ 1 đến {sliderValue}</h3>
      <h3>
        {maxAttempts > 0 && ` Còn ${maxAttempts - temp}/${maxAttempts} lần thử`}
      </h3>
      <input
        className="slider-input"
        type="range"
        id="slider"
        min={5}
        max={1024}
        onClick={handleInputClick}
        step={1}
        value={sliderValue}
        list="tickmarks"
        onChange={handleSliderChange}
      />
      <datalist id="tickmarks">
        <option value="5" label="5" />
        <option value="100" label="100" />
        <option value="256" label="256" />
        <option value="512" label="512" />
        <option value="1024" label="1024" />
      </datalist>
      <span className="dot5">5</span>
      <span className="dot100">100</span>
      <span className="dot256">256</span>
      <span className="dot512">512</span>
      <span className="dot1024">1024</span>
      <output htmlFor="slider" style={{ display: "block", marginTop: "10px" }}>
        {/* Giá trị đúng:{" "}
        {randomCorrectValue !== null ? randomCorrectValue : "Chưa chọn"} */}
      </output>
      <h4>Hãy thử nhập 1 số</h4>
      <input
        className="checkinput"
        type="number"
        onChange={handleNumberChange}
        placeholder="Thử 1 số"
        onClick={handleInputClick}
        onKeyDown={handleEnterKey}
      />
    </div>
  );
};

export default Slider;
