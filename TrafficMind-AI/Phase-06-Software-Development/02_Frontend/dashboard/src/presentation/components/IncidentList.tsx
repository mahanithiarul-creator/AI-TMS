import React from 'react';
import { Incident, IncidentSeverity } from '../../core/models/incident.model';

interface IncidentListProps {
  incidents: Incident[];
}

export const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  return (
    <div className="incident-list" style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', backdropFilter: 'blur(10px)' }}>
      <h2>Active Incidents</h2>
      {incidents.length === 0 ? (
        <p>No active incidents.</p>
      ) : (
        <ul>
          {incidents.map((incident) => (
            <li key={incident.id} style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
              <strong>{incident.title}</strong> - <span style={{ color: incident.severity === IncidentSeverity.CRITICAL ? 'red' : 'orange' }}>{incident.severity}</span>
              <p>{incident.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
