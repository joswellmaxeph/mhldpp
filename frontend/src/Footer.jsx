import Linky from "./Linky";

function Footer() {
  return (
    <div className="footer">
      <Linky to="/?skip=true" text="HOME" />
      <Linky to="/info" text="INFO" />
      <Linky to="/rsvp" text="RSVP" />
    </div>
  );
}

export default Footer;