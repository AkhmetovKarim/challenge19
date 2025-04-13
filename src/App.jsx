import React, { useState } from 'react';
import Gallery from './Gallery';

function App() {
  const [tours, setTours] = useState([
    { id: 1, name: 'Tour A', description: 'Description for Tour A' },
    { id: 2, name: 'Tour B', description: 'Description for Tour B' },
  ]);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <>
      <h1>Tour App</h1>
      <Gallery tours={tours} onRemoveTour={removeTour} />
    </>
  );
}

export default App;