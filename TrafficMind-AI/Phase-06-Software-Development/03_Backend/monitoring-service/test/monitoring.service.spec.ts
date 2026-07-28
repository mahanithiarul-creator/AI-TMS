import { Test, TestingModule } from '@nestjs/testing';
import { MonitoringService } from '../src/application/monitoring.service';
import { HealthStatus } from '../src/domain/health-status.model';

describe('MonitoringService', () => {
  let service: MonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitoringService],
    }).compile();

    service = module.get<MonitoringService>(MonitoringService);
  });

  it('should mark a service as DEGRADED if latency is over 2000ms', () => {
    service.registerHeartbeat('incident-service', 2500);
    const health = service.getSystemHealth();
    
    expect(health.length).toBe(1);
    expect(health[0].serviceId).toBe('incident-service');
    expect(health[0].status).toBe(HealthStatus.DEGRADED);
  });

  it('should mark a service as HEALTHY if latency is under 2000ms', () => {
    service.registerHeartbeat('workflow-engine', 150);
    const health = service.getSystemHealth();
    
    expect(health[0].serviceId).toBe('workflow-engine');
    expect(health[0].status).toBe(HealthStatus.HEALTHY);
  });
});
