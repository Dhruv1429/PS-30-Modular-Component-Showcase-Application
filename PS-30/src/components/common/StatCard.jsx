// src/components/common/StatCard.jsx
import React, { memo } from 'react';
import './StatCard.css';

const StatCard = ({ variant, value, percentage, title, arrow }) => {
  return (
    <div className={`stat-card stat-card-${variant}`}>
      <div className="stat-header">
        <h2 className="stat-value">
          {value} 
          <span className="stat-percentage">
            ({percentage} {arrow === 'up' ? '↑' : '↓'})
          </span>
        </h2>
        {/* Three dots menu icon placeholder */}
        <div style={{ cursor: 'pointer', fontSize: '1.2rem', opacity: 0.8 }}>⋮</div>
      </div>
      <div className="stat-title">{title}</div>
      
      {/* Visual decoration to match the charts in the image */}
      <div className="stat-chart-decoration"></div>
    </div>
  );
};

export default memo(StatCard);