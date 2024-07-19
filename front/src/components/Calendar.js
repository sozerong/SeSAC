import { useState } from 'react';

const Calendar = ({ records }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [record, setRecord] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        const record = records.find(r => r.date === date);
        setRecord(record ? record.content : 'No record found for this date');
    };

    return (
        <div>
            <h1>Calendar</h1>
            <div>
                {/* 날짜를 클릭할 수 있는 달력 구현 */}
                {Array(31).fill(null).map((_, index) => (
                    <button key={index} onClick={() => handleDateClick(`2024-07-${index + 1}`)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            {selectedDate && (
                <div>
                    <h2>Record for {selectedDate}</h2>
                    <p>{record}</p>
                </div>
            )}
        </div>
    );
};

export default Calendar;
