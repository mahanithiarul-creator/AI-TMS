export enum ReportFormat {
  PDF = 'PDF',
  CSV = 'CSV',
}

export enum ReportStatus {
  GENERATING = 'GENERATING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export class ReportExecution {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly format: ReportFormat,
    public status: ReportStatus,
    public readonly generatedAt: Date,
    public downloadUrl?: string,
  ) {}

  public markCompleted(url: string): void {
    this.status = ReportStatus.COMPLETED;
    this.downloadUrl = url;
  }
}
