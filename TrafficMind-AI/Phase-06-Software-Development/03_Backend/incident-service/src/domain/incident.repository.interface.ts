import { Incident, IncidentStatus } from './incident.entity';

export interface IncidentRepository {
  save(incident: Incident): Promise<void>;
  findById(id: string): Promise<Incident | null>;
  findByStatus(status: IncidentStatus): Promise<Incident[]>;
  findAll(): Promise<Incident[]>;
}

export const INCIDENT_REPOSITORY = Symbol('INCIDENT_REPOSITORY');
