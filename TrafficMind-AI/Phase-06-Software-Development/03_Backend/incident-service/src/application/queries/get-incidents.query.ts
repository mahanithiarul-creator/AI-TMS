import { Injectable, Inject } from '@nestjs/common';
import { IncidentRepository, INCIDENT_REPOSITORY } from '../../domain/incident.repository.interface';
import { Incident, IncidentStatus } from '../../domain/incident.entity';

export class GetActiveIncidentsQuery {
  // Empty query payload. In reality, it might contain pagination/filters.
}

@Injectable()
export class GetActiveIncidentsQueryHandler {
  constructor(
    @Inject(INCIDENT_REPOSITORY)
    private readonly incidentRepository: IncidentRepository,
  ) {}

  async execute(query: GetActiveIncidentsQuery): Promise<Incident[]> {
    // A CQRS Read Model might fetch from a materialized view.
    // For Sprint 2, we query the domain repository.
    const all = await this.incidentRepository.findAll();
    return all.filter(inc => inc.status !== IncidentStatus.CLOSED);
  }
}
