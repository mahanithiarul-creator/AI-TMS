export enum MetricType {
  INCIDENT_RESOLUTION_TIME = 'INCIDENT_RESOLUTION_TIME',
  INTERSECTION_CONGESTION = 'INTERSECTION_CONGESTION',
  SYSTEM_UPTIME = 'SYSTEM_UPTIME',
}

export class MetricDataPoint {
  constructor(
    public readonly timestamp: Date,
    public readonly value: number,
    public readonly tags: Record<string, string>,
  ) {}
}

export class Metric {
  constructor(
    public readonly id: string,
    public readonly type: MetricType,
    public dataPoints: MetricDataPoint[] = [],
  ) {}

  public addDataPoint(value: number, tags: Record<string, string>): void {
    this.dataPoints.push(new MetricDataPoint(new Date(), value, tags));
  }
}
