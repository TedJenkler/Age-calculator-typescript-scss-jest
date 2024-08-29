interface MonthInputProps {
    month: string,
    setMonth: (month: string) => void
}

function MonthInput({ month, setMonth }: MonthInputProps) {
    const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        if (!isNaN(numberValue) && numberValue <= 12 && numberValue >= 0 && value.trim() !== "") {
            setMonth(value);
        }
    };

    return (
        <div className="input">
            <label>Month</label>
            <input
                aria-label="month input"
                onChange={handleMonth}
                value={month}
                placeholder="MM"
            />
        </div>
    );
}

export default MonthInput;