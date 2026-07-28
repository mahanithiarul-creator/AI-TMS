import { Test, TestingModule } from '@nestjs/testing';
import { TranslatorService } from '../src/application/translator.service';

describe('TranslatorService (ACL)', () => {
  let service: TranslatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TranslatorService],
    }).compile();

    service = module.get<TranslatorService>(TranslatorService);
  });

  it('should translate normal legacy light status to OPERATIONAL', () => {
    const internal = service.translateLegacyTrafficLight({
      intersection_id: '999',
      light_status: 'G',
      timestamp: Date.now(),
    });
    expect(internal.assetId).toBe('AST-LEGACY-999');
    expect(internal.status).toBe('OPERATIONAL');
  });

  it('should translate ERR legacy light status to FAULTY', () => {
    const internal = service.translateLegacyTrafficLight({
      intersection_id: '999',
      light_status: 'ERR',
      timestamp: Date.now(),
    });
    expect(internal.status).toBe('FAULTY');
  });
});
