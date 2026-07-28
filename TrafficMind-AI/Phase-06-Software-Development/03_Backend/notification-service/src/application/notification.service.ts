import { Injectable, Logger } from '@nestjs/common';
import { NotificationLog, NotificationChannel, NotificationStatus } from '../domain/notification.entity';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  private logs: Map<string, NotificationLog> = new Map();

  /**
   * Dispatches a notification via the requested channel.
   * Isolates 3rd-party provider logic (Twilio, SendGrid) from core domains.
   */
  async dispatch(recipient: string, channel: NotificationChannel, message: string): Promise<string> {
    const id = `NOTIF-${Date.now()}`;
    const log = new NotificationLog(
      id,
      recipient,
      channel,
      message,
      NotificationStatus.PENDING,
      new Date(),
      new Date(),
    );

    this.logger.log(`Dispatching [${channel}] to ${recipient}: ${message}`);

    try {
      // Mocking 3rd-party API call
      if (recipient === 'invalid@error.com') throw new Error('Provider rejected recipient');
      
      log.markSent();
      this.logger.log(`Notification ${id} SENT successfully.`);
    } catch (error: any) {
      log.markFailed(error.message);
      this.logger.error(`Notification ${id} FAILED: ${error.message}`);
    }

    this.logs.set(id, log);
    return id;
  }

  getLog(id: string): NotificationLog | undefined {
    return this.logs.get(id);
  }
}
