import React, { memo } from 'react';
import './Card.css';

const Card = ({ title, children, footer, style }) => {
  return (
    <div className="card" style={style}>
      {title && (
        <div className="card-header">
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a' }}>{title}</h3>
        </div>
      )}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default memo(Card);