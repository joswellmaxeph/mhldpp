function Reflector({ text }) {
    return (
      <div className="Reflector">
        <div className="refl window">{text}</div>
        <div className="refl r2 window">{text}</div>
      </div>
    );
}

export default Reflector;