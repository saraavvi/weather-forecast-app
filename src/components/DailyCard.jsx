import React from "react";

export default function DailyCard({ weekday, temp }) {
  return (
    <div className="col-md-3 border m-4">
      <h4>{weekday}</h4>
      <h4>{temp}</h4>
    </div>
  );
}
