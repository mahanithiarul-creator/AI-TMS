import { Injectable, Logger } from '@nestjs/common';
import { ServiceHealth, HealthStatus, MetricPoint } from '../domain/health-status.model';

@Injectable()
export class MonitoringService {
  private readonly logger = new Logger(MonitoringService.name);
  
  private healthRegistry: Map<string, ServiceHealth> = new Map();
  private metrics: MetricPoint[] = [];

  /**
   * Registers a heartbeat from a microservice to track uptime.
   */
  public registerHeartbeat(serviceId: string, latencyMs: number): void {
    const status = latencyMs > 2000 ? HealthStatus.DEGRADED : HealthStatus.HEALTHY;

    this.healthRegistry.set(serviceId, {
      serviceId,
      status,
      latencyMs,
      lastChecked: new Date(),
    });

    if (status === HealthStatus.DEGRADED) {
      this.logger.warn(`Service ${serviceId} is DEGRADED (Latency: ${latencyMs}ms)`);
    }
  }

  /**
   * Ingests a raw metric point for timeseries aggregation (e.g. CPU, memory)
   */
  public recordMetric(name: string, value: number, labels: Record<string, string> = {}): void {
    this.metrics.push({
      name,
      value,
      labels,
      timestamp: new Date(),
    });
  }

  public getSystemHealth(): ServiceHealth[] {
    return Array.from(this.healthRegistry.values());
  }
}
