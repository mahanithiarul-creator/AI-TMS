export interface LegacyTrafficLightPayload {
  intersection_id: string;
  light_status: 'R' | 'Y' | 'G' | 'ERR';
  timestamp: number;
}

export interface InternalAssetStatusEvent {
  assetId: string;
  type: 'TRAFFIC_LIGHT';
  status: 'OPERATIONAL' | 'FAULTY';
  reportedAt: Date;
}
