import { Injectable, Logger } from '@nestjs/common';
import { Workflow, WorkflowStatus, ActionStep } from '../domain/workflow.entity';

@Injectable()
export class WorkflowService {
  private readonly logger = new Logger(WorkflowService.name);
  private workflows: Map<string, Workflow> = new Map();

  /**
   * Simulates reacting to an 'IncidentCreated' domain event.
   * In a real implementation, this would be a Kafka consumer method.
   */
  public handleIncidentCreatedEvent(incidentId: string, severity: string) {
    this.logger.log(`Received event for Incident ${incidentId}. Evaluating playbooks...`);
    
    // Simple playbook rule simulation
    let steps: ActionStep[] = [
      new ActionStep('STEP_1', 'Dispatch field officer'),
    ];

    if (severity === 'CRITICAL' || severity === 'HIGH') {
      steps.push(new ActionStep('STEP_2', 'Notify emergency services'));
      steps.push(new ActionStep('STEP_3', 'Reroute traffic on nearby intersections'));
    }

    const workflow = new Workflow(
      `WF-${Date.now()}`,
      incidentId,
      WorkflowStatus.ACTIVE,
      steps,
      new Date(),
      new Date(),
    );

    this.workflows.set(workflow.id, workflow);
    this.logger.log(`Spawned Workflow ${workflow.id} with ${steps.length} steps.`);
  }

  public getActiveWorkflows(): Workflow[] {
    return Array.from(this.workflows.values());
  }
}
