import { useState } from "react";
import Wizard from "./Wizard";

const questions = [
  { name: "name", text: "What is your name?", type: "text" },
  { name: "attending", text: "Will you attend?", type: "select", options: ["Yes", "No", "Maybe", "I don't know", "Can you repeat the question?"] },
  { name: "plusGuests", text: "Will you bring anyone else?", type: "textarea", cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "email", text: "What is your email?", type: "email", cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "potluckBoolean", text: "Will you bring something for the potluck?", type: "select", options: ["Yes", "No", "Maybe"], cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "bringingForPotluck", text: "What will you bring for the potluck?", type: "textarea", cond: { potluckBoolean: ["Yes", "Maybe"] } },
  { name: "notes", text: "Anything else you'd like to share?", type: "textarea" },
];

function RsvpForm() {
  const [submissionResponseData, setSubmissionResponseData] = useState(null);
  const handleSubmit = async (answers) => {
    try {
      const res = await fetch(`http://localhost:5001/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const responseData = await res.json();
      setSubmissionResponseData(responseData);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  if (submissionResponseData) {
    return (
      <div className="rsvp-form">
      <div className="window submission-response">
        <h2>Thank you for your response, {submissionResponseData.name}!</h2>
        <a href="/rsvps">View all the RSVPs here</a>
      </div>
      </div>
    );
  }

  return (
    <>
    <div className="rsvp-form">
      <Wizard title="RSVP" questions={questions} onSubmit={handleSubmit} />
      <a href="/rsvps">View all the RSVPs here</a>
    </div>
    </>
  );
}

export default RsvpForm;
