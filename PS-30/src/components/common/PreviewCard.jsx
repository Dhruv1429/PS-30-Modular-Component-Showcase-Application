import React from 'react';
import './PreviewCard.css';

const PreviewCard = ({ title, description, children }) => {
  return (
    <div className="preview-card">
      <div className="preview-header">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
      <div className="preview-body">
        {/* This is where your component lives */}
        <div className="component-stage">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;