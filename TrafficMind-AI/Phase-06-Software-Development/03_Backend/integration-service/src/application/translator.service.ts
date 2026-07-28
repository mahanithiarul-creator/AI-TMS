import { Injectable, Logger } from '@nestjs/common';
import { LegacyTrafficLightPayload, InternalAssetStatusEvent } from '../domain/external-payload.model';

@Injectable()
export class TranslatorService {
  private readonly logger = new Logger(TranslatorService.name);

  /**
   * Anti-Corruption Layer (ACL): Translates legacy 3rd-party payload into standard internal event.
   */
  public translateLegacyTrafficLight(payload: LegacyTrafficLightPayload): InternalAssetStatusEvent {
    this.logger.log(`Translating legacy payload for intersection ${payload.intersection_id}`);
    
    // Translation logic to isolate our system from their bad data structures
    const status = payload.light_status === 'ERR' ? 'FAULTY' : 'OPERATIONAL';
    
    // We would publish this event to Kafka here.
    return {
      assetId: `AST-LEGACY-${payload.intersection_id}`,
      type: 'TRAFFIC_LIGHT',
      status,
      reportedAt: new Date(payload.timestamp),
    };
  }
}
