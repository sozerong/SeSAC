import { useState } from 'react';

const MissingPersonSearch = ({ missingPersons }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        const filtered = missingPersons.filter(person =>
            person.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    };

    return (
        <div>
            <h1>Search Missing Persons</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {results.map((person, index) => (
                    <div key={index}>
                        <p>Name: {person.name}</p>
                        <p>Age: {person.age}</p>
                        <p>Last Seen: {person.last_seen}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MissingPersonSearch;
