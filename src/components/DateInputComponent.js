import React from "react";

function DateInputComponent({ onDateChange }) {
  console.log("Date Input connected");

  // Data
  // template

  const inputStyle = {
    margin: "5px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    onDateChange(event.target.value);
  };

  return (
    <div className="field">
      <label className="label">Date (YYYY-MM-DD)</label>
      <div className="control">
        <input
          className="input"
          type="date"
          style={inputStyle}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

// render
export default DateInputComponent;
