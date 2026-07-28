import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateIncidentCommand, CreateIncidentCommandHandler } from '../application/commands/create-incident.command';
import { GetActiveIncidentsQuery, GetActiveIncidentsQueryHandler } from '../application/queries/get-incidents.query';
import { IncidentSeverity } from '../domain/incident.entity';

class CreateIncidentDto {
  title!: string;
  description!: string;
  severity!: IncidentSeverity;
  latitude!: number;
  longitude!: number;
}

@Controller('incidents')
export class IncidentController {
  constructor(
    private readonly createIncidentHandler: CreateIncidentCommandHandler,
    private readonly getActiveIncidentsHandler: GetActiveIncidentsQueryHandler,
  ) {}

  @Post()
  async createIncident(@Body() dto: CreateIncidentDto) {
    const command = new CreateIncidentCommand(
      dto.title,
      dto.description,
      dto.severity,
      dto.latitude,
      dto.longitude,
    );
    const id = await this.createIncidentHandler.execute(command);
    return { id, message: 'Incident created successfully' };
  }

  @Get()
  async getActiveIncidents() {
    const query = new GetActiveIncidentsQuery();
    return this.getActiveIncidentsHandler.execute(query);
  }
}
