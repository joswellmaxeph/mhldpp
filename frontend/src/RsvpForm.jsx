import { useState } from "react";
import Wizard from "./Wizard";
import Linky from "./Linky";
import Loader from "./Loader";

const questions = [
  { name: "name", text: "What is your name?", type: "text" },
  { name: "attending", text: "Will you attend?", type: "select", options: ["Yes", "No", "Maybe", "I don't know", "Can you repeat the question?"] },
  { name: "plusGuests", text: "Will you bring anyone else?", type: "textarea", cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "email", text: "What is your email?", type: "email", cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "potluckBoolean", text: "Will you bring something for the potluck?", subtitle: "NOTE: Truly no worries if you don't bring anything!", type: "select", options: ["Yes", "No", "Maybe"], cond: { attending: ["Yes", "Maybe", "I don't know"] } },
  { name: "bringingForPotluck", text: "What will you bring for the potluck?", type: "textarea", cond: { potluckBoolean: ["Yes", "Maybe"] } },
  { name: "notes", text: "Anything else you'd like to share?", type: "textarea" },
];

function RsvpForm() {
  const [submissionResponseData, setSubmissionResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (answers) => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const responseData = await res.json();
      setSubmissionResponseData(responseData);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setSubmissionResponseData({ failure: true });
      setLoading(false);
    }
  };

  if (submissionResponseData) {
    return (
      <div className="rsvp-form">
      <div className="window submission-response">
        {submissionResponseData.failure ? (
          <h2>There was an error submitting your RSVP. Please try again.</h2>
        ) : (
          <h2>Thank you for your response, {submissionResponseData.name}!</h2>
        )}
        <Linky to="/rsvps" text="View all the RSVPs here" />
      </div>
      </div>
    );
  }

  return (
    <>
    <div className="rsvp-form">
      <Loader loading={loading} />
      {!loading && <Wizard title="RSVP" questions={questions} onSubmit={handleSubmit} />}
      <Linky to="/rsvps" text="View all the RSVPs here" />
    </div>
    </>
  );
}

export default RsvpForm;
