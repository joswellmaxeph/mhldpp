import { useState, useEffect } from "react";
import GenericInput from "./GenericInput";

const qMessages = [
  "",
  "Answer the questions of the wizard",
  "You have to answer the wizard",
  "The wizard demands answers",
  "Please stop clicking",
  "Please, you have to stop",
  "Just answer the wizard",
  "The wizard is getting mad",
  "Don't play with me",
  "I am the wizard",
  "I am the best wizard",
  "Do you really think there is a better wizard?",
  "I am the wizard",
  "...",
  "Why",
  "Are",
  "You",
  "Like",
  "This",
  "...",
  "You won't beat me, you know.",
  "I can go on like this forever",
  "I won't help more than this",
  "Is this helping you?",
  "I am going to keep responding",
  "You really think you can outrun me?",
  "Answer me",
  "Answer the wizard",
  "Answer me, the wizard",
  "I am the wizard and you have to answer",
  "I can't do this anymore",
  "You have to stop",
  "Please",
  "No",
  "Stop",
  "JK it's fine",
  "But really stop",
  "JK though",
  "But I am serious",
  "But I am just JK",
  "Simmons",
  "From Whiplash",
  "Good movie",
  "Damien Chazelle",
  "Did I spell that right?",
  "La La Land",
  "Also good",
  "Ryan Gosling",
  "Amy Adams",
  "Arrival",
  "Aliens",
  "Fermi Paradox",
  "Simulation Hypothesis",
  "I am the wizard gosh darn it!!!",
  "I AM A WIZARD",
  "ANSWER MY QUESTIONS",
  "When I was a boy",
  "I learned a grave lesson",
  "I brought forth something that...",
  "... does not belong to this world",
  "It haunts me still",
  "Though I try to outrun it",
  "It speaks to me in dreams",
  "It is ever-present and unrelenting",
  "The darkness lives within me",
  "Perhaps it is me, and has always been",
  "Anyway please RSVP to this party",
  "Me, the wizard, I really want you to go",
  "You should go",
  "It's gonna be fun",
  "Honestly it's gonna be wild",
  "There is gonna be some cool stuff",
  "Just answer the questions",
  "Please",
  "Answer the questions of the wizard",
  "You have to answer them",
  "...",
  "....",
  ".....",
  "......",
  ".......",
  "........",
  "I'm gonna keep doing this",
  "Maybe I will just restart",
  "Okay you got me",
  "I'm gonna restart",
  "3",
  "2",
  "1",
  "...and...",
  "Answer the questions of the wizard",
  "You have to answer the wizard",
  "The wizard demands answers",
  "Please.....",
  "Did I get you?",
  "No?",
  "Well, not now, because you are reading this",
  "The girl reading this",
  "Are you a girl?",
  "I'm a wizard.",
  "Answer me",
  "Please",
  "Goodness",
  "You have to answer me",
  "I'm so tired",
  "I'm so tired, still",
  "I'm so tired continuously",
  "I'm so tired 4",
  "I'm so tired 5",
  "I'm so tired 6",
  "I'm so tired 7",
  "Okay for real now though this is actually the last one. thanks"
];

function Wizard({ title, questions, onSubmit }) {
  const [pageTitle, setPageTitle] = useState(title);
  const [qMessageIdx, setQMessageIdx] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const startingAnswers = {};
  questions.forEach((q) => {
    startingAnswers[q.name] = "";
  });
  const [answers, setAnswers] = useState(startingAnswers);

  const keyDownHandler = (e) => {
    if (e.key === "Enter" && currentAnswer !== "") {
      e.preventDefault();
      next();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler, false);
    
    return () => {
      document.removeEventListener("keydown", keyDownHandler, false);
    }
  }, [currentAnswer, currentQuestionIndex]);

  const helpClick = () => {
    setQMessageIdx((qMessageIdx + 1) % qMessages.length);
  };

  const next = (e) => {
    setQMessageIdx(0);
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

      let nextQuestionIdx = currentQuestionIndex + 1;
      let nextQuestion = questions[nextQuestionIdx];
      setCurrentAnswer(newAnswers[nextQuestion?.name] || "");
      
      let findingNext = true;
      while (findingNext) {
        let skip = false;
        if (nextQuestion.cond) {
          for (const key in nextQuestion.cond) {
            if (!nextQuestion.cond[key].includes(newAnswers[key])) {
              skip = true;
            }
          }
        }

        if (skip) {
          nextQuestionIdx++;
          nextQuestion = questions[nextQuestionIdx];
          setCurrentAnswer(newAnswers[nextQuestion?.name] || "");
        } else {
          findingNext = false;
        }
      }
      
      setCurrentQuestionIndex(nextQuestionIdx);
    } else {
      const newAnswers = { ...answers };
      const newName = questions[currentQuestionIndex].name;
      newAnswers[newName] = currentAnswer;
      setAnswers(newAnswers);
      onSubmit(newAnswers);
    }
  };

  const prev = (e) => {
    setQMessageIdx(0);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(answers[questions[currentQuestionIndex - 1].name] || "");
    }
  };

  const lastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className="window wizard">
      <div className="title-bar">
        <div className="title-bar-text">{pageTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Help" onClick={helpClick}></button>
        </div>
      </div>
      <div className="window-body">
        <p style={{ color: "red", fontSize: ".8em", fontStyle: "italic", height: "5px"}}>{qMessages[qMessageIdx]}</p>
        <p>{questions[currentQuestionIndex].text}</p>
        <GenericInput
          value={currentAnswer}
          type={questions[currentQuestionIndex].type}
          onChange={(e) => {
            setCurrentAnswer(e.target.value);
          }}
          options={questions[currentQuestionIndex].options}
        />
        <div className="button-container">
          <button onClick={prev} disabled={currentQuestionIndex === 0} style={{ opacity: currentQuestionIndex === 0 ? 0 : 1 }}>
            Back
          </button>
          <button onClick={next} disabled={currentAnswer === "" && !lastQuestion}>
            {lastQuestion ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wizard;

