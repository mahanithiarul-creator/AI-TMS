import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '../src/application/config.service';

describe('ConfigService (Versioning)', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should store and retrieve the latest config version', () => {
    service.setConfig('AI_THRESHOLD', '0.80', 'admin-1');
    service.setConfig('AI_THRESHOLD', '0.85', 'admin-2'); // Update

    const latest = service.getConfig('AI_THRESHOLD');
    expect(latest.value).toBe('0.85');
    expect(latest.version).toBe(2);
    expect(latest.updatedBy).toBe('admin-2');
  });

  it('should maintain a history of config changes for rollbacks', () => {
    service.setConfig('MAX_RETRIES', '3', 'admin-1');
    service.setConfig('MAX_RETRIES', '5', 'admin-1');

    const history = service.getHistory('MAX_RETRIES');
    expect(history.length).toBe(2);
    expect(history[0].value).toBe('3');
  });
});
