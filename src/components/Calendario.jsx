import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendario() {

  const [data, setData] = useState(new Date());

  return (
    <div className="container">
      <h1 className="titulo">Calendário</h1>

      <div className="calendar-container">
        <Calendar
          onChange={setData}
          value={data}
        />
      </div>

      <p className="data-selecionada">
        Data selecionada: {data.toLocaleDateString()}
      </p>
    </div>
  );
}