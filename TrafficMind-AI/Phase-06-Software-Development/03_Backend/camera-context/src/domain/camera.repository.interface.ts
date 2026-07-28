import { Camera } from './camera.entity';

export interface CameraRepository {
  save(camera: Camera): Promise<void>;
  findById(id: string): Promise<Camera | null>;
  findAll(): Promise<Camera[]>;
}

export const CAMERA_REPOSITORY = Symbol('CAMERA_REPOSITORY');
