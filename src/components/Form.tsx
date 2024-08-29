import { useState } from "react";
import DayInput from "./DayInput";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";
import arrow from "../assets/images/arrow.png";
import Info from "./Info";

function Form() {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const [now, setNow] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (day !== '' && day !== '0' && month !== '' && month !== '0' && year !== '' && year !== '0') {
      const currentDate = new Date();
      const newSelectedDate = new Date(Number(year), Number(month) - 1, Number(day));
    
      setNow(currentDate);
      setSelectedDate(newSelectedDate);
    }else  {
      alert("Fill all fields")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <DayInput day={day} setDay={setDay} month={month} year={year} />
        <MonthInput month={month} setMonth={setMonth} />
        <YearInput year={year} setYear={setYear} />
      </div>
      <button type="submit" className="button">
        <img src={arrow} alt="arrow" />
      </button>
      <Info now={now} selectedDate={selectedDate} />
    </form>
  );
}

export default Form;