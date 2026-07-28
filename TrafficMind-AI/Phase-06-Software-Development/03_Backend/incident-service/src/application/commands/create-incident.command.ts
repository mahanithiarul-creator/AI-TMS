import { Injectable, Inject } from '@nestjs/common';
import { IncidentRepository, INCIDENT_REPOSITORY } from '../../domain/incident.repository.interface';
import { Incident, IncidentSeverity, IncidentStatus } from '../../domain/incident.entity';

export class CreateIncidentCommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly severity: IncidentSeverity,
    public readonly latitude: number,
    public readonly longitude: number,
  ) {}
}

@Injectable()
export class CreateIncidentCommandHandler {
  constructor(
    @Inject(INCIDENT_REPOSITORY)
    private readonly incidentRepository: IncidentRepository,
  ) {}

  async execute(command: CreateIncidentCommand): Promise<string> {
    const id = `INC-${Date.now()}`;
    const incident = new Incident(
      id,
      command.title,
      command.description,
      command.severity,
      IncidentStatus.OPEN,
      command.latitude,
      command.longitude,
      new Date(),
      new Date(),
    );

    await this.incidentRepository.save(incident);
    return id;
  }
}
