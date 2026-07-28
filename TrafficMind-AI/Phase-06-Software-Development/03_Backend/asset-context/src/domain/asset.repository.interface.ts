import { Asset } from './asset.entity';

export interface AssetRepository {
  save(asset: Asset): Promise<void>;
  findById(id: string): Promise<Asset | null>;
  findAll(): Promise<Asset[]>;
}

export const ASSET_REPOSITORY = Symbol('ASSET_REPOSITORY');
