function GenericInput({ type, value, onChange, options }) {
  function getInput() {
    if (type === "text") {
      return <input type="text" value={value} onChange={onChange} />;
    } else if (type === "email") {
      return <input type="email" value={value} onChange={onChange} />;
    } else if (type === "select") {
      return (
        <select value={value} onChange={onChange}>
          <option value="">Select an option</option>
          {options && options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else if (type === "textarea") {
      return <textarea value={value} onChange={onChange} />;
    }
  }

  return <div className="generic-input">{getInput()}</div>;
}

export default GenericInput;