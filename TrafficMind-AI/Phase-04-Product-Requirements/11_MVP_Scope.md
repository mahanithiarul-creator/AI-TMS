# TrafficMind AI: MVP Scope and Phased Delivery Plan

**Document ID:** TMA-MVP-011  
**Version:** 0.1  
**Date:** 20 July 2026  
**Parent documents:** [Master PRD](01_Product_Requirements.md), [Acceptance Criteria](10_Acceptance_Criteria.md), [API Requirements](09_API_Requirements.md)  
**Status:** Draft for pilot charter, delivery planning, and stakeholder validation

## 1. MVP Decision

TrafficMind AI's **Phase 1 MVP** is a tightly governed Coimbatore pilot capability for one or two approved corridor/junction clusters. It is built to help authorized teams establish verified operational awareness, coordinate a limited incident workflow, see source/asset health, and measure pilot evidence.

The MVP is not a citywide deployment, navigation app, autonomous controller, signal-pre-emption product, dispatch replacement, public surveillance product, or generic AI demonstration. A feature belongs in the MVP only when it supports an approved pilot workflow, has a named operational owner, has lawful/approved data, has a manual fallback, and can meet the acceptance criteria.

## 2. Scope Principles

1. **Safety and authority before automation:** human approval and existing statutory procedures always govern action.
2. **One repeatable workflow before broad coverage:** prove evidence, ownership, handoff, and measurement in a limited scope.
3. **Use authorized existing data first:** new hardware, broad integrations, and citywide coverage are not MVP assumptions.
4. **Outcome evidence before expansion:** no claim or scaling decision without baseline, method, data-quality, and user-adoption evidence.
5. **Future capabilities are separately gated:** a roadmap mention does not create a delivery promise.

## 3. Phase 1 MVP: Governed Incident-Coordination Pilot

### 3.1 MVP Objective

Enable authorized ICCC and Traffic Police users to identify, verify, assign, coordinate, close, and review selected operational incidents in an approved pilot area, with role-based access, evidence provenance, visible source health, auditability, and safe manual fallback.

### 3.2 In Scope

| Capability | MVP inclusion | Boundary |
|---|---|---|
| Identity and access | Unique user identity, approved MFA policy, core RBAC/ABAC, area/role scope, access audit. | Only roles/users named in pilot charter. |
| Operations dashboard | Prioritized active event, assignment, source/asset health, and shift-handover context. | Approved pilot geography only. |
| Live map/context | Approved pilot junction/corridor geometry; event, roadwork, asset, and permitted traffic context. | Not consumer routing or citywide network map. |
| Incident management | Candidate creation, evidence/rationale, verification, assignment, handoff, lifecycle, closure, duplicate link. | Limited approved event taxonomy and playbooks. |
| Camera evidence | Authorized evidence reference/viewing for verification where source agreement permits. | No facial recognition, camera control, unrestricted recording/export. |
| Signal/asset health | Read-only health/freshness, fault context, maintenance handoff reference. | No controller write/configuration/actuation. |
| Notifications | In-product and approved role-based assignment/escalation notices. | No unapproved sensitive external channels. |
| Decision support | Evidence and manual approved playbook links; bounded rule/configuration-based option presentation only when eligible. | No autonomous action; advanced predictive AI is not required for MVP. |
| Reporting/analytics | Basic event/operational scorecard, source quality, baseline/method metadata, governed export. | No unvalidated public outcome claims. |
| Audit/security | Audit, data-state/freshness, configuration/version tracking, failure/degraded status, support runbook. | Pilot security controls must meet release gates. |

### 3.3 MVP API Surface

| API domain | MVP operation |
|---|---|
| Authentication | Session inspection, scoped access, access request/revocation. |
| Camera | Approved metadata, health, controlled event-evidence reference. |
| Signal/asset | Read-only asset health and maintenance triage/handoff reference. |
| Notification | Read, acknowledge, policy-controlled event notices. |
| Analytics | Approved aggregate metric/query and limited report-job API. |
| Emergency | Eligibility check only; full coordination is **not MVP** unless all separate gates pass. |
| Administration | Users/access, source registry, versioned configuration, audit/review. |
| Audit | Authorized search and integrity status. |

### 3.4 Explicitly Out of MVP

- Autonomous traffic-signal control, signal-pre-emption, or controller configuration.
- Emergency dispatch integration, automatic emergency priority, V2X, and patient/clinical data processing.
- Citywide coverage, statewide deployment, multi-city federation, or public information application.
- Predictive traffic forecasting, calibrated digital twin, generative AI assistant, autonomous agents, or continuous retraining.
- Automated enforcement, facial recognition, biometric inference, license-plate tracking, or individual travel-history tracking.
- Full replacement of existing ICCC, CAD/dispatch, asset-management, maintenance, or police systems.
- New citywide camera/sensor procurement, unless separately funded/approved outside product scope.
- Guaranteed traffic, fuel, emissions, safety, or emergency-response improvements.

### 3.5 MVP Entry and Exit Gates

| Gate | Required evidence |
|---|---|
| Entry | Named CSCL/CCMC/Traffic Police sponsor; approved pilot geography/workflow; authority matrix; source/data inventory; privacy/security review; baseline/measurement plan; support owner. |
| Build readiness | Test environment; versioned interface contracts; representative user availability; approved event/playbook taxonomy; fallback procedure; risk register. |
| Pilot release | Applicable acceptance criteria pass; training/scenario walkthrough complete; audit/monitoring/rollback/fallback drills complete; residual risk accepted by named authority. |
| Evaluation | Adequate pilot observation, outcome/adoption evidence, data-quality assessment, incident/post-event review, and steering decision pack. |

