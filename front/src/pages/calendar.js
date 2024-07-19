import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Calendar from '../components/Calendar';

const CalendarPage = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        // 데이터를 로드하는 함수
        const fetchRecords = async () => {
            const res = await fetch('/api/records');
            const data = await res.json();
            setRecords(data);
        };
        fetchRecords();
    }, []);

    return (
        <div>
            <Calendar records={records} />
            <Navbar />
        </div>
    );
};

export default CalendarPage;
