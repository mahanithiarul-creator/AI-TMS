import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsService } from '../src/application/analytics.service';

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalyticsService],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
  });

  it('should calculate average resolution time correctly from events', () => {
    expect(service.getAverageResolutionTime()).toBe(0);

    service.handleIncidentResolvedEvent('INC-1', 10, 'HIGH');
    service.handleIncidentResolvedEvent('INC-2', 20, 'LOW');

    expect(service.getAverageResolutionTime()).toBe(15);
  });
});
