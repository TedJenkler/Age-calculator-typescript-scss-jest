import DayInput from "./DayInput";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";
import arrow from "../assets/images/arrow.png";
import Info from "./Info";

function Form() {
  return (
    <form>
      <div className="inputs">
        <DayInput />
        <MonthInput />
        <YearInput />
      </div>
      <button className="button">
            <img src={arrow} alt="arrow"/>
        </button>
      <Info />
    </form>
  )
}

export default Form