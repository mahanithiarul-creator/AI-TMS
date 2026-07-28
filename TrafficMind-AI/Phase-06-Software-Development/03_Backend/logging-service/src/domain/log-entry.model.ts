export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  FATAL = 'FATAL',
}

export interface LogEntry {
  traceId: string; // Distributed tracing ID
  serviceId: string; // The service emitting the log (e.g. 'incident-service')
  level: LogLevel;
  message: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}
