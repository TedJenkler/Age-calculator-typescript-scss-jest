import { useState } from "react";

function MonthInput() {
    const [month, setMonth] = useState<string>('');

    const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        if (!isNaN(numberValue) && numberValue <= 12 && numberValue >= 0) {
            setMonth(value);
        }
    };

    return (
        <div className="input">
            <label>Month</label>
            <input
                onChange={handleMonth}
                value={month}
                placeholder="0"
            />
        </div>
    );
}

export default MonthInput;