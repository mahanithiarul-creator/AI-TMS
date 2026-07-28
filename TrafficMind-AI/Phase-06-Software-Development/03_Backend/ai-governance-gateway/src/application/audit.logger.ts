import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuditLogger {
  private readonly logger = new Logger('AI-Audit');

  public logSubmission(recommendationId: string, modelVersion: string): void {
    this.logger.log(`[SUBMIT] Recommendation ${recommendationId} received from model ${modelVersion}.`);
  }

  public logPolicyViolation(recommendationId: string, reason: string): void {
    this.logger.warn(`[POLICY_VIOLATION] Recommendation ${recommendationId} failed governance: ${reason}`);
  }

  public logApproval(recommendationId: string, userId: string): void {
    this.logger.log(`[APPROVED] Recommendation ${recommendationId} explicitly APPROVED by human operator ${userId}.`);
  }

  public logRejection(recommendationId: string, userId: string): void {
    this.logger.log(`[REJECTED] Recommendation ${recommendationId} explicitly REJECTED by human operator ${userId}.`);
  }
}
