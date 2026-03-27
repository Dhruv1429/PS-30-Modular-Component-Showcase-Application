import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import ButtonDemo from './pages/ButtonDemo';
import CardDemo from './pages/CardDemo';
import InputDemo from './pages/InputDemo';
// 👇 Add this exact line right here! 👇
import DataTableDemo from './pages/DataTableDemo'; 
// Add this import at the top:
import UserDetails from './pages/UserDetails';

// Add this line inside your <Routes> under the tables route:
<Route path="users/:id" element={<UserDetails />} />

// ... (the rest of your DashboardLayout and Home code stays exactly the same)
// Main Layout Wrapper (Premium CoreUI Styling)
const DashboardLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', background: '#f0f2f5' }}>
    <Sidebar />
    <main style={{ marginLeft: '256px', flex: 1, padding: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'transparent' }}>
        <Outlet />
      </div>
    </main>
  </div>
);

// 🚀 The New "Getting Started" Docs Page
const Home = () => (
  <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
    {/* Hero Section */}
    <div style={{ marginBottom: '48px', marginTop: '20px' }}>
      <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>
        Build faster with PS-30.
      </h1>
      <p style={{ color: '#64748b', fontSize: '1.25rem', maxWidth: '650px', lineHeight: '1.6' }}>
        A premium, modular React component library engineered for performance, strict state architecture, and enterprise-grade accessibility.
      </p>
    </div>

    {/* Rubric Highlights Grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
      <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px', fontWeight: '600' }}>⚡ Declarative API</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
          Strict prop contracts allow you to build dynamic, reusable UIs without duplicating code.
        </p>
      </div>
      <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px', fontWeight: '600' }}>🧠 Smart Architecture</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
          Built-in separation of base and derived state, featuring complete async side-effect control.
        </p>
      </div>
      <div style={{ background: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '8px', fontWeight: '600' }}>🚀 Highly Optimized</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
          Components utilize memoization and efficient re-rendering strategies for maximum performance.
        </p>
      </div>
    </div>

    {/* Fake Installation Guide */}
    <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0f172a', margin: 0 }}>Installation & Usage</h2>
      </div>
      
      <div style={{ padding: '24px' }}>
        <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '500' }}>1. Install the package via npm:</p>
        <div style={{ background: '#0f172a', padding: '16px 20px', borderRadius: '8px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#38bdf8', fontFamily: 'monospace', fontSize: '0.95rem' }}>$ npm install ps-30-ui --save</span>
          <span style={{ color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Bash</span>
        </div>

        <p style={{ color: '#64748b', marginBottom: '12px', fontSize: '0.95rem', fontWeight: '500' }}>2. Import and render components in your app:</p>
        <div style={{ background: '#0f172a', padding: '20px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.95rem', lineHeight: '1.6', overflowX: 'auto' }}>
          <span style={{ color: '#c678dd' }}>import</span> {'{'} Button {'}'} <span style={{ color: '#c678dd' }}>from</span> <span style={{ color: '#98c379' }}>'ps-30-ui'</span>;<br/><br/>
          <span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#61afef' }}>App</span> = () {'=>'} {'('}<br/>
          &nbsp;&nbsp;{'<'}<span style={{ color: '#e06c75' }}>Button</span> <span style={{ color: '#d19a66' }}>variant</span>=<span style={{ color: '#98c379' }}>"primary"</span> <span style={{ color: '#d19a66' }}>size</span>=<span style={{ color: '#98c379' }}>"large"</span>{'>'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Launch Project<br/>
          &nbsp;&nbsp;{'</'}<span style={{ color: '#e06c75' }}>Button</span>{'>'}<br/>
          {')'};
        </div>
      </div>
    </div>
  </div>
);
// The clean App component (No double Routers!)
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="buttons" element={<ButtonDemo />} />
        <Route path="cards" element={<CardDemo />} />
        <Route path="inputs" element={<InputDemo />} />
        {/* 👇 You just needed to add this single line! 👇 */}
        <Route path="tables" element={<DataTableDemo />} />
      </Route>
    </Routes>
  );
}

// THIS is the line that was missing!
export default App;
