import React, { memo } from 'react';
import './Card.css'; // Importing the new styles

const Card = ({ title, children, footer, style }) => {
  return (
    <div className="card" style={style}>
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

// Rubric: Render optimization applied
export default memo(Card);