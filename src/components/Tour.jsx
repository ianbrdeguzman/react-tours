import React, { useState } from 'react';

const Tour = (props) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className='single-tour'>
            <img src={props.tour.image} alt={props.tour.image} />
            <footer>
                <div className='tour-info'>
                    <h4>{props.tour.name}</h4>
                    <h4 className='tour-price'>{props.tour.price}</h4>
                </div>
                <p>
                    {!readMore
                        ? props.tour.info.substring(0, 200)
                        : props.tour.info}
                    ...
                    <button onClick={() => setReadMore(!readMore)}>
                        {!readMore ? 'read more' : 'show less'}
                    </button>
                </p>
                <button
                    onClick={() => props.onDelete(props.tour.id)}
                    className='delete-btn'
                >
                    Not interested
                </button>
            </footer>
        </article>
    );
};

export default Tour;
