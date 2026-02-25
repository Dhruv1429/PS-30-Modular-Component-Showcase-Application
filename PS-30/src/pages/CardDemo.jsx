import React, { useState, useMemo, useCallback } from 'react';
import Card from '../components/common/Card'; 
import Button from '../components/common/Button'; 
import PreviewCard from '../components/common/PreviewCard'; 

const CardDemo = () => {
  const [dashboardState, setDashboardState] = useState({
    status: 'idle', 
    data: null,
    error: null
  });

  const fetchDashboardData = useCallback(() => {
    setDashboardState({ status: 'loading', data: null, error: null });

    setTimeout(() => {
      const rand = Math.random();
      
      if (rand > 0.6) {
        setDashboardState({ 
          status: 'success', 
          data: { projectName: 'PS-30 UI Kit', tasksDone: 18, tasksTotal: 24 },
          error: null 
        });
      } else if (rand > 0.3) {
        setDashboardState({ status: 'empty', data: null, error: null }); 
      } else {
        setDashboardState({ status: 'error', data: null, error: 'Failed to connect to database.' }); 
      }
    }, 1500);
  }, []);

  const completionPercentage = useMemo(() => {
    if (!dashboardState.data) return 0;
    const { tasksDone, tasksTotal } = dashboardState.data;
    return Math.round((tasksDone / tasksTotal) * 100);
  }, [dashboardState.data]);

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Cards</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>
        Flexible containers for grouping related content and actions.
      </p>

      <PreviewCard 
        title="Basic Structure" 
        description="A standard card with a header, body, and footer."
      >
        <Card 
          title="Account Settings" 
          footer={<Button variant="primary" size="small">Save Changes</Button>}
        >
          Manage your profile details, security preferences, and notification settings here.
        </Card>
      </PreviewCard>

      <PreviewCard 
        title="Async Data & Derived State" 
        description="Click to fetch data. Demonstrates loading, empty, error, and success states with derived percentage calculations."
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
          <Button onClick={fetchDashboardData} isDisabled={dashboardState.status === 'loading'}>
            {dashboardState.status === 'loading' ? 'Fetching...' : 'Fetch Project Stats'}
          </Button>

          {dashboardState.status === 'idle' && (
            <Card title="Project Overview"><p>Click the button above to load your active project data.</p></Card>
          )}

          {dashboardState.status === 'loading' && (
            <Card title="Loading..."><p style={{ color: '#94a3b8' }}>Establishing secure connection...</p></Card>
          )}

          {dashboardState.status === 'error' && (
            <Card title="Connection Error" style={{ border: '1px solid #ef4444' }}>
              <p style={{ color: '#ef4444', fontWeight: '500' }}>{dashboardState.error}</p>
            </Card>
          )}

          {dashboardState.status === 'empty' && (
            <Card title="No Active Projects">
              <p>You currently don't have any tasks assigned to you. Enjoy the break!</p>
            </Card>
          )}

          {dashboardState.status === 'success' && dashboardState.data && (
            <Card 
              title={dashboardState.data.projectName}
              footer={<span style={{ fontSize: '0.85rem', color: '#64748b' }}>Last updated just now</span>}
            >
              <div style={{ marginBottom: '12px' }}>
                <strong>Progress:</strong> {dashboardState.data.tasksDone} / {dashboardState.data.tasksTotal} Tasks
              </div>
              
              <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '4px', height: '8px' }}>
                <div style={{ 
                  width: `${completionPercentage}%`, 
                  background: '#2563eb', 
                  height: '100%', 
                  borderRadius: '4px',
                  transition: 'width 0.5s ease-in-out'
                }} />
              </div>
              <p style={{ textAlign: 'right', fontSize: '0.85rem', marginTop: '4px', color: '#2563eb', fontWeight: '600' }}>
                {completionPercentage}% Complete
              </p>
            </Card>
          )}
        </div>
      </PreviewCard>
    </div>
  );
};

export default CardDemo;