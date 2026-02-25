import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import ButtonDemo from './pages/ButtonDemo';
import CardDemo from './pages/CardDemo';
import InputDemo from './pages/InputDemo';

// Main Layout Wrapper
const DashboardLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
    <Sidebar />
    <main style={{ marginLeft: '260px', flex: 1, padding: '40px 60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Outlet />
      </div>
    </main>
  </div>
);

// Home Page
const Home = () => (
  <div>
    <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a' }}>Welcome Back, Dev.</h1>
    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', lineHeight: '1.6' }}>
      This is the <strong>PS-30 Design System</strong>. Use the sidebar to explore the component library.
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="buttons" element={<ButtonDemo />} />
          <Route path="cards" element={<CardDemo />} />
          <Route path="inputs" element={<InputDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;