import { useEffect, useRef, useState } from "react";

import useWordGame from "./hooks/useWordGame";
const TIME = 10;

function App() {
  const {
    isCounting,
    inputText,
    typeWords,
    text,
    changeTime,
    startGame,
    wordCount,
  } = useWordGame(TIME);

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
