# TrafficMind AI: Product Backlog

**Document ID:** TMA-BKL-012  
**Version:** 0.1  
**Date:** 20 July 2026  
**Related documents:** [MVP Scope](11_MVP_Scope.md), [User Stories](06_User_Stories.md), [Acceptance Criteria](10_Acceptance_Criteria.md)  
**Status:** Draft for Product Owner, PMO, architecture, and steering-group prioritization

## 1. Purpose and Prioritization Rules

This backlog consolidates the approved Phase 04 requirements into delivery-sized product capabilities. It is not a sprint plan: estimates, team capacity, architecture sequencing, data agreements, and pilot readiness must be added before implementation planning.

| MoSCoW class | Meaning for TrafficMind AI |
|---|---|
| **Must Have** | Required for the safe, governed Phase 1 MVP incident-coordination pilot. If absent, the pilot does not release. |
| **Should Have** | Material pilot/near-term value, delivered after Must scope or when readiness permits. |
| **Could Have** | Valuable later increment; not required for pilot success. |
| **Won't Have** | Explicitly excluded from current Phase 1 MVP. May be reconsidered only through a new approved scope decision. |

## 2. Backlog Summary

| Priority | Items | Delivery intent |
|---|---:|---|
| Must Have | 18 | Phase 1 MVP release gate. |
| Should Have | 10 | Controlled Phase 2 expansion. |
| Could Have | 8 | Phase 3 / validated future increment. |
| Won't Have | 8 | Not part of MVP; no delivery commitment. |

## 3. Must Have: Phase 1 MVP

| ID | Epic / backlog item | User value | Key dependencies | Acceptance reference |
|---|---|---|---|---|
| BKL-M-01 | Identity, MFA, and unique account foundation | Authorized users have accountable, secure access. | Approved IdP, role matrix, MFA policy. | AC-IAM-01 to 04 |
| BKL-M-02 | RBAC/ABAC policy enforcement | Users see only permitted agency, role, purpose, geography, and data scope. | IAM, policy store, data classification. | AC-X-02; AC-IAM-02 |
| BKL-M-03 | Pilot geography and source registry | Operators work from approved corridor/junction and data-source definitions. | City sponsor, source owner, GIS/asset data. | AC-NOC-01; AC-INT-01 |
| BKL-M-04 | Source freshness and degraded-state service | Operators can distinguish usable data from stale/unavailable feeds. | Integration adapters, health thresholds. | AC-X-01; AC-X-04 |
| BKL-M-05 | Role-based operations dashboard | Operators see prioritized active work, health, and handover context. | BKL-M-01 to 04, event service. | FRS-01; US-OP-01 to 02 |
| BKL-M-06 | Approved live map and corridor context | Users understand event location and permitted network/asset context. | GIS/base map, source registry, policy. | AC-NOC-01 to 05 |
| BKL-M-07 | Candidate event creation | Approved source/operator/partner reports become traceable candidate events. | Event taxonomy, source provenance, audit. | AC-EVT-01 |
| BKL-M-08 | Evidence and verification workflow | Authorized users verify events with evidence and rationale. | Camera/source access policy, IAM, event lifecycle. | AC-EVT-02 to 03 |
| BKL-M-09 | Assignment, acknowledgement, escalation | Each verified event has an accountable owner and timely handoff. | Playbook policy, notification service. | AC-EVT-04; US-OP-06 |
| BKL-M-10 | Event lifecycle, duplicate, closure, and review | Incidents are handled consistently from candidate through learning. | Event model, audit store, role policy. | AC-EVT-02, 05, 06 |
| BKL-M-11 | Controlled camera evidence reference | Authorized verifier can inspect/link approved evidence without broad surveillance access. | Video owner agreement, short-lived access, retention policy. | FRS-03; DATA-CAM-02 to 06 |
| BKL-M-12 | Read-only signal/asset-health context | Operators see health/impact and maintenance can triage without controller actuation. | Asset registry, telemetry, maintenance owner. | AC-AST-01 to 04 |
| BKL-M-13 | Policy-based in-product notifications | Assignees receive appropriate event/escalation notices without sensitive leakage. | Notification policy, messaging provider, IAM. | US-OP-10; US-TP-13 |
| BKL-M-14 | Manual playbook and fallback references | Users can continue safely when data, model, or dependency fails. | Approved SOP/runbooks, degraded-state service. | AC-X-04; FRS-C-08 |
| BKL-M-15 | Bounded evidence/playbook decision support | Users can see approved options and manually decide; no automatic action occurs. | Verified event, playbook, policy, audit. | AC-DS-01 to 05 |
| BKL-M-16 | Operational scorecard and baseline metadata | City can evaluate adoption/operations with methodology and limitations. | Measurement plan, lineage, analytics store. | AC-ANA-01; AC-RPT-04 |
| BKL-M-17 | Audit, configuration, and change control | High-risk actions/configuration remain reconstructible and recoverable. | Secure audit store, versioned configuration, approvals. | AC-X-03; AC-Q-02 |
| BKL-M-18 | Pilot release readiness and support runbooks | Pilot has named owners, rollback, incident response, backup/fallback evidence. | Steering group, IT/security, support owner. | AC-Q-03 to 05 |

