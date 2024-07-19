import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MissingPersonSearch from '../components/MissingPersonSearch';

const MissingPage = () => {
    const [missingPersons, setMissingPersons] = useState([]);

    useEffect(() => {
        const fetchMissingPersons = async () => {
            const res = await fetch('/api/missing-persons');
            const data = await res.json();
            setMissingPersons(data);
        };
        fetchMissingPersons();
    }, []);

    return (
        <div>
            <MissingPersonSearch missingPersons={missingPersons} />
            <Navbar />
        </div>
    );
};

export default MissingPage;
