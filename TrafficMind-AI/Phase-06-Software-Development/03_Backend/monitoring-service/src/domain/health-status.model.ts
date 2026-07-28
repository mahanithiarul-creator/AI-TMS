export enum HealthStatus {
  HEALTHY = 'HEALTHY',
  DEGRADED = 'DEGRADED',
  DOWN = 'DOWN',
}

export interface ServiceHealth {
  serviceId: string;
  status: HealthStatus;
  latencyMs: number;
  lastChecked: Date;
}

export interface MetricPoint {
  name: string;
  value: number;
  labels: Record<string, string>;
  timestamp: Date;
}
