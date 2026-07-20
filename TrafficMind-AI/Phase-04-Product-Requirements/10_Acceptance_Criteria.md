# TrafficMind AI: Module Acceptance Criteria

**Document ID:** TMA-AC-010  
**Version:** 0.1  
**Date:** 20 July 2026  
**Parent documents:** [Master PRD](01_Product_Requirements.md), [Functional Requirements](02_Functional_Requirements.md), [API Requirements](09_API_Requirements.md)  
**Status:** Draft for product, QA, security, architecture, and agency acceptance

## 1. Purpose and Use

This document defines observable module-level acceptance criteria for the approved TrafficMind AI pilot. It is a release-evidence catalog, not a test case suite. Detailed test cases, test data, owners, environment, and expected results must be created during delivery planning.

**Acceptance rule:** a module cannot be accepted merely because a screen or API works in a happy-path demonstration. It must meet the applicable workflow, authority, provenance, security, audit, failure, and fallback criteria below.

## 2. Cross-Module Release Criteria

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-X-01 | Every operational record displays source, timestamp, freshness, and observed/reported/inferred/unavailable state as applicable. | Scenario test and screenshot/API assertion. |
| AC-X-02 | A user can access only authorized agency, role, purpose, geography, and classification scope. | RBAC/ABAC positive and negative tests. |
| AC-X-03 | Material operational, administrative, export, approval, override, configuration, and model actions are reconstructible in the audit trail. | End-to-end audit reconstruction. |
| AC-X-04 | A dependency/source failure creates visible degraded state and preserves a documented manual fallback; it does not create false current state. | Failure-injection/outage drill. |
| AC-X-05 | High-risk operational requests require authorized human approval and cannot occur through a direct automatic path. | Negative authorization/action test. |
| AC-X-06 | Release evidence identifies limitations, known risks, residual-risk owner, and rollback/suspension path. | Signed release package. |

## 3. MOD-01: Identity, Access, and Governance

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-IAM-01 | Unique identities authenticate through approved identity/MFA policy; shared accounts are not supported. | Authentication and account review test. |
| AC-IAM-02 | RBAC and ABAC enforce role, agency, purpose, geography, sensitivity, and expiry constraints. | Matrix of allowed/denied access tests. |
| AC-IAM-03 | Privileged access is time-bound, step-up protected, and cannot be self-granted. | Privilege-elevation negative test and audit. |
| AC-IAM-04 | Access grant, change, expiry, revocation, and periodic review actions are fully audited. | Access lifecycle audit reconstruction. |
| AC-IAM-05 | Emergency functionality remains unavailable unless active SOP, approved policy, and authorized role gates all pass. | Policy-gate test. |

## 4. MOD-02: Network Operations Context

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-NOC-01 | Authorized user can view only approved pilot geography, junctions/corridors, layers, and data fields. | Geography/layer access test. |
| AC-NOC-02 | Traffic/roadwork/asset/event context identifies source, time, health, quality, and data state. | Context record/API response assertion. |
| AC-NOC-03 | Observed, reported, inferred, and unavailable data are visually and semantically distinct. | User scenario test with all four states. |
| AC-NOC-04 | Selecting an event opens authorized contextual evidence without exposing unrelated restricted data. | Permission and drill-down test. |
| AC-NOC-05 | Map/context remains safely usable with partial-source failure and directs user to fallback where needed. | Layer/source outage exercise. |

## 5. MOD-03: Event and Incident Management

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-EVT-01 | Candidate event can be created from authorized source, operator, or partner input with required provenance. | Creation scenario and audit entry. |
| AC-EVT-02 | Lifecycle transitions enforce state rules: new, verification, verified, assigned, active, recovery, closed, rejected/duplicate. | Transition matrix test. |
| AC-EVT-03 | Event cannot become verified without evidence and verification rationale from authorized role. | Negative transition test. |
| AC-EVT-04 | Assignment records owner, deadline, handoff/acknowledgement, and escalation path. | Assignment and timeout scenario. |
| AC-EVT-05 | Duplicate/related events are linked without erasing original records. | Duplicate scenario and timeline review. |
| AC-EVT-06 | Closure requires outcome, unresolved issue where applicable, and review requirement; complete timeline is auditable. | Closure and audit reconstruction. |

## 6. MOD-04: Decision Support

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-DS-01 | Decision support is available only for verified, eligible events with approved policy/playbook and current sufficient input. | Eligibility/negative-state tests. |
| AC-DS-02 | Each option displays evidence, confidence, source freshness, constraints, expected benefit, trade-off, limitation, and policy/playbook version. | Recommendation view/API assertion. |
| AC-DS-03 | Recommendations do not invent actions outside approved playbooks and do not directly actuate infrastructure. | Playbook boundary and API negative test. |
| AC-DS-04 | Authorized user can select, reject, or override option with rationale; all outcomes are audited. | Override/rejection scenario. |
| AC-DS-05 | Low confidence, stale inputs, model suspension, or unavailable data produces evidence-only/manual-playbook state. | Failure and threshold tests. |

