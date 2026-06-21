import { useNavigate } from "react-router-dom";

function Linky({ to, text }) {
  const navigate = useNavigate();
  return <p className="linky" onClick={() => navigate(to)}>{text}</p>;
}

export default Linky;
