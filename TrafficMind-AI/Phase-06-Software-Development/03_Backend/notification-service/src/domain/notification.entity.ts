export enum NotificationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
}

export enum NotificationStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  FAILED = 'FAILED',
}

export class NotificationLog {
  constructor(
    public readonly id: string,
    public readonly recipient: string,
    public readonly channel: NotificationChannel,
    public readonly payload: string,
    public status: NotificationStatus,
    public readonly createdAt: Date,
    public updatedAt: Date,
    public errorDetails?: string,
  ) {}

  public markSent(): void {
    this.status = NotificationStatus.SENT;
    this.updatedAt = new Date();
  }

  public markFailed(error: string): void {
    this.status = NotificationStatus.FAILED;
    this.errorDetails = error;
    this.updatedAt = new Date();
  }
}
