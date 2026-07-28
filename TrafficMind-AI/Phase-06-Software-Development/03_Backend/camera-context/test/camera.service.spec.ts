import { Test, TestingModule } from '@nestjs/testing';
import { CameraService } from '../src/application/camera.service';
import { CAMERA_REPOSITORY, CameraRepository } from '../src/domain/camera.repository.interface';
import { Camera, CameraStatus } from '../src/domain/camera.entity';

class MockCameraRepo implements CameraRepository {
  private cameras = new Map<string, Camera>();
  async save(c: Camera) { this.cameras.set(c.id, c); }
  async findById(id: string) { return this.cameras.get(id) || null; }
  async findAll() { return Array.from(this.cameras.values()); }
}

describe('CameraService', () => {
  let service: CameraService;
  let repo: CameraRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CameraService,
        { provide: CAMERA_REPOSITORY, useClass: MockCameraRepo },
      ],
    }).compile();

    service = module.get<CameraService>(CameraService);
    repo = module.get<CameraRepository>(CAMERA_REPOSITORY);
  });

  it('should register a camera and set offline', async () => {
    const id = await service.registerCamera('Main St Cam', 10, 20, '1080p', 30);
    const cam = await repo.findById(id);
    expect(cam).toBeDefined();
    expect(cam!.status).toBe(CameraStatus.OFFLINE);
  });

  it('should process heartbeat and set online', async () => {
    const id = await service.registerCamera('Main St Cam', 10, 20, '1080p', 30);
    await service.processHeartbeat(id);
    const cam = await repo.findById(id);
    expect(cam!.status).toBe(CameraStatus.ONLINE);
  });
});
