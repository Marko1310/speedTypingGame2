import { useEffect, useRef, useState } from "react";
const TIME = 10;

function App() {
  // state for input text
  const [text, setText] = useState("");

  // state for number of words
  const [wordCount, setWordCount] = useState(0);

  // state/ref for timer
  const [changeTime, setChangeTime] = useState(TIME);

  // state for stert button clicked
  const [isCounting, setIsCounting] = useState(false);

  // function to split the string, filter words, count and update wordCount state
  const typeWords = function (e) {
    setText(e.target.value);
  };

  function calculateLenght(text) {
    const wordsArray = text.split(" ").filter((word) => word.length > 0);
    return wordsArray.length;
  }

  useEffect(() => {
    if (isCounting && changeTime > 0) {
      lowerTheNumber();
    } else if (changeTime === 0) {
      setIsCounting(false);
      setWordCount(calculateLenght(text));
    }
  }, [changeTime, isCounting]);

  function lowerTheNumber() {
    setTimeout(() => {
      setChangeTime((changeTime) => changeTime - 1);
    }, 1000);
  }

  function startGame() {
    setChangeTime(TIME);
    setText("");
    setIsCounting(true);
    inputText.current.disabled = false;
    inputText.current.focus();
  }

  // reference to textarea
  const inputText = useRef(null);

  return (
    <div className="main--container">
      <h1>How fast can you type?</h1>
      <textarea
        disabled={!isCounting}
        ref={inputText}
        onChange={typeWords}
        value={text}
      />
      <h4>Time Remaining: {changeTime}</h4>
      <button onClick={startGame} disabled={isCounting}>
        START
      </button>
      {changeTime === 0 && <h1>Word count: {changeTime === 0 && wordCount}</h1>}
    </div>
  );
}

export default App;
