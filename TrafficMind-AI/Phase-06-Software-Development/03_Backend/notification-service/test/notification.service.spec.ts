import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from '../src/application/notification.service';
import { NotificationChannel, NotificationStatus } from '../src/domain/notification.entity';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationService],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should successfully send a notification', async () => {
    const id = await service.dispatch('operator@trafficmind.gov', NotificationChannel.EMAIL, 'Critical Alert');
    const log = service.getLog(id);
    expect(log?.status).toBe(NotificationStatus.SENT);
  });

  it('should fail if provider rejects', async () => {
    const id = await service.dispatch('invalid@error.com', NotificationChannel.EMAIL, 'Critical Alert');
    const log = service.getLog(id);
    expect(log?.status).toBe(NotificationStatus.FAILED);
    expect(log?.errorDetails).toBe('Provider rejected recipient');
  });
});
