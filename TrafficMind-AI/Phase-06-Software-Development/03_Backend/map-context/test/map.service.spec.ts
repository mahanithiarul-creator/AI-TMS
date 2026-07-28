import { Test, TestingModule } from '@nestjs/testing';
import { MapService } from '../src/application/map.service';

describe('MapService', () => {
  let service: MapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapService],
    }).compile();

    service = module.get<MapService>(MapService);
  });

  it('should find Downtown Core zone for coordinates inside bounding box', () => {
    const zone = service.getZoneForCoordinate(10.5, 20.5);
    expect(zone).toBeDefined();
    expect(zone!.name).toBe('Downtown Core');
  });

  it('should return null for coordinates outside bounding box', () => {
    const zone = service.getZoneForCoordinate(99.0, 99.0);
    expect(zone).toBeNull();
  });
});
