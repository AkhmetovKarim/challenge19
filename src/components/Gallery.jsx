import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';

const Gallery = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error fetching tours:', error);
            }
        };

        fetchTours();
    }, []);

    return (
        <div className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
            ))}
        </div>
    );
};

export default Gallery;