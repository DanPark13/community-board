import React from "react";
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({imageSrc, title, subtitle}) => {
    return (
        <div className="card">
            <div className="card-image-container">
                <img src={imageSrc} alt={title} className="card-image"></img>
                <h2 className="card-title">{title}</h2>
                <h3 className="card-subtitle">{subtitle}</h3>
            </div>
            <Link to={`timetables/${title.toLowerCase()}`}>
                <button className="card-btn">View Schedule</button>
            </Link>
        </div>
    );
}

export default Card;