import { Injectable, Logger } from '@nestjs/common';
import { LogEntry, LogLevel } from '../domain/log-entry.model';

@Injectable()
export class LoggingService {
  private readonly consoleLogger = new Logger('Central-Ingress');

  /**
   * In a real implementation, this would buffer logs and bulk-insert into Elasticsearch.
   * Here we simulate ingestion and parsing.
   */
  public ingestLog(entry: LogEntry): void {
    // Validate required structured fields
    if (!entry.traceId) throw new Error('Missing traceId for distributed tracing');
    if (!entry.serviceId) throw new Error('Missing serviceId');

    // Simulate stdout formatting for local development
    const formatted = `[${entry.timestamp.toISOString()}] [${entry.serviceId}] [${entry.level}] [Trace: ${entry.traceId}] ${entry.message}`;
    
    switch(entry.level) {
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        this.consoleLogger.error(formatted, entry.metadata);
        break;
      case LogLevel.WARN:
        this.consoleLogger.warn(formatted, entry.metadata);
        break;
      default:
        this.consoleLogger.log(formatted, entry.metadata);
    }
  }
}
