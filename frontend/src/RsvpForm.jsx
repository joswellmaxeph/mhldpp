import { useState } from "react";
import Wizard from "./Wizard";

const questions = [
  { name: "name", text: "What is your name?", type: "text" },
  { name: "email", text: "What is your email?", type: "email" },
  { name: "attending", text: "Will you be attending?", type: "select", options: ["Yes", "No", "Maybe", "I don't know", "Can you repeat the question?"] },
  { name: "plusGuests", text: "How many plus guests?", type: "text" },
  { name: "bringingForPotluck", text: "What will you be bringing for the potluck?", type: "text" },
  { name: "notes", text: "Any additional notes?", type: "text" },
];

function RsvpForm() {
  const handleSubmit = async (answers) => {
    console.log(answers);
    try {
      const res = await fetch(`http://localhost:5000/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const responseData = await res.json();
      console.log("RSVP Data:", responseData);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  return (
    <div className="rsvp-form">
      <h2>RSVP</h2>
      <Wizard title="RSVP" questions={questions} onSubmit={handleSubmit} />
    </div>
  );
}

export default RsvpForm;
