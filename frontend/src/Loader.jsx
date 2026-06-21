import { useState, useEffect } from "react";

const loadingMessages = [
  "Loading",
  "Loading.",
  "Loading..",
  "Loading...",
  "Loading....",
  "Loading.....",
  "Ok sorry...",
  "This is taking a long time...",
  "I didn't spring for the paid version...",
  "It just takes a while...",
  "But it's working on it...",
  "Actually, this is a feature...",
  "Take this time...",
  "Reflect on your life...",
  "How are you doing?",
  "How have things been?",
  "Anything you want to do?",
  "There is still time",
  "There is still time ܤ",
  "There is still time ܮ",
  "There is still time ֏",
  "There is still time ӿ",
  "There is still time Ϯ",
  "There is still time ৺",
  "There is still time థ",
  "There is still time ౷",
  "There is still time ᗗ",
  "There is still time ⁂",
  "There is still time ※",
  "There is still time ₸",
  "There is still time ⅏",
  "There is still time ⋩",
  "There is still time ╫",
  "There is still time ▛",
  "There is still time ▜",
  "There is still time ␥",
  "There is still time ⛦",
  "There is still time ⋱",
  "There is still time ➶",
  "There is still time ❤",
  "There is still time 	❧",
  "There is still time ⍾",
  "There is still time ⊌",
  "There is still time ❀",
  "There is still time ▨",
  "There is still time ⎲",
  "There is still time ❍",
  "There is still time ㅃ",
  "There is still time ㊋",
  "There is still time 𐑹",
  "There is still time ☘",
  "There is still time ◓",
  "There is still time ⋈",
]

function Loader({ loading }) {
  const [loadingTextIdx, setLoadingTextIdx] = useState(0);
  const [loadingText, setLoadingText] = useState(loadingMessages[0]);


  useEffect(() => {
    if (!loading) {
      return;
    }
    
    const myInterval = setInterval(() => {
        const nextIdx = (loadingTextIdx + 1) % loadingMessages.length;
        setLoadingTextIdx(nextIdx);
        setLoadingText(loadingMessages[nextIdx]);
    }, 1000);

    return () => clearInterval(myInterval);
  }, [loading, loadingTextIdx]);

  if (!loading) {
    return <></>;
  }

  return (<div className="loader window">{loadingText}</div>)
};

export default Loader;
