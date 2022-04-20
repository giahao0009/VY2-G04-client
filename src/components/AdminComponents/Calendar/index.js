import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calenda() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="mb-2">
      <Calendar className="calendar" onChange={onChange} value={value} />
    </div>
  );
}

export default Calenda;
