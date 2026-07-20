# TrafficMind AI: Requirements Traceability Matrix

**Document ID:** TMA-RTM-013  
**Version:** 0.1  
**Date:** 20 July 2026  
**Parent documents:** [Master PRD](01_Product_Requirements.md), [Functional Requirements](02_Functional_Requirements.md), [AI Requirements](03_AI_Requirements.md), [Acceptance Criteria](10_Acceptance_Criteria.md)  
**Status:** Draft for Product Owner, PMO, architecture, QA, security, and steering-group use

## 1. Purpose

This matrix provides bidirectional traceability from business/product intent to delivery capability and acceptance evidence. It is the Phase 04 control point for preventing orphan requirements, untested features, and unapproved expansion of scope.

**Reading rule:** a dash (`-`) means no AI component is needed for the initial capability. It does not mean an AI feature should be invented. AI entries are requirements for later gated scope unless their backlog priority explicitly says otherwise.

## 2. Business and Product Goal Reference

| ID | Goal |
|---|---|
| BO-01 | Secure a paid, governed Coimbatore pilot. |
| BO-04 | Establish a reusable governance, data, support, and outcome operating model. |
| BO-05 | Maintain public trust. |
| BO-06 | Maintain delivery discipline. |
| PG-01 | Improve verified situational awareness. |
| PG-02 | Improve safe coordination. |
| PG-03 | Protect vulnerable road users and emergency access. |
| PG-04 | Make outcomes measurable. |
| PG-05 | Fit government operations. |
| PG-06 | Prove a replicable model. |

## 3. Primary Traceability Matrix

| Business / product goal | Feature or module | Functional requirements | AI component / requirement | Data / security control | Acceptance criteria | MVP priority |
|---|---|---|---|---|---|---|
| BO-01, PG-05 | Identity, access, and governance (MOD-01) | PRD-X-03 to 05; FRS-12; FRS-14 | - | SEC-ZT-01 to 05; SEC-IAM-01 to 07; DATA-GOV-01 | AC-X-02, 03; AC-IAM-01 to 05 | Must |
| BO-01, PG-01 | Pilot geography, dashboard, and network context (MOD-02) | PRD-NOC-01 to 05; FRS-01; FRS-02 | - | DATA-MET-01; DATA-QLT-01 to 05; SEC-API-01 | AC-X-01, 04; AC-NOC-01 to 05 | Must |
| BO-01, PG-01 | Controlled camera evidence (MOD-02/03) | PRD-NOC-03; PRD-EVT-03; FRS-03 | AI-DET-01 only when Phase 2 enabled | DATA-CAM-02 to 06; SEC-API-05 | AC-NOC-04; AC-EVT-03 | Must; AI later |
| PG-02, PG-05 | Event lifecycle and incident coordination (MOD-03) | PRD-EVT-01 to 06; FRS-05; FRS-08 | AI-INC-01 only when Phase 2 enabled | DATA-EVT-01; SEC-AUD-01 to 03 | AC-EVT-01 to 06 | Must; AI later |
| PG-02, BO-05 | Human-governed decision support (MOD-04) | PRD-DS-01 to 06; FRS-07 | AI-REC-01; AI-GOV-01 to 06 | DATA-QLT-02; SEC-AI-01 to 03 | AC-DS-01 to 05; AC-X-05 | Must, bounded; advanced AI later |
| PG-03, BO-05 | Emergency coordination (MOD-05) | PRD-EMR-01 to 05; FRS-06 | AI-EMV-01 only as candidate cue in later gated scope | DATA-GPS-02 to 05; SEC-IAM-04; SEC-API-05 | AC-EMR-01 to 06 | Phase 2 conditional |
| PG-04, BO-04 | Safety and mobility analytics (MOD-06) | PRD-ANA-01 to 05; FRS-10 | AI-CNG-01; AI-QUE-01; AI-PRD-01 when approved | DATA-HIS-01; DATA-QLT-03; DATA-PRV-05 | AC-ANA-01 to 05 | MVP baseline; AI later |
| PG-01, PG-05 | Signal and asset/service health (MOD-07) | PRD-AST-01 to 02; FRS-04; FRS-11 | - | DATA-AST-01; DATA-SEN-02 to 05; SEC-INF-01 to 05 | AC-AST-01 to 05 | Must |
| PG-04, BO-05 | Reporting and executive review (MOD-08) | PRD-RPT-01 to 02; FRS-09 | - | DATA-GOV-02 to 05; DATA-SEC-04; SEC-AUD-01 | AC-RPT-01 to 05 | Must |
| PG-05, PG-06 | Integration framework (MOD-09) | PRD-INT-01 to 03; FRS-C-04; FRS-14 | AI-ML-03 where AI is enabled | DATA-SEC-01 to 05; SEC-API-01 to 06 | AC-INT-01 to 05 | Must |
| BO-04, PG-06 | Reusable configuration and operating model | PRD-X-09 to 10; PRD-RPT-02; FRS-14 | AI-ML-01 to 04 where applicable | DATA-MET-01; SEC-INF-05; SEC-SEC-01 to 02 | AC-X-03, 06; AC-Q-05 | Must |
| BO-05, PG-03 | Privacy, human override, and safety restraint | PRD-X-02 to 03; PRD-DS-04 to 05; FRS-06; FRS-07 | AI-GOV-03 to 06; AI-BIA-01 to 04 | DATA-PRV-01 to 05; SEC-IR-01 to 04 | AC-X-05; AC-DS-03 to 05; AC-EMR-02, 05, 06 | Must |
| BO-06, PG-05 | Release, resilience, and support readiness | PRD-X-07 to 08; NFR availability/maintainability/auditability | AI-ML-04 where enabled | SEC-DR-01 to 04; SEC-MON-01 to 03 | AC-X-04, 06; AC-Q-01 to 05 | Must |
| PG-06 | City replication and portfolio governance | Roadmap R5; MOD-01/08/09 future evolution | AI-ML-02; AI-BIA-01 to 02 | DATA-GOV-03 to 04; SEC-ZT-04 | City-specific acceptance package | Phase 3 |
| PG-04, PG-06 | Public information interface (MOD-10) | MOD-10 future scope; future FRS to be created | Future grounded AI only if separately approved | DATA-GOV-04; SEC-API-04; accessibility controls | AC-PUB-01 to 03 | Phase 3 / Future |

