import DayInput from "./DayInput";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";
import arrow from "../assets/images/arrow.png";

function Form() {
  return (
    <form>
      <div>
        <DayInput />
        <MonthInput />
        <YearInput />
        <button>
            <img src={arrow} alt="arrow"/>
        </button>
      </div>
      <div>
        <p><span>38</span>years</p>
        <p><span>3</span>months</p>
        <p><span>26</span>days</p>
      </div>
    </form>
  )
}

export default Form