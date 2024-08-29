import DayInput from "./DayInput";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";
import arrow from "../assets/images/arrow.png";
import Info from "./Info";
import { useState } from "react";

function Form() {

  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');

  console.log(day, month, year)
  return (
    <form>
      <div className="inputs">
        <DayInput day={day} setDay={setDay} month={month} year={year} />
        <MonthInput month={month} setMonth={setMonth} />
        <YearInput year={year} setYear={setYear} />
      </div>
      <button className="button">
            <img src={arrow} alt="arrow"/>
        </button>
      <Info />
    </form>
  )
}

export default Form