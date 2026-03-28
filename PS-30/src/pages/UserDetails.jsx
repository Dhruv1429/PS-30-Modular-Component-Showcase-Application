import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const UserDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div style={{ padding: '40px', fontSize: '1.2rem' }}>Loading user profile...</div>;

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
      <Button variant="secondary" onClick={() => navigate('/tables')} style={{ marginBottom: '24px' }}>
        &larr; Back to Data Table
      </Button>
      
      <h2 style={{ fontSize: '2.5rem', marginBottom: '8px', color: '#0f172a' }}>{user.name}</h2>
      <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '1.1rem' }}>@{user.username} • {user.company.name}</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <Card title="Contact Information">
          <p style={{ margin: '8px 0' }}><strong>Email:</strong> <a href={`mailto:${user.email}`} style={{ color: '#2563eb' }}>{user.email}</a></p>
          <p style={{ margin: '8px 0' }}><strong>Phone:</strong> {user.phone}</p>
          <p style={{ margin: '8px 0' }}><strong>Website:</strong> {user.website}</p>
        </Card>
        <Card title="Address Details">
          <p style={{ margin: '8px 0' }}>{user.address.street}, {user.address.suite}</p>
          <p style={{ margin: '8px 0' }}>{user.address.city}, {user.address.zipcode}</p>
        </Card>
      </div>
    </div>
  );
};

export default UserDetails;