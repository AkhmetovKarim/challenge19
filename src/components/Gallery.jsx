import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = () => {
    // State to hold the list of tours
    const [tours, setTours] = useState([]);
    // State to track loading status
    const [loading, setLoading] = useState(true);
    // State to store error messages
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                // Start fetching, reset error state
                setLoading(true);
                setError(null);

                const response = await fetch('https://course-api.com/react-tours-project');
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }

                const data = await response.json();
                setTours(data); // Update tours state with fetched data
            } catch (error) {
                setError(error.message); // Set error message if fetch fails
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchTours();
    }, []);

    // Show loading message while data is being fetched
    if (loading) {
        return <p>Loading tours...</p>;
    }

    // Show error message if fetch fails
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Render the list of tours if data is successfully fetched
    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} />
            ))}
        </div>
    );
};

export default Gallery;