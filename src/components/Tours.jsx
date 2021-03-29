import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, onDelete }) => {
    return (
        <div>
            {tours.map((tour) => {
                return <Tour tour={tour} key={tour.id} onDelete={onDelete} />;
            })}
        </div>
    );
};

export default Tours;
