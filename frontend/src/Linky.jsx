import { useNavigate } from "react-router-dom";

function Linky({ to, text, style }) {
  const navigate = useNavigate();
  return <p className="linky" style={style} onClick={() => navigate(to)}>{text}</p>;
}

export default Linky;
