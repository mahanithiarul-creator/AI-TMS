export enum CameraStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  MAINTENANCE = 'MAINTENANCE',
}

export class Camera {
  constructor(
    public readonly id: string,
    public name: string,
    public status: CameraStatus,
    public readonly latitude: number,
    public readonly longitude: number,
    public resolution: string,
    public frameRate: number,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public updateStatus(newStatus: CameraStatus): void {
    this.status = newStatus;
    this.updatedAt = new Date();
  }
}
