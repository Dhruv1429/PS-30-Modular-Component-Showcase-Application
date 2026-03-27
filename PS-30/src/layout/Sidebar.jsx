import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header logo-container">
        <h3>PS-30 UI</h3>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'block', marginTop: '4px' }}>v2.4.0 • Enterprise</span>
      </div>
      
      <div className="sidebar-section">
        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Overview</div>
        <NavLink to="/" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"} end>
          🏠 Introduction
        </NavLink>
      </div>

      <div className="sidebar-section">
        <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#94a3b8', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '16px' }}>Components</div>
        <NavLink to="/buttons" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>
          🔘 Buttons
        </NavLink>
        <NavLink to="/cards" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>
          📦 Cards
        </NavLink>
        <NavLink to="/inputs" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>
          ⌨️ Inputs
        </NavLink>
        {/* 👇 The new Table link! 👇 */}
        <NavLink to="/tables" className={({isActive}) => isActive ? "sidebar-item active" : "sidebar-item"}>
          📊 Data Tables
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;