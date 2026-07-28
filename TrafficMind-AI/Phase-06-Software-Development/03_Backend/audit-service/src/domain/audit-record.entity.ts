export enum AuditAction {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  EXECUTE = 'EXECUTE',
  LOGIN = 'LOGIN',
}

export class AuditRecord {
  constructor(
    public readonly id: string,
    public readonly actorId: string, // Who did it
    public readonly action: AuditAction, // What they did
    public readonly resource: string, // To what (e.g., 'Incident:INC-123')
    public readonly payloadSnapshot: string, // Stringified JSON of the state change
    public readonly timestamp: Date,
  ) {
    // Audit Records are strictly IMMUTABLE.
    // There are no setter methods in this class by design.
  }
}
