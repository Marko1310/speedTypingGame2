import { useEffect, useRef, useState } from "react";

function App() {
  // state for input text
  const [text, setText] = useState("");

  // state for number of words
  const [wordCount, setWordCount] = useState(0);

  // state/ref for timer
  const [changeTime, setChangeTime] = useState(5);

  // state for stert button clicked
  const [isCounting, setIsCounting] = useState(false);

  // function to split the string, filter words, count and update wordCount state
  const typeWords = function (e) {
    setText(e.target.value);
    const wordsArray = text.split(" ").filter((word) => word.length > 0);
    setWordCount(wordsArray.length);
  };

  useEffect(() => {
    if (isCounting && changeTime > 0) {
      lowerTheNumber();
    } else if (changeTime === 0) {
      console.log("end game");
    }
  }, [changeTime, isCounting]);

  function lowerTheNumber() {
    setTimeout(() => {
      setChangeTime((changeTime) => changeTime - 1);
      console.log(changeTime);
    }, 1000);
  }

  function startGame() {
    setIsCounting(true);
  }

  // const startTimer = function () {
  //   setInterval(() => {
  //     console.log(changeTime);
  //     setChangeTime((prevchangeTime) => prevchangeTime--);
  //     console.log(changeTime);
  //     if (changeTime > 0) {
  //       console.log("ne");
  //     }
  //   }, 1000);
  // };

  // console.log(changeTime.current);

  return (
    <div className="main--container">
      <h1>How fast can you type?</h1>
      <textarea onChange={typeWords} />
      <h4>Time Remaining: {changeTime.current}</h4>
      <button onClick={startGame}>START</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
