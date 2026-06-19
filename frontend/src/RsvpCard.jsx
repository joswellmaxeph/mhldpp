function RsvpCard({ name, attending, plusGuests, bringingForPotluck, notes }) {
    return (
        <div className="rsvp-card">
            <h3>{name}</h3>
            <p><strong>Attending:</strong> {attending}</p>
            {plusGuests && <p><strong>Plus Guests:</strong> {plusGuests}</p>}
            {bringingForPotluck && <p><strong>Bringing for Potluck:</strong> {bringingForPotluck}</p>}
            {notes && <p><strong>Notes:</strong> {notes}</p>}
        </div>
    )
};

export default RsvpCard;