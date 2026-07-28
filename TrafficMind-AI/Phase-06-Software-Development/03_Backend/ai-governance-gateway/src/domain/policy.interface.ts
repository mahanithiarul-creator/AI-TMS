import { AiRecommendation } from './recommendation.entity';

export interface GovernancePolicy {
  /**
   * Evaluates the recommendation.
   * Throws an error with the policy violation reason if it fails.
   */
  evaluate(recommendation: AiRecommendation): void;
}
