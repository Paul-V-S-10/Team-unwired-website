import React from 'react';
import './Card.css';

const Card = ({ image, altText, title, subtitle, description }) => {
  return (
    <div className='card'>
      <img src={image} alt={altText} />
      <p>{subtitle}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;