## 4. Should Have: Controlled Phase 2 Expansion

| ID | Epic / backlog item | User value | Key dependencies | Acceptance reference |
|---|---|---|---|---|
| BKL-S-01 | Expanded approved event taxonomy and playbooks | Teams handle additional validated incident types consistently. | New workflow/authority review. | AC-EVT-02; AC-DS-03 |
| BKL-S-02 | Enhanced corridor reliability and queue analytics | Mobility managers understand delay/recovery trends. | Baseline, reliable source coverage, method approval. | AC-ANA-01 to 02 |
| BKL-S-03 | Transit and vulnerable-road-user reporting | Decisions avoid car-only optimization. | Approved data and metric definitions. | AC-ANA-03; US-CA-06 |
| BKL-S-04 | Authorized emergency coordination workflow | Emergency partners coordinate minimum-necessary route context safely. | SOP, data agreement, tabletop, security/safety approval. | AC-EMR-01 to 06 |
| BKL-S-05 | Vehicle/queue/congestion candidate analytics | Operators gain confidence-qualified supporting context. | Local model evaluation, monitoring, AI governance. | AI-DET-01; AI-CNG-01; AI-QUE-01 |
| BKL-S-06 | Incident candidate detection | Operator attention is assisted without automatic verification. | AI safety/bias review, event workflow. | AI-INC-01; AC-EVT-03 |
| BKL-S-07 | Maintenance-system status synchronization | Maintenance and operations share reliable work status. | System-of-record owner, interface review, failure plan. | AC-AST-03 to 05 |
| BKL-S-08 | Scheduled executive/governance report packs | Sponsors receive timely, reproducible decision evidence. | Report templates, methodology, export policy. | AC-RPT-01 to 05 |
| BKL-S-09 | Model/connector suspension controls | Security/IT can safely contain questionable AI or source behavior. | Monitoring, configuration, incident response. | AI-ML-04; AC-Q-04 |
| BKL-S-10 | Enhanced access review and security monitoring | IT identifies stale access and high-risk activity sooner. | IAM, SIEM/monitoring, agency review cadence. | SEC-IAM-06; SEC-MON-01 |

## 5. Could Have: Phase 3 and Validated Future Increments

