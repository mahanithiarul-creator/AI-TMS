export enum IncidentSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export enum IncidentStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  RESOLVED = 'RESOLVED',
  CLOSED = 'CLOSED',
}

export class Incident {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public severity: IncidentSeverity,
    public status: IncidentStatus,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public updateStatus(newStatus: IncidentStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
    // Domain event could be registered here
  }
}
