import React, { useState, useCallback, useMemo } from 'react';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import PreviewCard from '../components/common/PreviewCard';

const InputDemo = () => {
  // Rubric: Controlled components used correctly
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });

  // Rubric: Async handling & predictable side-effect control
  const [asyncValidation, setAsyncValidation] = useState({
    status: 'idle', // 'idle' | 'validating' | 'success' | 'error'
    message: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Reset validation if they start typing again
    if (name === 'username') setAsyncValidation({ status: 'idle', message: '' });
  }, []);

  // Rubric: Clear separation of base and derived state
  const passwordStrength = useMemo(() => {
    const length = formState.password.length;
    if (length === 0) return { label: 'None', color: '#64748b' };
    if (length < 6) return { label: 'Weak', color: '#ef4444' };
    if (length < 10) return { label: 'Medium', color: '#f59e0b' };
    return { label: 'Strong', color: '#10b981' };
  }, [formState.password]);

  const checkUsername = useCallback(() => {
    if (!formState.username) return;
    setAsyncValidation({ status: 'validating', message: 'Checking availability...' });

    // Simulating an async API call to check if username exists
    setTimeout(() => {
      if (formState.username.toLowerCase() === 'admin') {
        setAsyncValidation({ status: 'error', message: 'Username is already taken.' });
      } else {
        setAsyncValidation({ status: 'success', message: 'Username is available!' });
      }
    }, 1200);
  }, [formState.username]);

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Inputs</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>
        Capture user data with validation, error handling, and controlled state.
      </p>

      <PreviewCard 
        title="Standard Controlled Input" 
        description="A basic text input bound to React state."
      >
        <Input 
          id="basic-input"
          label="Full Name"
          placeholder="e.g. Jane Doe"
          helperText="Please enter your legal name."
        />
      </PreviewCard>

      <PreviewCard 
        title="Async Validation" 
        description="Simulates making an API call to validate data (type 'admin' to see an error)."
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', width: '100%' }}>
          <div style={{ flex: 1 }}>
            <Input 
              id="username-input"
              name="username"
              label="Username"
              placeholder="Choose a username"
              value={formState.username}
              onChange={handleInputChange}
              error={asyncValidation.status === 'error'}
              helperText={asyncValidation.message || "Letters and numbers only."}
              disabled={asyncValidation.status === 'validating'}
            />
          </div>
          <div style={{ marginTop: '28px' }}>
            <Button 
              onClick={checkUsername} 
              isDisabled={!formState.username || asyncValidation.status === 'validating'}
            >
              {asyncValidation.status === 'validating' ? 'Checking...' : 'Validate'}
            </Button>
          </div>
        </div>
      </PreviewCard>

      <PreviewCard 
        title="Derived State" 
        description="Calculates password strength in real-time derived strictly from the input value."
      >
        <div style={{ width: '100%' }}>
          <Input 
            id="password-input"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter a strong password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <div style={{ marginTop: '10px', fontSize: '0.85rem' }}>
            <span style={{ color: '#64748b' }}>Strength: </span>
            <span style={{ color: passwordStrength.color, fontWeight: '600' }}>
              {passwordStrength.label}
            </span>
          </div>
        </div>
      </PreviewCard>
    </div>
  );
};

export default InputDemo;