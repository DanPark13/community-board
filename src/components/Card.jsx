import React from "react";
import './Card.css'

const Card = ({imageSrc, title, subtitle}) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={imageSrc} alt={title} className="card-image"></img>
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{subtitle}</h3>
                <button className="card-btn">View More</button>
            </div>
        </div>
    );
}

export default Card;