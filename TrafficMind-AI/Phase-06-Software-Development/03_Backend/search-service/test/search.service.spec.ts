import { Test, TestingModule } from '@nestjs/testing';
import { SearchService } from '../src/application/search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    service = module.get<SearchService>(SearchService);
  });

  it('should index and find documents across domains', () => {
    service.indexDocument({
      id: 'INC-1',
      type: 'INCIDENT',
      title: 'Crash on Main',
      body: 'Two cars involved',
      tags: ['CRASH', 'HIGH'],
      timestamp: new Date(),
    });

    service.indexDocument({
      id: 'AST-1',
      type: 'ASSET',
      title: 'Main St Light',
      body: 'Traffic light at intersection',
      tags: ['LIGHT'],
      timestamp: new Date(),
    });

    const results = service.search('main');
    expect(results.length).toBe(2);
  });

  it('should return empty array when no matches', () => {
    service.indexDocument({
      id: 'INC-1',
      type: 'INCIDENT',
      title: 'Crash on Main',
      body: 'Two cars involved',
      tags: ['CRASH', 'HIGH'],
      timestamp: new Date(),
    });

    const results = service.search('bridge');
    expect(results.length).toBe(0);
  });
});