## 4. Phase 2: Controlled Expansion

**Phase 2 begins only after the Phase 1 evaluation gate accepts evidence of safe workflow adoption, maintainable operations, and defined public/operational value.**

| Capability | Scope | Required precondition |
|---|---|---|
| Additional corridor/junction clusters | Extend approved Coimbatore coverage using the established operating model. | Capacity, source quality, support, and security evidence remain adequate. |
| Expanded event taxonomy/playbooks | Add approved incident types and partner workflows. | New authority/safety review and user validation. |
| Emergency coordination | Restricted route/access coordination workflow. | Signed SOP, data agreement, role controls, tabletop exercise, and safety/security approval. |
| Bounded AI perception/analytics | Vehicle/queue/congestion/incident candidates with confidence and human verification. | Local evaluation, model governance, bias/safety review, monitoring, rollback. |
| Enhanced measurement | Transit, safety proxy, reliability, and documented fuel/CO2 analysis. | Agreed method, data quality, baseline, and governance. |
| Maintenance integration | Deeper work-status synchronization with approved system of record. | Interface owner, security review, failure/rollback plan. |

**Still excluded from Phase 2:** autonomous control, direct signal pre-emption, citywide public app, mass surveillance, and unbounded generative AI.

## 5. Phase 3: Replicable City Operating Model

**Phase 3 is a replication stage, not an automatic rollout. Each city requires its own sponsor, policy, data, safety, procurement, and operational validation.**

| Capability | Scope | Required precondition |
|---|---|---|
| Coimbatore city programme | Additional approved workflows/coverage with sustained support and outcome review. | Phase 2 acceptance and contracted operations model. |
| Tamil Nadu city replication | Configurable deployment for a second approved city. | Local authority/data agreements, city-specific baselines, no copied policy assumptions. |
| Multi-city governance/reporting | Federated role/data/configuration controls and aggregate benchmarking. | City consent, standardised governance, privacy aggregation design. |
| Calibrated predictive operations | Short-horizon forecast and scenario support. | City-specific model validation, monitoring, human approval, model risk controls. |
| Public information interface | Approved, accessible multilingual verified public alerts. | Content owner, communication SOP, accessibility/security review. |

**Still excluded from Phase 3 unless separately approved:** autonomous signal control and broad connected-vehicle actuation.

## 6. Future Roadmap: Not Committed Delivery Scope

| Capability | Potential value | Preconditions before any commitment |
|---|---|---|
| Calibrated digital twin | Test operational scenarios before live changes. | Geometry/demand/signal data, calibration, governance, safety validation. |
| Generative AI assistant | Grounded summaries of approved procedures, events, and reports. | Curated knowledge base, citations, access controls, prompt-injection testing, human review. |
| Bounded AI agents | Prepare evidence/checklists within approved workflow. | Explicit task boundary, approvals, monitoring, audit, stop control. |
| V2X / connected infrastructure | Authorized emergency, transit, work-zone, and safety context. | Standards, security, roadside/vehicle adoption, agency approval. |
| Signal priority / external action | Potentially coordinate approved traffic-control action. | Separate safety case, statutory authority, integration certification, dual control, simulation/tabletop/field evidence. |
| Statewide/national portfolio | Support broader public-sector operating intelligence. | Procurement, federated governance, data residency/ownership, support capacity, local validation. |

## 7. Phase Separation Matrix

| Capability | Phase 1 MVP | Phase 2 | Phase 3 | Future |
|---|---:|---:|---:|---:|
| Identity, governance, audit, security | Yes | Expand | Federate | Mature |
| Selected corridor operational context | Yes | Expand | Multi-city | Mature |
| Incident verification and coordination | Yes | Expand | Replicate | Mature |
| Camera evidence / asset health | Conditional/read-only | Expand | Replicate | Mature |
| Emergency coordination | No, eligibility only | Conditional | Expand | Connected infrastructure |
| AI detection/queue/congestion candidate | No, not required | Conditional | Expand | Mature |
| Predictive traffic operations | No | No | Conditional | Expand |
| Digital twin | No | No | Conditional | Expand |
| Public information service | No | No | Conditional | Expand |
| Direct signal action/pre-emption | No | No | No | Separate safety case only |

## 8. MVP Success Evidence

Phase 1 MVP is successful when the joint steering group can demonstrate, with explicit limitations:

1. Representative operators complete the selected workflow without a critical usability or safety blocker.
2. Events have traceable evidence, clear ownership, reliable lifecycle/hand-off records, and audit reconstruction.
3. Stale/degraded sources are visible and operators can follow manual fallback rather than act on false current state.
4. Security, privacy, access, configuration, and source/integration controls pass agreed pilot acceptance criteria.
5. The baseline/evaluation method can describe operational adoption and any observed outcome without unsupported public claims.
6. A named agency decision-maker can make a justified go, correct, restrict, or stop decision for the next phase.

## 9. Scope-Control Rules

- No feature moves from a later phase into MVP without a documented change request, impact assessment, owner, funding, security/privacy/safety review, acceptance criteria, and steering approval.
- A request for a new data source, role, geography, workflow, external action, or AI model is a scope change, not a configuration convenience.
- Emergency and physical-control requests are high-risk scope changes and require the separate gates stated in the PRD, AI, data, and security specifications.
- When evidence is insufficient, the correct outcome is to restrict, defer, or remove the capability while preserving existing agency procedure.

