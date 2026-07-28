import { Injectable, Logger } from '@nestjs/common';
import { ReportExecution, ReportFormat, ReportStatus } from '../domain/report.entity';

@Injectable()
export class ReportService {
  private readonly logger = new Logger(ReportService.name);
  private reports: Map<string, ReportExecution> = new Map();

  /**
   * Generates a report.
   * Note: This service DEPENDS on Analytics (Downward dependency).
   * It queries Analytics for aggregated data, formats it, and stores the document.
   */
  public async generateReport(name: string, format: ReportFormat): Promise<string> {
    const id = `REP-${Date.now()}`;
    const report = new ReportExecution(
      id,
      name,
      format,
      ReportStatus.GENERATING,
      new Date(),
    );
    this.reports.set(id, report);

    this.logger.log(`Starting generation of ${format} report: ${name}`);

    // Simulate async generation process (Querying Analytics, rendering PDF)
    setTimeout(() => {
      // Mock successful generation
      const mockUrl = `https://trafficmind.storage/reports/${id}.${format.toLowerCase()}`;
      report.markCompleted(mockUrl);
      this.logger.log(`Report ${id} generated successfully at ${mockUrl}`);
    }, 100); // 100ms fake delay

    return id;
  }

  public getReport(id: string): ReportExecution | undefined {
    return this.reports.get(id);
  }
}
