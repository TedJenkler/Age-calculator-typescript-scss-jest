import { useEffect, useState } from "react";

interface InfoProps {
  now: Date;
  selectedDate: Date;
}

interface DateDifference {
  year: number;
  month: number;
  day: number;
}

function Info({ now, selectedDate }: InfoProps) {
  
  const [diff, setDiff] = useState<DateDifference>({ year: 0, month: 0, day: 0 });

  useEffect(() => {
    let years = now.getFullYear() - selectedDate.getFullYear();
    let months = now.getMonth() - selectedDate.getMonth();
    let days = now.getDate() - selectedDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setDiff({ year: years, month: months, day: days });
  }, [selectedDate, now]);

  return (
    <div className="info">
      <p><span>{diff.year ? diff.year : "--"} </span>years</p>
      <p><span>{diff.month ? diff.month : "--"} </span>months</p>
      <p><span>{diff.day ? diff.day : "--"} </span>days</p>
    </div>
  );
}

export default Info;