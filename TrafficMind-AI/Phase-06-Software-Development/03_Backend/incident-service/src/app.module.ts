import { Module } from '@nestjs/common';
import { IncidentController } from './presentation/incident.controller';
import { CreateIncidentCommandHandler } from './application/commands/create-incident.command';
import { GetActiveIncidentsQueryHandler } from './application/queries/get-incidents.query';
import { MockIncidentRepository } from './infrastructure/repositories/mock-incident.repository';
import { INCIDENT_REPOSITORY } from './domain/incident.repository.interface';

@Module({
  controllers: [IncidentController],
  providers: [
    CreateIncidentCommandHandler,
    GetActiveIncidentsQueryHandler,
    {
      provide: INCIDENT_REPOSITORY,
      useClass: MockIncidentRepository,
    },
  ],
})
export class AppModule {}
