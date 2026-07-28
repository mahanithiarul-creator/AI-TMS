import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Camera, CameraStatus } from '../domain/camera.entity';
import { CameraRepository, CAMERA_REPOSITORY } from '../domain/camera.repository.interface';

@Injectable()
export class CameraService {
  constructor(
    @Inject(CAMERA_REPOSITORY)
    private readonly cameraRepository: CameraRepository,
  ) {}

  async registerCamera(name: string, latitude: number, longitude: number, resolution: string, frameRate: number): Promise<string> {
    const id = `CAM-${Date.now()}`;
    const camera = new Camera(
      id,
      name,
      CameraStatus.OFFLINE,
      latitude,
      longitude,
      resolution,
      frameRate,
      new Date(),
      new Date(),
    );
    await this.cameraRepository.save(camera);
    return id;
  }

  async processHeartbeat(id: string): Promise<void> {
    const camera = await this.cameraRepository.findById(id);
    if (!camera) {
      throw new NotFoundException(`Camera ${id} not found`);
    }
    camera.updateStatus(CameraStatus.ONLINE);
    await this.cameraRepository.save(camera);
  }
}
