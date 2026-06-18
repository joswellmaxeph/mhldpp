import { useState } from "react";
import Wizard from "./Wizard";

const questions = [
  { name: "name", text: "What is your name?", type: "text" },
  { name: "plusGuests", text: "Are you bringing anyone else?", type: "textarea" },
  { name: "email", text: "What is your email?", type: "email" },
  { name: "attending", text: "Will you be attending?", type: "select", options: ["Yes", "No", "Maybe", "I don't know", "Can you repeat the question?"] },
  { name: "bringingForPotluck", text: "Will you bring a potluck item?", type: "textarea" },
  { name: "notes", text: "Anything else you'd like to share?", type: "textarea" },
];

function RsvpForm() {
  const handleSubmit = async (answers) => {
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
      <Wizard title="RSVP" questions={questions} onSubmit={handleSubmit} />
    </div>
  );
}

export default RsvpForm;