| ID | Epic / backlog item | User value | Key dependencies | Acceptance reference |
|---|---|---|---|---|
| BKL-C-01 | Additional Coimbatore corridor clusters | Extends proven workflow where local readiness exists. | Phase 2 evidence, capacity, source/data approval. | MVP expansion gate |
| BKL-C-02 | Tamil Nadu city replication kit | Reuses governed patterns without copying policy assumptions. | Second-city sponsor, local validation, federated controls. | City-specific acceptance pack |
| BKL-C-03 | Short-horizon traffic prediction | Provides confidence-qualified reliability risk outlook. | Historical data, local validation, drift monitoring. | AI-PRD-01; AI-ML-02 |
| BKL-C-04 | Fuel/CO2 estimation | Supports documented sustainability reporting. | Vehicle mix, approved factors, uncertainty method. | AC-ANA-04 |
| BKL-C-05 | Public information interface | Shares approved accessible disruption information. | Content owner, accessibility, misinformation SOP. | AC-PUB-01 to 03 |
| BKL-C-06 | Calibrated digital-twin scenarios | Tests selected interventions without live operational risk. | Verified model calibration, demand/signal data. | Future capability safety case |
| BKL-C-07 | Grounded generative AI assistant | Summarizes approved event/procedure/report material. | Curated source base, citations, access control, adversarial testing. | SEC-AI-03 |
| BKL-C-08 | V2X / connected-infrastructure context | Supports authorized future safety/transit/emergency coordination. | Standards, deployment adoption, security and agency approval. | Separate integration safety case |

## 6. Won't Have: Explicitly Excluded from Phase 1 MVP

| ID | Excluded capability | Reason and boundary |
|---|---|---|
| BKL-W-01 | Autonomous traffic-signal control | Conflicts with human-governed MVP boundary; requires separate statutory/safety case. |
| BKL-W-02 | Signal pre-emption or direct controller configuration | No write pathway in MVP; operational and physical-safety risk requires separate approval. |
| BKL-W-03 | Emergency dispatch replacement | Existing emergency systems/procedures remain authoritative. |
| BKL-W-04 | Facial recognition, biometric inference, or license-plate tracking | Outside lawful/privacy/scope boundary for pilot. |
| BKL-W-05 | Automated traffic enforcement or penalties | Not a decision-support workflow; requires separate legal/operational authority. |
| BKL-W-06 | Consumer navigation, ride-hailing, or parking app | Not the public-sector operating problem selected for MVP. |
| BKL-W-07 | Citywide hardware replacement or unrestricted camera rollout | Infrastructure procurement and asset ownership are separate from constrained product pilot. |
| BKL-W-08 | Unbounded AI agents and automatic production retraining | Insufficient governance, predictability, and safety controls for MVP. |

## 7. Backlog Governance

| Rule | Application |
|---|---|
| Single accountable owner | Each backlog item needs Product Owner, agency decision owner, and technical owner before it enters delivery planning. |
| Definition of Ready | Scope, user outcome, dependencies, source/data agreement, security/privacy impact, acceptance criteria, and fallback are known. |
| Definition of Done | Applicable acceptance criteria pass; documentation, audit, support/rollback, monitoring, and user validation evidence are complete. |
| Change control | Any new data source, geography, user role, AI model, external action, emergency feature, or public interface is a scope change. |
| Review cadence | Product/PMO review at least per release planning cycle; steering-group review at phase gates. |

## 8. Phase 04 Completion Checklist

- [x] Product goals, scope, modules, roles, constraints, dependencies, and risks are documented.
- [x] Functional, AI, data, security, API, and acceptance requirements use identifiable IDs and testable statements.
- [x] Personas, 105 user stories, and critical user flows are documented and connected to the pilot operating model.
- [x] Phase 1 MVP, Phase 2, Phase 3, future, and excluded scope are explicitly separated.
- [x] MoSCoW backlog maps delivery priority to dependencies and acceptance evidence.
- [x] The traceability matrix and glossary complete Phase 04 governance artifacts.
- [ ] Pilot-specific sponsors, source agreements, technical feasibility, architecture decisions, and release evidence require Phase 05 onward validation.

**Phase 04 completion statement:** the product definition is sufficiently testable, traceable, and bounded to begin Phase 05 System Architecture. It does not authorize deployment until the documented local governance, safety, security, data, and release gates are accepted.

