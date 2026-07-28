import { Controller, All, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

/**
 * CMP-015 Controlled Interaction Gateway
 * 
 * In a real production setup, this would use a robust proxy library (like http-proxy-middleware).
 * For the scope of Sprint 1, we establish the routing and authentication boundary.
 */
@Controller()
export class GatewayController {

  @All('api/v1/auth/*')
  proxyAuth(@Req() req: Request, @Res() res: Response) {
    // Route to IAM Service (CMP-002) - Unprotected for login
    res.status(200).json({ message: 'Proxied to IAM Service', path: req.url });
  }

  @UseGuards(JwtAuthGuard)
  @All('api/v1/incidents/*')
  proxyIncidents(@Req() req: Request, @Res() res: Response) {
    // Route to Incident Service (CMP-004) - Protected
    res.status(200).json({ 
      message: 'Proxied to Incident Service', 
      user: req['user'], 
      path: req.url 
    });
  }
}
