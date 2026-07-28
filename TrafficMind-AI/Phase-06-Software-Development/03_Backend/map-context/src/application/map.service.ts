import { Injectable } from '@nestjs/common';
import { Coordinate, Zone } from '../domain/zone.entity';

@Injectable()
export class MapService {
  private zones: Zone[] = [
    new Zone('Z-1', 'Downtown Core', [
      new Coordinate(10.0, 20.0),
      new Coordinate(11.0, 21.0),
    ]),
  ];

  /**
   * Evaluates if a given coordinate is within a registered zone.
   * Stateless calculation to prevent circular dependencies.
   */
  public getZoneForCoordinate(lat: number, lon: number): Zone | null {
    // Mock GIS calculation: if lat/lon is close to Downtown Core.
    if (lat >= 10.0 && lat <= 11.0 && lon >= 20.0 && lon <= 21.0) {
      return this.zones[0];
    }
    return null;
  }
}
