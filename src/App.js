import React, { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            if (response.status >= 400) {
                const error = new Error(response.statusText);
                throw error;
            }
            const data = await response.json();
            setLoading(false);
            setTours(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }
    if (tours.length === 0) {
        return (
            <main>
                <section>
                    <div className='title'>
                        <h2>no tours left</h2>
                        <button onClick={() => fetchData()} className='btn'>
                            refresh
                        </button>
                    </div>
                </section>
            </main>
        );
    }
    const handleDelete = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };
    return (
        <main>
            <section>
                <div className='title'>
                    <h2>our tours</h2>
                    <div className='underline'></div>
                </div>
                <Tours tours={tours} onDelete={handleDelete} />
            </section>
        </main>
    );
}

export default App;
