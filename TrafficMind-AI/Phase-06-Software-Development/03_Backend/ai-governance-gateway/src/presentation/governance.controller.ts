import { Controller, Post, Body, Param, Req, UseGuards } from '@nestjs/common';
import { GovernanceService } from '../application/governance.service';

// In a full implementation, we would use JwtAuthGuard and RolesGuard to restrict the approve endpoints
// to SUPERVISOR or ADMINISTRATOR roles (CMP-003).

class SubmitRecommendationDto {
  incidentId!: string;
  suggestedAction!: string;
  confidenceScore!: number;
  explanation!: string;
  modelVersion!: string;
}

@Controller('governance')
export class GovernanceController {
  constructor(private readonly governanceService: GovernanceService) {}

  @Post('submit')
  submit(@Body() dto: SubmitRecommendationDto) {
    const id = this.governanceService.submitRecommendation(
      dto.incidentId,
      dto.suggestedAction,
      dto.confidenceScore,
      dto.explanation,
      dto.modelVersion
    );
    return { id, message: 'Recommendation received and queued for policy evaluation.' };
  }

  @Post(':id/approve')
  approve(@Param('id') id: string, @Req() req: any) {
    // We assume the user ID is injected by a JWT Guard (CMP-015/002)
    const userId = req.user?.sub || 'SYSTEM_FALLBACK';
    this.governanceService.approveRecommendation(id, userId);
    return { message: 'Recommendation approved.' };
  }

  @Post(':id/reject')
  reject(@Param('id') id: string, @Req() req: any) {
    const userId = req.user?.sub || 'SYSTEM_FALLBACK';
    this.governanceService.rejectRecommendation(id, userId);
    return { message: 'Recommendation rejected.' };
  }
}
