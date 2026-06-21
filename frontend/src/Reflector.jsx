function Reflector({ text, showing }) {
    return (
      <div className={`Reflector ${showing ? "showing" : ""}`}>
        <div className="refl window">{text}</div>
        <div className="refl r2 window">{text}</div>
      </div>
    );
}

export default Reflector;