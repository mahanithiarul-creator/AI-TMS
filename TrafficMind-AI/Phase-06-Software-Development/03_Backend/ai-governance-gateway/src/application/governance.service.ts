import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AiRecommendation, RecommendationStatus } from '../domain/recommendation.entity';
import { GovernancePolicy } from '../domain/policy.interface';
import { AuditLogger } from './audit.logger';

@Injectable()
export class GovernanceService {
  private recommendations: Map<string, AiRecommendation> = new Map();
  private readonly policies: GovernancePolicy[] = [];

  constructor(private readonly auditLogger: AuditLogger) {
    // Hardcode strict policies per zero-trust constraints
    this.policies.push({
      evaluate: (rec: AiRecommendation) => {
        if (rec.confidenceScore < 0.85) {
          throw new Error('Confidence score below 85% safety threshold');
        }
      }
    });
    this.policies.push({
      evaluate: (rec: AiRecommendation) => {
        if (!rec.explanation || rec.explanation.length < 20) {
          throw new Error('Insufficient Explainable AI payload provided');
        }
      }
    });
  }

  public submitRecommendation(
    incidentId: string,
    suggestedAction: string,
    confidenceScore: number,
    explanation: string,
    modelVersion: string,
  ): string {
    const id = `REC-${Date.now()}`;
    const rec = new AiRecommendation(
      id,
      incidentId,
      suggestedAction,
      confidenceScore,
      explanation,
      modelVersion,
      RecommendationStatus.PENDING, // Always starts pending (No autonomous execution)
      new Date(),
      new Date(),
    );

    this.auditLogger.logSubmission(id, modelVersion);

    try {
      this.policies.forEach(policy => policy.evaluate(rec));
    } catch (error: any) {
      this.auditLogger.logPolicyViolation(id, error.message);
      rec.abstain();
    }

    this.recommendations.set(id, rec);
    return id;
  }

  public approveRecommendation(id: string, userId: string): void {
    const rec = this.recommendations.get(id);
    if (!rec) throw new NotFoundException('Recommendation not found');
    
    rec.approve(userId);
    this.auditLogger.logApproval(id, userId);
    // Future: Emit event for Workflow Engine to execute the action now that a human signed off
  }

  public rejectRecommendation(id: string, userId: string): void {
    const rec = this.recommendations.get(id);
    if (!rec) throw new NotFoundException('Recommendation not found');
    
    rec.reject(userId);
    this.auditLogger.logRejection(id, userId);
  }

  public getRecommendation(id: string): AiRecommendation | undefined {
    return this.recommendations.get(id);
  }
}
