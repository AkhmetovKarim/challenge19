import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TourCard = ({ id, name, info, price, image, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-card__image" />
            <div className="tour-card__details">
                <h2 className="tour-card__name">{name}</h2>
                <h3 className="tour-card__price">${price}</h3>
                <p className="tour-card__info">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        className="tour-card__toggle"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? ' Show Less' : ' Read More'}
                    </button>
                </p>
                <button
                    className="tour-card__remove"
                    onClick={() => onRemove(id)}
                >
                    Not Interested
                </button>
            </div>
        </div>
    );
};

TourCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default TourCard;