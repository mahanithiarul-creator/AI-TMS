import { Injectable, Logger } from '@nestjs/common';
import { AuditRecord, AuditAction } from '../domain/audit-record.entity';

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);
  
  // Append-only datastore simulation
  private ledger: AuditRecord[] = [];

  /**
   * Appends an immutable record to the global audit ledger.
   */
  public logAction(actorId: string, action: AuditAction, resource: string, payload: any): string {
    const id = `AUD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const snapshot = JSON.stringify(payload);
    
    const record = new AuditRecord(
      id,
      actorId,
      action,
      resource,
      snapshot,
      new Date(),
    );

    this.ledger.push(record);
    this.logger.log(`[AUDIT] ${action} on ${resource} by ${actorId}`);
    
    return id;
  }

  /**
   * Queries the immutable ledger (Read-Only)
   */
  public queryByResource(resource: string): AuditRecord[] {
    return this.ledger.filter(record => record.resource === resource);
  }
}
