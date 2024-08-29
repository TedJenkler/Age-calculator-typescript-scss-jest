import React, { useState } from 'react';

function DayInput() {
    const [day, setDay] = useState<string>('');

    const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        if (!isNaN(numberValue) && numberValue <= 31 && numberValue >= 0) {
            setDay(value);
        }
    };

    return (
        <div className="input">
            <label>DAY</label>
            <input
                onChange={handleDay}
                value={day}
                placeholder="0"
            />
        </div>
    );
}

export default DayInput;