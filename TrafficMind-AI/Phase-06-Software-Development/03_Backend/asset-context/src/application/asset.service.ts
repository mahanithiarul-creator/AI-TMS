import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Asset, AssetStatus, AssetType } from '../domain/asset.entity';
import { AssetRepository, ASSET_REPOSITORY } from '../domain/asset.repository.interface';

@Injectable()
export class AssetService {
  constructor(
    @Inject(ASSET_REPOSITORY)
    private readonly assetRepository: AssetRepository,
  ) {}

  async registerAsset(name: string, type: AssetType, latitude: number, longitude: number): Promise<string> {
    const id = `AST-${Date.now()}`;
    const asset = new Asset(
      id,
      name,
      type,
      AssetStatus.OPERATIONAL,
      latitude,
      longitude,
      new Date(),
      new Date(),
    );
    await this.assetRepository.save(asset);
    return id;
  }

  async reportAssetFault(id: string): Promise<void> {
    const asset = await this.assetRepository.findById(id);
    if (!asset) {
      throw new NotFoundException(`Asset ${id} not found`);
    }
    asset.reportFault();
    await this.assetRepository.save(asset);
  }
}
