import React, { useState, useCallback } from 'react';
import Button from '../components/common/Button'; 
import PreviewCard from '../components/common/PreviewCard';

const ButtonDemo = () => {
  const [loading, setLoading] = useState(false);

  const handleAsync = useCallback(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#0f172a' }}>Buttons</h2>
      <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '1.1rem' }}>
        A comprehensive suite of button components for triggering actions.
      </p>

      <PreviewCard title="Button Variants (Kinds)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', alignItems: 'center' }}>
          <strong style={{ color: '#64748b', fontSize: '0.9rem' }}>Primary</strong>
          <Button variant="primary">Primary</Button>
          <Button variant="primary">Submit</Button>
          <Button variant="primary" isDisabled>Disabled</Button>

          <strong style={{ color: '#64748b', fontSize: '0.9rem' }}>Secondary</strong>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary">Cancel</Button>
          <Button variant="secondary" isDisabled>Disabled</Button>

          <strong style={{ color: '#64748b', fontSize: '0.9rem' }}>Destructive</strong>
          <Button variant="danger">Destructive</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="danger" isDisabled>Disabled</Button>
        </div>
      </PreviewCard>

      <PreviewCard title="Interactive States & Sizes">
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={handleAsync} isDisabled={loading}>
            {loading ? 'Processing...' : 'Simulate API Call'}
          </Button>
          <div style={{ width: '1px', height: '40px', background: '#e2e8f0', margin: '0 10px' }}></div>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="medium">Medium</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </PreviewCard>
    </div>
  );
};

export default ButtonDemo;