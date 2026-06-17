import { useState } from "react";
import GenericInput from "./GenericInput";

function Wizard({ title, questions, onSubmit }) {
  const [pageTitle, setPageTitle] = useState(title);
  const [qClicked, setQClicked] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState({});
  const helpClick = () => {
    setQClicked(true);
  };

  const next = (e) => {
    setQClicked(false);
    if (currentAnswer === "Can you repeat the question?") {
      setPageTitle("You're not the boss of me now");
      setCurrentAnswer("");
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      const newAnswers = { ...answers };
      const newName = questions[currentQuestionIndex].name;
      newAnswers[newName] = currentAnswer;
      setAnswers(newAnswers);
      setCurrentAnswer("");
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onSubmit(answers);
    }
  };

  return (
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">{pageTitle}</div>
        <div class="title-bar-controls">
          <button aria-label="Help" onClick={helpClick}></button>
        </div>
      </div>
      <div class="window-body">
        {qClicked && <p style={{ color: "red", fontSize: ".8em", fontStyle: "italic" }}>Answer the questions of the wizard</p>}
        <p>{questions[currentQuestionIndex].text}</p>
        <GenericInput
          value={currentAnswer}
          type={questions[currentQuestionIndex].type}
          onChange={(e) => {
            setCurrentAnswer(e.target.value);
          }}
          options={questions[currentQuestionIndex].options}
        />
        <button onClick={next}>
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Wizard;

