import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigurationEntry } from '../domain/configuration.entity';

@Injectable()
export class ConfigService {
  private readonly logger = new Logger(ConfigService.name);
  
  // In-memory store mapped by Key -> Array of Versions (latest is last)
  private store: Map<string, ConfigurationEntry[]> = new Map();

  public setConfig(key: string, value: string, userId: string): ConfigurationEntry {
    const history = this.store.get(key) || [];
    const newVersion = history.length + 1;
    
    const entry = new ConfigurationEntry(key, value, newVersion, new Date(), userId);
    history.push(entry);
    this.store.set(key, history);
    
    this.logger.log(`Config [${key}] updated to version ${newVersion} by ${userId}`);
    return entry;
  }

  public getConfig(key: string): ConfigurationEntry {
    const history = this.store.get(key);
    if (!history || history.length === 0) {
      throw new NotFoundException(`Configuration key ${key} not found`);
    }
    return history[history.length - 1]; // Return latest version
  }

  public getHistory(key: string): ConfigurationEntry[] {
    return this.store.get(key) || [];
  }
}
