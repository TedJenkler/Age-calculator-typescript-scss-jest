import { useState } from "react";

function YearInput() {
    const [year, setYear] = useState<string>('');

    const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        const currentYear = new Date().getFullYear();
        if (!isNaN(numberValue) && numberValue <= currentYear && numberValue >= 0) {
            setYear(value);
        }
    };

    return (
        <div className="input">
            <label>Year</label>
            <input
                onChange={handleYear}
                value={year}
                placeholder="0"
            />
        </div>
    );
}

export default YearInput;