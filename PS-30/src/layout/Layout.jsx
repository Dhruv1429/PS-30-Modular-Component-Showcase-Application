import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>PS-30 Component Library</h2>
        <nav>
          <ul>
            <li><Link to="/">Home / Dashboard</Link></li>
            <li><Link to="/buttons">Button Components</Link></li>
            {/* Add more links here later */}
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet /> {/* This renders the current page */}
      </main>
    </div>
  );
};

export default Layout;