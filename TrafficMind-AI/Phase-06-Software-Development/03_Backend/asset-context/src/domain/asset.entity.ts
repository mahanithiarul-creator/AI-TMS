export enum AssetType {
  TRAFFIC_LIGHT = 'TRAFFIC_LIGHT',
  VMS_BOARD = 'VMS_BOARD',
  SPEED_SENSOR = 'SPEED_SENSOR',
}

export enum AssetStatus {
  OPERATIONAL = 'OPERATIONAL',
  MAINTENANCE = 'MAINTENANCE',
  FAULTY = 'FAULTY',
}

export class Asset {
  constructor(
    public readonly id: string,
    public name: string,
    public type: AssetType,
    public status: AssetStatus,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public reportFault(): void {
    this.status = AssetStatus.FAULTY;
    this.updatedAt = new Date();
  }
}
