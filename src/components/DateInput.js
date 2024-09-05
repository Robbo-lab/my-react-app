import React, { useState } from "react";

function DateInputComponent({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    // Prop function to communicate with vanilla JavaScript
    onDateChange(newDate);
  };

  return (
    <input
      className="input"
      type="date"
      value={date}
      onChange={handleDateChange}
    />
  );
}

export default DateInputComponent;