## 7. MOD-05: Emergency Coordination

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-EMR-01 | Emergency workflow is disabled until written SOP, data policy, authorized roles, and tabletop approval are active. | Configuration/policy gate test. |
| AC-EMR-02 | Emergency view contains only minimum necessary route/access/coordination status and excludes patient/clinical detail. | Privacy field inspection and role test. |
| AC-EMR-03 | Named agencies can acknowledge approved tasks; acknowledgement and recovery records are protected and auditable. | Tabletop workflow and protected audit review. |
| AC-EMR-04 | Workflow surfaces configured pedestrian, cross-traffic, rail/interface, and responder-safety safeguards. | Scenario walkthrough. |
| AC-EMR-05 | Unavailable/stale route context never represents route as clear and immediately presents the existing manual procedure. | Degraded-data exercise. |
| AC-EMR-06 | No MVP pathway automatically dispatches a vehicle or pre-empts a signal. | API/integration and UI negative test. |

## 8. MOD-06: Safety and Mobility Analytics

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-ANA-01 | Every output records pilot geography, observation/baseline period, source coverage, methodology/version, and data-quality limitations. | Report/metric metadata assertion. |
| AC-ANA-02 | Travel reliability, queue/event recovery, and transit measures use approved calculations and retain reproducible lineage. | Independent calculation/reproduction test. |
| AC-ANA-03 | Safety proxies are not labeled confirmed crashes; their source and limitation are explicit. | Report content review. |
| AC-ANA-04 | Fuel/CO2 estimates require approved input assumptions, factors, vehicle mix, and uncertainty range. | Input validation and output inspection. |
| AC-ANA-05 | Analysts use aggregate/de-identified data by default and exports follow policy. | Access/export test. |

## 9. MOD-07: Asset and Service Health

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-AST-01 | Asset/service context shows ID, owner, health state, last successful contact, fault class, and permitted operational impact. | Asset-health scenario. |
| AC-AST-02 | Stale, network-loss, device-fault, and unknown states are distinguishable; health alert is not treated as confirmed physical fault. | Fault-type simulation. |
| AC-AST-03 | Authorized maintenance role can triage and link external work reference without replacing the maintenance system of record. | Handoff scenario. |
| AC-AST-04 | Connector failure preserves triage/audit context and exposes manual maintenance fallback. | Dependency-outage test. |
| AC-AST-05 | Asset restoration requires configured verification and is communicated to affected operational roles. | Restore/closure scenario. |

## 10. MOD-08: Reporting and Executive Review

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-RPT-01 | Reports are reproducible and include source/method versions, date range, geography, quality, assumptions, and limitations. | Generate/reproduce comparison. |
| AC-RPT-02 | Report clearly separates observed facts, modeled estimates, assumptions, and unresolved limitations. | Template/content review. |
| AC-RPT-03 | Export is restricted by role, purpose, classification, and audience; protected export is watermarked/logged where policy requires. | Export authorization test. |
| AC-RPT-04 | Pilot scorecard shows baseline, coverage, KPI method, outcome, risk, and decision relevance without unsupported claim. | Steering-pack review. |
| AC-RPT-05 | Scheduled/ad hoc report failure identifies missing source/method and does not publish an incomplete final report. | Failure-path test. |

## 11. MOD-09: Integration Framework

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-INT-01 | Each enabled source/target has a versioned contract, owner, approved purpose, service identity, schema, health rule, and failure behavior. | Integration registry review. |
| AC-INT-02 | Inbound data is authenticated, authorized, encrypted, validated, deduplicated/replay-safe, and quarantined on invalid schema. | Security and malformed-message tests. |
| AC-INT-03 | Connector failure is isolated and visible; unrelated functions remain available with correct data-state labels. | Failure-injection test. |
| AC-INT-04 | External operational request, if later approved, requires human approval, purpose/role check, audit write, and fail-closed behavior. | Controlled integration simulation. |
| AC-INT-05 | No unsupported controller/camera/dispatch write integration can be enabled by configuration alone. | Configuration/permission negative test. |

## 12. MOD-10: Public Information Interface

**MVP status:** not included unless separately approved. Criteria apply only if the module is enabled in a later phase.

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-PUB-01 | Public content is approved, verified, multilingual/accessibility tested, and clearly separates observed disruption from forecast/advice. | Content publication review. |
| AC-PUB-02 | Public interface never exposes restricted event, emergency, camera, identity, or operational-control data. | Data-exposure/security test. |
| AC-PUB-03 | Accessibility, availability, misinformation correction, and content ownership are defined before release. | Accessibility test and operating runbook. |

## 13. Quality, Security, and Operational Acceptance

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-Q-01 | Critical user scenarios complete with representative users without a usability or safety blocker. | Moderated scenario test and issue log. |
| AC-Q-02 | Service/integration health, audit, access, security, privacy, and fallback controls satisfy approved pilot criteria. | Test and review evidence package. |
| AC-Q-03 | Critical/high security, privacy, safety, and data-quality findings are remediated, formally accepted as residual risk, or block release. | Risk register and approval. |
| AC-Q-04 | Backup/restore, incident response, model/connector suspension, and manual fallback are exercised before live pilot release. | Drill reports and remediation tracking. |
| AC-Q-05 | Release owner, support owner, escalation contacts, change/rollback runbook, and measurement plan are accepted by the steering group. | Signed operating-readiness record. |

## 14. Acceptance Decision

| Decision | Meaning |
|---|---|
| **Accepted** | All applicable Must criteria pass; residual risk is accepted by named authority. |
| **Accepted with restriction** | Capability is limited by documented geography, user role, data source, or workflow while gaps are remediated. |
| **Deferred** | Capability does not enter pilot release; manual/alternate process remains active. |
| **Rejected / rollback** | Safety, governance, security, data, or usability evidence is insufficient; feature is suspended or returned for remediation. |

