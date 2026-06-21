import { useState, useEffect } from "react";
import Linky from "./Linky";

const attendingOptions = ["", " (Yes)", " (No)", " (Maybe)"];
const nameAlphaSortOptions = ["Ascending", "Descending"];

function filterNameFromIdx(name) {
  switch (name) {
    case " (Yes)":
      return "Yes";
    case " (No)":
      return "No";
    case " (Maybe)":
      return "Maybe";
    default:
      return "";
  }
}

function RsvpList() {
  const [rsvps, setRsvps] = useState([]);
  const [nameAlphaSortIdx, setNameAlphaSortIdx] = useState(0);
  const [potluckSortIdx, setPotluckSortIdx] = useState(0);
  const [filterAttendingIdx, setFilterAttendingIdx] = useState(0);

  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/rsvp`);
        const data = await res.json();
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRsvps(data);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      }
    };

    fetchRsvps();
  }, []);

  function nameHeaderClicked() {
    const sortNextIdx = (nameAlphaSortIdx + 1) % nameAlphaSortOptions.length;
    setNameAlphaSortIdx(sortNextIdx);
    if (nameAlphaSortOptions[sortNextIdx] === "Ascending") {
      const sortedRsvps = [...rsvps].sort((a, b) => a.name.localeCompare(b.name));
      setRsvps(sortedRsvps);
    } else if (nameAlphaSortOptions[sortNextIdx] === "Descending") {
      const sortedRsvps = [...rsvps].sort((a, b) => b.name.localeCompare(a.name));
      setRsvps(sortedRsvps);
    }
  }

  function potluckClicked() {
    const nextIdx = (potluckSortIdx + 1) % nameAlphaSortOptions.length;
    setPotluckSortIdx(nextIdx);
    if (nameAlphaSortOptions[nextIdx] === "Ascending") {
      const sortedRsvps = [...rsvps].sort((a, b) => a.bringingForPotluck.localeCompare(b.bringingForPotluck));
      setRsvps(sortedRsvps);
    } else if (nameAlphaSortOptions[nextIdx] === "Descending") {
      const sortedRsvps = [...rsvps].sort((a, b) => b.bringingForPotluck.localeCompare(a.bringingForPotluck));
      setRsvps(sortedRsvps);
    }
  }

  function filterAttendingClicked() {
    const nextIdx = (filterAttendingIdx + 1) % attendingOptions.length;
    setFilterAttendingIdx(nextIdx);
  }

  return (
    <div className="rsvp-list-container">
    <div className="window rsvp-list">
      <h2>RSVP List</h2>
      <Linky to="/rsvp" text="Click here to submit yours!" />
      {rsvps.length > 0 && (
        <table className="interactive">
            <thead>
                <tr>
                    <th onClick={nameHeaderClicked}>Name</th>
                    <th onClick={filterAttendingClicked}>Attending{attendingOptions[filterAttendingIdx]}</th>
                    <th onClick={potluckClicked}>Potluck Item</th>
                </tr>
            </thead>
            <tbody>
                {rsvps.filter(rsvp => {
                    const filterValue = filterNameFromIdx(attendingOptions[filterAttendingIdx]);
                    return filterValue === "" || rsvp.attending === filterValue;
                }).map((rsvp, index) => (
                    <tr key={index}>
                        <td>{rsvp.name}</td>
                        <td>{rsvp.attending}</td>
                        <td>{rsvp.bringingForPotluck}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      )}
    </div>
    </div>
  );
}

export default RsvpList;
