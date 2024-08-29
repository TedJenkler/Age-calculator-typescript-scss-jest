import React, { useEffect } from "react";

interface DayInputProps {
    day: string;
    setDay: (day: string) => void;
    month: string;
    year: string;
}

function DayInput({ day, setDay, month, year }: DayInputProps) {

    const isLeap = (year: number): boolean => {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    };

    const calcLastDayOfMonth = (month: string, year: string): number => {
        switch (month) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                return 31;
            case "4":
            case "6":
            case "9":
            case "11":
                return 30;
            case "2":
                return isLeap(Number(year)) ? 29 : 28;
            default:
                return 31;
        }
    };

    useEffect(() => {
        const lastDay = calcLastDayOfMonth(month, year);
        const numberValue = Number(day);
        if (numberValue > lastDay) {
            setDay(String(lastDay));
        }
    }, [month, year, day, setDay]);

    const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        const lastDay = calcLastDayOfMonth(month, year);
        
        if (!isNaN(numberValue) && numberValue >= 0 && numberValue <= lastDay && value.trim() !== "") {
            setDay(value);
        } else if (numberValue > lastDay) {
            setDay(String(lastDay));
        }
    };

    return (
        <div className="input">
            <label>DAY</label>
            <input
                aria-label="day input"
                onChange={handleDay}
                value={day}
                placeholder="DD"
            />
        </div>
    );
}

export default DayInput;