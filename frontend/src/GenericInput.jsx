function GenericInput({ type, value, onChange, options }) {
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
  }
}

export default GenericInput;