import { Test, TestingModule } from '@nestjs/testing';
import { AssetService } from '../src/application/asset.service';
import { ASSET_REPOSITORY, AssetRepository } from '../src/domain/asset.repository.interface';
import { Asset, AssetStatus, AssetType } from '../src/domain/asset.entity';

class MockAssetRepo implements AssetRepository {
  private assets = new Map<string, Asset>();
  async save(a: Asset) { this.assets.set(a.id, a); }
  async findById(id: string) { return this.assets.get(id) || null; }
  async findAll() { return Array.from(this.assets.values()); }
}

describe('AssetService', () => {
  let service: AssetService;
  let repo: AssetRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssetService,
        { provide: ASSET_REPOSITORY, useClass: MockAssetRepo },
      ],
    }).compile();

    service = module.get<AssetService>(AssetService);
    repo = module.get<AssetRepository>(ASSET_REPOSITORY);
  });

  it('should register an asset and set operational', async () => {
    const id = await service.registerAsset('Main Light', AssetType.TRAFFIC_LIGHT, 10, 20);
    const asset = await repo.findById(id);
    expect(asset).toBeDefined();
    expect(asset!.status).toBe(AssetStatus.OPERATIONAL);
  });

  it('should report fault and set faulty', async () => {
    const id = await service.registerAsset('Main Light', AssetType.TRAFFIC_LIGHT, 10, 20);
    await service.reportAssetFault(id);
    const asset = await repo.findById(id);
    expect(asset!.status).toBe(AssetStatus.FAULTY);
  });
});
