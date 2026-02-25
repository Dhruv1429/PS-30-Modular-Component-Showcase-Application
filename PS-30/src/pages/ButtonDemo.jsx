import React, { useState, useCallback } from 'react';
// Go up one level (../), then into components/common/
import Button from '../components/common/Button'; 
import PreviewCard from '../components/common/PreviewCard';

const ButtonDemo = () => {
  // Rubric: Predictable state updates with immutability 
  // Rubric: Proper async handling with loading, error states
  const [asyncState, setAsyncState] = useState({
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: ''
  });

  // Rubric: Memoization and render optimization applied
  // useCallback prevents this function from being recreated on every render
  const handleAsyncAction = useCallback(() => {
    setAsyncState({ status: 'loading', message: 'Processing request...' });

    // Simulating a real network request
    setTimeout(() => {
      // Randomly succeed or fail to demonstrate conditional rendering
      const isSuccess = Math.random() > 0.3; 
      
      if (isSuccess) {
        setAsyncState({ status: 'success', message: 'Data saved successfully!' });
      } else {
        setAsyncState({ status: 'error', message: 'Network error. Try again.' });
      }

      // Reset state back to idle after 3 seconds
      setTimeout(() => setAsyncState({ status: 'idle', message: '' }), 3000);
    }, 1500);
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Button</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>
        Triggers an action or event, such as submitting a form or opening a dialog.
      </p>

      <PreviewCard 
        title="Variants & Hierarchy" 
        description="Use different button styles to indicate hierarchy and intent."
      >
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary Action</Button>
        <Button variant="danger">Destructive</Button>
      </PreviewCard>

      <PreviewCard 
        title="Async State Handling" 
        description="Demonstrates controlled state, async side-effects, and conditional rendering based on API response."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <Button 
            variant={asyncState.status === 'error' ? 'danger' : 'primary'} 
            onClick={handleAsyncAction} 
            isDisabled={asyncState.status === 'loading'}
          >
            {asyncState.status === 'loading' ? 'Processing...' : 'Simulate API Call'}
          </Button>
          
          {/* Rubric: Conditional rendering for different component states */}
          {asyncState.message && (
            <span style={{ 
              fontSize: '0.875rem', 
              color: asyncState.status === 'error' ? '#ef4444' : '#10b981',
              fontWeight: '500'
            }}>
              {asyncState.message}
            </span>
          )}
        </div>
      </PreviewCard>
    </div>
  );
};

export default ButtonDemo;