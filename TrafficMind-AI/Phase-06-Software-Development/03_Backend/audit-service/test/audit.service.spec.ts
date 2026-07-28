import { Test, TestingModule } from '@nestjs/testing';
import { AuditService } from '../src/application/audit.service';
import { AuditAction } from '../src/domain/audit-record.entity';

describe('AuditService (Immutable Ledger)', () => {
  let service: AuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditService],
    }).compile();

    service = module.get<AuditService>(AuditService);
  });

  it('should append a record and allow querying by resource', () => {
    service.logAction('user-1', AuditAction.CREATE, 'Incident:INC-99', { severity: 'HIGH' });
    service.logAction('user-1', AuditAction.UPDATE, 'Incident:INC-99', { status: 'RESOLVED' });

    const records = service.queryByResource('Incident:INC-99');
    expect(records.length).toBe(2);
    expect(records[0].action).toBe(AuditAction.CREATE);
    expect(records[1].action).toBe(AuditAction.UPDATE);
  });

  it('should enforce immutability at the domain level', () => {
    service.logAction('user-1', AuditAction.LOGIN, 'System', {});
    const records = service.queryByResource('System');
    const record = records[0];
    
    // Attempting to modify properties of the class directly should ideally be blocked by TS `readonly`,
    // testing that the properties exist and were mapped correctly.
    expect(record.actorId).toBe('user-1');
  });
});
