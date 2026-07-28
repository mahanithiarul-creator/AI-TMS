import React, { useState, useEffect } from 'react';
import { IncidentList } from '../components/IncidentList';
import { Incident } from '../../core/models/incident.model';

export const DashboardPage: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    // In Sprint 3, this will be replaced with the actual useIncidents() hook from the application layer.
    // For Sprint 2, we establish the clean UI boundary.
    setIncidents([]);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#1a1a2e', color: 'white', minHeight: '100vh' }}>
      <h1>TrafficMind AI Dashboard (CMP-001)</h1>
      <IncidentList incidents={incidents} />
    </div>
  );
};
