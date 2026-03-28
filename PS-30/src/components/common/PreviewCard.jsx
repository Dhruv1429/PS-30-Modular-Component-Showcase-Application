import React from 'react';
import './PreviewCard.css';

const PreviewCard = ({ title, description, children }) => {
  return (
    <div className="preview-card">
      <div className="preview-header">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="preview-content">
        {children}
      </div>
    </div>
  );
};

export default PreviewCard;