## 4. API and Backlog Traceability

| API domain | Functional feature | Backlog IDs | Primary acceptance evidence |
|---|---|---|---|
| Authentication/session | FRS-12, FRS-C-04/05 | BKL-M-01, BKL-M-02 | AC-IAM-01 to 04; API-AC-01 |
| Camera evidence | FRS-03, FRS-05 | BKL-M-11 | AC-NOC-04; AC-EVT-03; API-AC-02 |
| Signal/asset | FRS-04, FRS-11 | BKL-M-12 | AC-AST-01 to 05; API-AC-06 |
| Notifications | FRS-08 | BKL-M-09, BKL-M-13 | AC-EVT-04; API-AC-03 |
| Analytics/reporting | FRS-09, FRS-10 | BKL-M-16, BKL-S-08 | AC-ANA-01 to 05; AC-RPT-01 to 05 |
| Emergency | FRS-06 | BKL-S-04 | AC-EMR-01 to 06; API-AC-06 |
| Administration | FRS-12, FRS-14 | BKL-M-17 | AC-IAM-03 to 04; AC-X-03 |
| Audit | FRS-13 | BKL-M-17, BKL-M-18 | AC-X-03; AC-Q-02 |

## 5. Traceability Control Rules

| Rule | PMO control |
|---|---|
| No orphan requirement | Every requirement must link to at least one product/business goal, feature/backlog item, and acceptance criterion. |
| No unvalidated feature | Every implemented feature must link to a testable acceptance criterion and named release owner. |
| No hidden AI | Every AI capability needs an approved use case, data lineage, model version, safety/bias evaluation, monitoring, and human override path. |
| No hidden data expansion | Every data source/use change requires data owner, purpose, classification, retention, access, and security review. |
| No hidden action pathway | Every external operational request needs explicit authority, approval, audit, failure, and fallback behavior. |
| Controlled change | Requirement IDs remain stable; changed/superseded items record version, rationale, impact, approver, and downstream revalidation need. |

## 6. Architecture Handoff Requirements

Phase 05 must consume this matrix and add architecture-level links to:

1. Logical components, deployment boundaries, interfaces, and data flows.
2. Threat-model controls, trust boundaries, resilience patterns, and identity model.
3. Data schema, source contract, retention, lineage, and quality implementation.
4. Model pipeline, registry, monitoring, evaluation, and rollback controls where AI is enabled.
5. Test plans, test environments, observability, runbooks, and release evidence for every Must item.

## 7. Traceability Exit Check

- [x] All Phase 1 MVP backlog items map to a product/business goal and acceptance evidence.
- [x] Functional, AI, data, and security requirement IDs appear in the traceability chain where applicable.
- [x] AI components are marked as absent, MVP-bounded, conditional, or later-phase rather than silently assumed.
- [x] Emergency and physical-control capabilities remain clearly gated and non-MVP.
- [ ] Phase 05 architecture must assign implementation components, owners, and test cases before build authorization.

