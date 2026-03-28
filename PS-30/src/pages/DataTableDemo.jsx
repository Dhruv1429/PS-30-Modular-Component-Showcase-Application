import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/common/Table.css';
import Button from '../components/common/Button';

const DataTableDemo = () => {
  const navigate = useNavigate();
  const [dataState, setDataState] = useState({
    status: 'idle', 
    users: [],
    error: null
  });

  const fetchUsers = async () => {
    setDataState({ status: 'loading', users: [], error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Failed to fetch network data');
      
      const data = await response.json();
      setTimeout(() => {
        setDataState({ status: 'success', users: data.slice(0, 5), error: null });
      }, 1200);
    } catch (err) {
      setDataState({ status: 'error', users: [], error: err.message });
    }
  };

  const tableRows = useMemo(() => {
    return dataState.users.map((user) => (
      <tr key={user.id} onClick={() => navigate(`/users/${user.id}`)} style={{ cursor: 'pointer' }}>
        <td style={{ fontWeight: '500' }}>{user.name}</td>
        <td style={{ color: '#64748b' }}>{user.email}</td>
        <td>{user.company.name}</td>
        <td><span className="status-badge status-active">Active</span></td>
      </tr>
    ));
  }, [dataState.users, navigate]);

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', color: '#0f172a' }}>Data Table</h2>
          <p style={{ color: '#64748b', margin: 0 }}>Consuming REST APIs with optimized rendering.</p>
        </div>
        <Button variant="primary" onClick={fetchUsers} isDisabled={dataState.status === 'loading'}>
          {dataState.status === 'loading' ? 'Fetching API...' : 'Fetch Live Data'}
        </Button>
      </div>

      <div className="table-container" aria-live="polite">
        <table className="ps-table">
          <thead>
            <tr><th>Full Name</th><th>Email Address</th><th>Company</th><th>Status</th></tr>
          </thead>
          <tbody>
            {dataState.status === 'idle' && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Click "Fetch Live Data" to consume the API.</td></tr>}
            {dataState.status === 'loading' && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}><span style={{ color: '#2563eb', fontWeight: '500' }}>Connecting to database...</span></td></tr>}
            {dataState.status === 'error' && <tr><td colSpan="4" style={{ textAlign: 'center', padding: '40px' }}><span className="status-badge status-error">{dataState.error}</span></td></tr>}
            {dataState.status === 'success' && tableRows}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTableDemo;