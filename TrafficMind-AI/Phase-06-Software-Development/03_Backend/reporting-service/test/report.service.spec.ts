import { Test, TestingModule } from '@nestjs/testing';
import { ReportService } from '../src/application/report.service';
import { ReportFormat, ReportStatus } from '../src/domain/report.entity';

describe('ReportService', () => {
  let service: ReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportService],
    }).compile();

    service = module.get<ReportService>(ReportService);
  });

  it('should generate a report asynchronously', (done) => {
    service.generateReport('Monthly KPI', ReportFormat.PDF).then(id => {
      const report = service.getReport(id);
      expect(report?.status).toBe(ReportStatus.GENERATING);

      setTimeout(() => {
        const finishedReport = service.getReport(id);
        expect(finishedReport?.status).toBe(ReportStatus.COMPLETED);
        expect(finishedReport?.downloadUrl).toBeDefined();
        done();
      }, 150);
    });
  });
});
