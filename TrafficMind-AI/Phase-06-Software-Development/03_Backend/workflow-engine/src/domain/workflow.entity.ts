export enum WorkflowStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export class ActionStep {
  constructor(
    public readonly id: string,
    public readonly description: string,
    public isCompleted: boolean = false,
  ) {}
}

export class Workflow {
  constructor(
    public readonly id: string,
    public readonly triggerIncidentId: string,
    public status: WorkflowStatus,
    public readonly steps: ActionStep[],
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public executeNextStep(): void {
    const nextStep = this.steps.find(step => !step.isCompleted);
    if (nextStep) {
      nextStep.isCompleted = true;
      this.updatedAt = new Date();
    }
    
    if (this.steps.every(step => step.isCompleted)) {
      this.status = WorkflowStatus.COMPLETED;
    }
  }
}
