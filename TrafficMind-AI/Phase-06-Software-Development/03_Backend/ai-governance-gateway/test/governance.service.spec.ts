import { Test, TestingModule } from '@nestjs/testing';
import { GovernanceService } from '../src/application/governance.service';
import { AuditLogger } from '../src/application/audit.logger';
import { RecommendationStatus } from '../src/domain/recommendation.entity';

describe('GovernanceService (Zero-Trust AI)', () => {
  let service: GovernanceService;
  let auditLogger: AuditLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GovernanceService,
        {
          provide: AuditLogger,
          useValue: {
            logSubmission: jest.fn(),
            logPolicyViolation: jest.fn(),
            logApproval: jest.fn(),
            logRejection: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GovernanceService>(GovernanceService);
    auditLogger = module.get<AuditLogger>(AuditLogger);
  });

  it('should force ABSTAINED if confidence is below 0.85', () => {
    const id = service.submitRecommendation('INC-1', 'Change Light', 0.80, 'Valid explanation string over 20 chars.', 'v1.0');
    const rec = service.getRecommendation(id);
    expect(rec?.status).toBe(RecommendationStatus.ABSTAINED);
    expect(auditLogger.logPolicyViolation).toHaveBeenCalled();
  });

  it('should force ABSTAINED if explanation is too short', () => {
    const id = service.submitRecommendation('INC-1', 'Change Light', 0.99, 'Too short', 'v1.0');
    const rec = service.getRecommendation(id);
    expect(rec?.status).toBe(RecommendationStatus.ABSTAINED);
    expect(auditLogger.logPolicyViolation).toHaveBeenCalled();
  });

  it('should hold in PENDING if policies pass (No Autonomous Action)', () => {
    const id = service.submitRecommendation('INC-1', 'Change Light', 0.95, 'This is a sufficiently long explanation for the AI decision.', 'v1.0');
    const rec = service.getRecommendation(id);
    expect(rec?.status).toBe(RecommendationStatus.PENDING);
    expect(auditLogger.logPolicyViolation).not.toHaveBeenCalled();
  });

  it('should allow human approval on PENDING recommendation', () => {
    const id = service.submitRecommendation('INC-1', 'Change Light', 0.95, 'This is a sufficiently long explanation for the AI decision.', 'v1.0');
    service.approveRecommendation(id, 'user-123');
    const rec = service.getRecommendation(id);
    expect(rec?.status).toBe(RecommendationStatus.APPROVED);
    expect(rec?.approvedByUserId).toBe('user-123');
    expect(auditLogger.logApproval).toHaveBeenCalledWith(id, 'user-123');
  });

  it('should not allow human approval on ABSTAINED recommendation', () => {
    const id = service.submitRecommendation('INC-1', 'Change Light', 0.80, 'Valid explanation string over 20 chars.', 'v1.0');
    expect(() => service.approveRecommendation(id, 'user-123')).toThrow('Cannot approve a recommendation in state: ABSTAINED');
  });
});
