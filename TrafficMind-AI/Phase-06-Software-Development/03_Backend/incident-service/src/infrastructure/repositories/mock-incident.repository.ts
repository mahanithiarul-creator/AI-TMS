import { Injectable } from '@nestjs/common';
import { IncidentRepository } from '../../domain/incident.repository.interface';
import { Incident, IncidentStatus } from '../../domain/incident.entity';

@Injectable()
export class MockIncidentRepository implements IncidentRepository {
  private readonly incidents: Map<string, Incident> = new Map();

  async save(incident: Incident): Promise<void> {
    this.incidents.set(incident.id, incident);
  }

  async findById(id: string): Promise<Incident | null> {
    return this.incidents.get(id) || null;
  }

  async findByStatus(status: IncidentStatus): Promise<Incident[]> {
    return Array.from(this.incidents.values()).filter(inc => inc.status === status);
  }

  async findAll(): Promise<Incident[]> {
    return Array.from(this.incidents.values());
  }
}
