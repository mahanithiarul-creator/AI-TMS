import { Injectable, Logger } from '@nestjs/common';
import { Metric, MetricType, MetricDataPoint } from '../domain/metric.entity';

@Injectable()
export class AnalyticsService {
  private readonly logger = new Logger(AnalyticsService.name);
  private metrics: Map<MetricType, Metric> = new Map();

  constructor() {
    this.metrics.set(MetricType.INCIDENT_RESOLUTION_TIME, new Metric('M-1', MetricType.INCIDENT_RESOLUTION_TIME));
  }

  /**
   * Consumes an internal domain event (e.g., from Kafka) to update read-models.
   */
  public handleIncidentResolvedEvent(incidentId: string, resolutionTimeMinutes: number, severity: string): void {
    this.logger.log(`Processing Analytics for Incident ${incidentId}. Resolution: ${resolutionTimeMinutes}m`);
    
    const metric = this.metrics.get(MetricType.INCIDENT_RESOLUTION_TIME);
    if (metric) {
      metric.addDataPoint(resolutionTimeMinutes, { severity });
    }
  }

  public getAverageResolutionTime(): number {
    const metric = this.metrics.get(MetricType.INCIDENT_RESOLUTION_TIME);
    if (!metric || metric.dataPoints.length === 0) return 0;

    const sum = metric.dataPoints.reduce((acc, dp) => acc + dp.value, 0);
    return sum / metric.dataPoints.length;
  }
}
