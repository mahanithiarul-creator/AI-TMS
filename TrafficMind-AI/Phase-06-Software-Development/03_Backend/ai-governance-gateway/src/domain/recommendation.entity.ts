export enum RecommendationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ABSTAINED = 'ABSTAINED',
}

export class AiRecommendation {
  constructor(
    public readonly id: string,
    public readonly incidentId: string,
    public readonly suggestedAction: string,
    public readonly confidenceScore: number,
    public readonly explanation: string,
    public readonly modelVersion: string,
    public status: RecommendationStatus,
    public readonly createdAt: Date,
    public updatedAt: Date,
    public approvedByUserId?: string,
  ) {}

  public approve(userId: string): void {
    if (this.status !== RecommendationStatus.PENDING) {
      throw new Error(`Cannot approve a recommendation in state: ${this.status}`);
    }
    this.status = RecommendationStatus.APPROVED;
    this.approvedByUserId = userId;
    this.updatedAt = new Date();
  }

  public reject(userId?: string): void {
    if (this.status !== RecommendationStatus.PENDING) {
      throw new Error(`Cannot reject a recommendation in state: ${this.status}`);
    }
    this.status = RecommendationStatus.REJECTED;
    if (userId) this.approvedByUserId = userId; // Tracking who rejected it
    this.updatedAt = new Date();
  }

  public abstain(): void {
    this.status = RecommendationStatus.ABSTAINED;
    this.updatedAt = new Date();
  }
}
