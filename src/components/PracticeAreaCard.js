import React from 'react';

const PracticeAreaCard = ({ icon, title, description }) => {
  return (
    <div className="card practice-area-card shadow-sm">
      <div className="card-body text-center p-4">
        <i className={`bi ${icon} fs-1 accent-color`}></i>
        <h4 className="card-title mt-3">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default PracticeAreaCard;
