interface YearInputProps {
    year: string,
    setYear: (year: string) => void
}

function YearInput({ year, setYear }: YearInputProps) {
    const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numberValue = Number(value);
        const currentYear = new Date().getFullYear();
        if (!isNaN(numberValue) && numberValue <= currentYear && numberValue >= 0 && value.trim() !== "") {
            setYear(value);
        }
    };

    return (
        <div className="input">
            <label>Year</label>
            <input
                aria-label="year input"
                onChange={handleYear}
                value={year}
                placeholder="YYYY"
            />
        </div>
    );
}

export default YearInput;