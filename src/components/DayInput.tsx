import React, { useState } from 'react';

function DayInput() {
    const [day, setDay] = useState<string>('');

    const handleDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numbervalue = Number(value);
        if(!isNaN(numbervalue) && numbervalue <= 31) {
            setDay(value);   
        }
    };

  return (
    <div className="input">
      <label>DAY</label>
      <input onChange={handleDay} value={day} placeholder="0">
      </input>
    </div>
  )
}

export default DayInput