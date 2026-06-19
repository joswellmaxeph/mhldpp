import { useState, useEffect } from "react";

function RsvpList() {
  const [rsvps, setRsvps] = useState([]);

  useEffect(() => {
    const fetchRsvps = async () => {
      try {
        const res = await fetch(`http://localhost:5001/rsvp`);
        const data = await res.json();
        setRsvps(data);
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      }
    };

    fetchRsvps();
  }, []);

  return (
    <div className="window rsvp-list">
      <h2>RSVP List</h2>
      {rsvps.length === 0 ? (
        <p>No RSVPs yet. <a href="/rsvp">Be the first</a></p>
      ) : (
        <table class="interactive">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Attending</th>
                    
                </tr>
            </thead>
        </table>
      )}
    </div>
  );
}

export default RsvpList;
