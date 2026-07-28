import { Test, TestingModule } from '@nestjs/testing';
import { LoggingService } from '../src/application/logging.service';
import { LogLevel } from '../src/domain/log-entry.model';

describe('LoggingService (Structured Ingress)', () => {
  let service: LoggingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggingService],
    }).compile();

    service = module.get<LoggingService>(LoggingService);
  });

  it('should reject log if traceId is missing (enforcing tracing)', () => {
    expect(() => {
      service.ingestLog({
        traceId: '', // Invalid
        serviceId: 'incident-service',
        level: LogLevel.INFO,
        message: 'Something happened',
        timestamp: new Date()
      });
    }).toThrow('Missing traceId for distributed tracing');
  });

  it('should accept valid structured log', () => {
    expect(() => {
      service.ingestLog({
        traceId: 'trace-12345',
        serviceId: 'incident-service',
        level: LogLevel.ERROR,
        message: 'Database connection failed',
        timestamp: new Date(),
        metadata: { port: 5432 }
      });
    }).not.toThrow();
  });
});
