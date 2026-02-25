import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ToggleLeft, Type, Box, Layers } from 'lucide-react';
import './Sidebar.css';

const SidebarItem = ({ to, icon: Icon, label }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
  >
    <Icon size={18} className="sidebar-icon" />
    <span>{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <Layers size={24} color="#3b82f6" />
          <h3>PS-30<span className="text-highlight">.ui</span></h3>
        </div>
        <p className="version-tag">v2.4.0 • Enterprise</p>
      </div>

      <div className="sidebar-section">
        <h4>Overview</h4>
        <SidebarItem to="/" icon={LayoutDashboard} label="Introduction" />
      </div>

      <div className="sidebar-section">
        <h4>Components</h4>
        <SidebarItem to="/buttons" icon={ToggleLeft} label="Buttons" />
        <SidebarItem to="/cards" icon={Box} label="Cards" />
        <SidebarItem to="/inputs" icon={Type} label="Inputs" />
      </div>
    </aside>
  );
};

export default Sidebar;