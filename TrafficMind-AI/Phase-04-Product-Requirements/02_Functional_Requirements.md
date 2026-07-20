# TrafficMind AI: Functional Requirements Specification

**Document ID:** TMA-FRS-002  
**Version:** 0.1  
**Date:** 19 July 2026  
**Parent document:** [TMA-PRD-001](01_Product_Requirements.md)  
**Status:** Draft for product, architecture, security, and stakeholder validation

## 1. Purpose and Requirement Conventions

This specification converts the master PRD into testable product behavior. It defines the intended initial Coimbatore pilot; it does not authorize live integration or operational traffic control.

**Priority:** Must = required for pilot release; Should = included if pilot scope allows; Future = not initial release.  
**Safety rule:** TrafficMind AI presents evidence and approved decision support. It must not autonomously control signals, dispatch emergency services, or replace statutory authority.

## 2. Common Functional Rules

| ID | Requirement | Acceptance criterion |
|---|---|---|
| FRS-C-01 | Every displayed operational record shall include source, timestamp, freshness, and data-state label (observed, reported, inferred, unavailable). | Test record displays all four fields; stale/unavailable source cannot appear current. |
| FRS-C-02 | Every operational action, approval, override, configuration change, and export shall be audit logged. | Sample audit reconstruction identifies actor, time, before/after state, and rationale. |
| FRS-C-03 | Any external operational request shall require a role-authorized human approval. | Negative test confirms no request is sent without approval. |
| FRS-C-04 | A source/integration failure shall degrade only its dependent context and surface a visible health state. | Failure injection leaves unrelated modules usable and labels affected data. |
| FRS-C-05 | All feature availability shall be governed by approved role, policy, geography, and pilot scope. | User outside policy scope cannot view or act on restricted data/workflow. |

## 3. Feature Specifications

### FRS-01: Operations Dashboard

| Field | Specification |
|---|---|
| Module | MOD-02 Network Operations Context; MOD-03 Event Management; MOD-08 Reporting |
| Title | Role-based Operations Dashboard |
| Description | Provide a shift-ready summary of authorized pilot-area conditions, active events, assignments, source health, emergency workflow state, and KPI/service alerts. |
| Actors | ICCC Traffic Operator, Traffic Police Supervisor, Municipal Mobility Manager, City Executive. |
| Trigger | User signs in, changes shift/area, or selects refresh. |
| Inputs | User role, approved area, event feed, source health, asset status, configured KPIs. |
| Outputs | Prioritized event list, status cards, freshness indicators, assignment/escalation queue, approved drill-down links. |
| Business rules | Dashboard order follows approved severity/playbook; no role sees unapproved data; data state is always visible; executive view is aggregated by default. |
| Preconditions | Authenticated user; role/area configuration; at least one approved source or explicit unavailable state. |
| Postconditions | Dashboard access is logged; no operational state is changed by viewing. |
| Acceptance criteria | Given an operator with active events, dashboard shows all events assigned to their area ordered by approved priority; given a source outage, its card is marked stale/unavailable within configured health interval. |
| Error handling | Show partial dashboard with source-level error, last successful timestamp, and fallback procedure link; never display blank data as zero. |
| Dependencies | Identity/access, event service, source-health service, pilot configuration. |
| Security notes | Least-privilege data filtering; no credentials or sensitive payloads in UI/logs. |
| Future enhancements | Shift briefing, natural-language grounded summary, personalized workload forecast. |

### FRS-02: Live Map and Corridor Context

| Field | Specification |
|---|---|
| Module | MOD-02 Network Operations Context |
| Title | Authorized Live Map |
| Description | Display approved pilot geography, junctions/corridors, events, roadworks, source health, and selected mobility/safety context. |
| Actors | ICCC Operator, Traffic Police Supervisor, Transit Manager, Municipal Mobility Manager. |
| Trigger | User opens map, changes layers, selects an event, or receives an approved update. |
| Inputs | Approved GIS/base map, pilot boundary, event geometry, traffic/sensor feeds, asset/roadwork records. |
| Outputs | Map layers, event detail, source timestamp/freshness, contextual alert. |
| Business rules | Only approved areas/layers are displayed; observed/reported/inferred states use distinct labels; map is not a routing or consumer-navigation service. |
| Preconditions | Approved pilot map and geospatial data; user role permits area access. |
| Postconditions | Selected map context can be attached to an event; selection is audit logged when used operationally. |
| Acceptance criteria | Selecting a verified event opens source, timestamp, evidence, affected area, and known constraints; unavailable feed is visibly unavailable rather than omitted silently. |
| Error handling | Fall back to last approved static geometry with freshness warning; disable affected layers. |
| Dependencies | GIS service, integration framework, event management, data-governance policy. |
| Security notes | Enforce geography and data-layer permissions; restrict sensitive emergency layers. |
| Future enhancements | Calibrated digital-twin scenario view; accessibility/curb layers; V2X context. |

### FRS-03: Camera Monitoring and Evidence Review

| Field | Specification |
|---|---|
| Module | MOD-02; MOD-03 |
| Title | Authorized Camera Evidence Review |
| Description | Let authorized users inspect approved live or recorded camera evidence linked to a pilot event and record a verification rationale. |
| Actors | ICCC Operator, Traffic Police Supervisor, authorized Security/IT Administrator. |
| Trigger | Event requires verification or user opens authorized camera context. |
| Inputs | Camera entitlement, stream/clip reference, event, retention policy, operator annotation. |
| Outputs | Evidentiary view, privacy-aware metadata, verification note, evidence reference. |
| Business rules | Camera access is purpose- and role-limited; no facial recognition or automated enforcement; clips are not copied/exported except per approved policy. |
| Preconditions | Written camera/data authorization, valid user permission, camera health/availability. |
| Postconditions | View and event linkage are logged; verification result updates only through event workflow. |
| Acceptance criteria | Authorized operator can attach a camera evidence reference and rationale to an event; unauthorized role receives access-denied without stream metadata disclosure. |
| Error handling | Show camera unavailable, last health time, and alternative verification path; do not retry endlessly. |
| Dependencies | Video management system, identity/access, retention policy, event service. |
| Security notes | Signed/short-lived stream access, no raw video in application logs, watermark/audit where required. |
| Future enhancements | Edge-generated anonymized event snippets; privacy-preserving object/queue metadata. |

### FRS-04: Signal and Asset Monitoring

| Field | Specification |
|---|---|
| Module | MOD-07 Asset and Service Health |
| Title | Signal and Field Asset Health |
| Description | Show approved signal/controller/camera/network health, last successful contact, fault class, operational impact, and maintenance handoff reference. |
| Actors | Maintenance Engineer, ICCC Operator, System Administrator, Municipal Mobility Manager. |
| Trigger | Health update, threshold breach, maintenance status change, or user search. |
| Inputs | Asset registry, telemetry/health feed, work-order reference, impacted geography. |
| Outputs | Health state, fault alert, affected event/corridor context, work reference. |
| Business rules | Platform does not modify controller configuration; a health alert is not proof of a physical fault until verified by approved process. |
| Preconditions | Asset registry and authorized telemetry or manual-status feed. |
| Postconditions | Fault acknowledgement/handoff is audit logged; system-of-record remains external maintenance tool. |
| Acceptance criteria | Simulated missed telemetry changes asset to stale after configured threshold; maintenance user can link a work reference without changing external work order. |
| Error handling | Distinguish device fault, network loss, and unknown state; show manual inspection fallback. |
| Dependencies | Asset registry, telemetry adapter, maintenance system reference. |
| Security notes | Device credentials never exposed to UI; privileged configuration remains outside product scope. |
| Future enhancements | Predictive maintenance and spare-parts recommendations. |

### FRS-05: Incident Detection and Verification

| Field | Specification |
|---|---|
| Module | MOD-03 Event and Incident Management |
| Title | Event Lifecycle Management |
| Description | Create, de-duplicate, verify, assign, monitor, close, and review operational events. |
| Actors | ICCC Operator, Traffic Police Supervisor, approved partner liaison. |
| Trigger | Authorized source alert, operator report, partner report, or manual event creation. |
| Inputs | Source data, location, event type, evidence, severity policy, verification rationale, assignment. |
| Outputs | Event record, lifecycle status, owner, escalation, linked evidence, closure/review record. |
| Business rules | Only approved roles verify events; verified status requires evidence/rationale; duplicate records are linked, never silently deleted; source alert alone cannot trigger external action. |
| Preconditions | Event taxonomy, severity/playbook policy, authenticated actor. |
| Postconditions | Lifecycle transition and all handoffs are immutably logged. |
| Acceptance criteria | Event cannot move from under-verification to verified without required evidence/rationale; duplicate creation produces linked relationship; closure requires outcome and unresolved-issue fields. |
| Error handling | Validation error lists required fields; assignment failure retains event and escalates to configured fallback owner. |
| Dependencies | Identity/access, map, evidence review, notifications, playbook configuration, audit log. |
| Security notes | Restrict event visibility by geography/sensitivity; protect emergency event details. |
| Future enhancements | Bounded anomaly detection and duplicate-confidence suggestions, always human-verified. |

### FRS-06: Emergency Coordination

| Field | Specification |
|---|---|
| Module | MOD-05 Emergency Coordination |
| Title | Authorized Emergency Route Coordination |
| Description | Support minimum-necessary, human-led coordination of an approved emergency movement through route obstruction, junction/access constraints, agency ownership, and post-passage recovery. |
| Actors | Authorized EMS/Fire/Police Liaison, Traffic Police Supervisor, ICCC Operator. |
| Trigger | Authorized emergency service invokes approved coordination procedure. |
| Inputs | Approved emergency status token/reference, permitted route segment, obstruction context, safety constraints, agency acknowledgements. |
| Outputs | Coordination event, status timeline, assigned actions, recovery status, protected audit record. |
| Business rules | Disabled until policy/data agreement is active; excludes clinical/patient data; no automatic signal pre-emption; all actions follow approved service procedure and human authorization. |
| Preconditions | Signed SOP, authorized roles, tabletop-exercise completion, approved data policy. |
| Postconditions | Coordination is closed only after recovery state and review requirement are recorded. |
| Acceptance criteria | Without active policy configuration, emergency feature is inaccessible; with valid procedure, each action records agency owner and acknowledgement; route context excludes patient details. |
| Error handling | If route/source data unavailable, present manual emergency procedure and notify authorized coordinator; do not infer clear passage. |
| Dependencies | Event management, map/context, notifications, policy configuration, audit log. |
| Security notes | Restricted emergency access, minimal data, heightened audit and retention controls. |
| Future enhancements | Authorized V2X status and signal-priority integration after separate safety case. |

### FRS-07: AI Recommendations and Decision Support

| Field | Specification |
|---|---|
| Module | MOD-04 Decision Support |
| Title | Explainable Operational Recommendation |
| Description | Present approved playbook options for verified events with evidence, confidence, constraints, risks, expected impact, and explicit human approval/override. |
| Actors | ICCC Operator, Traffic Police Supervisor, Municipal Mobility Manager. |
| Trigger | Verified event reaches an eligible type/severity or authorized user requests analysis. |
| Inputs | Verified event, source freshness, approved playbook, local policy constraints, optional inference output/version. |
| Outputs | Ranked/ordered approved options, rationale, limitations, approval/override record. |
| Business rules | Recommendations cannot invent actions outside configured playbook; no direct actuation; users may reject/override with rationale; low confidence suppresses recommendation and shows evidence only. |
| Preconditions | Verified event, approved playbook, model/policy version approved, sufficient current data. |
| Postconditions | Selection, rejection, approval, and expected/observed outcome link are logged. |
| Acceptance criteria | Recommendation view shows evidence, confidence, limitations, safety constraints, and affected area; an operator can reject it; no external request is sent without authorized approval. |
| Error handling | On inference failure/stale inputs, show unavailable decision support with manual playbook link. |
| Dependencies | Event management, context, policy/configuration, audit, notifications. |
| Security notes | Model/version provenance logged; protect against prompt/configuration injection; no sensitive input in diagnostic logs. |
| Future enhancements | Calibrated forecasting, scenario comparison, grounded GenAI explanation. |

### FRS-08: Notifications and Escalations

| Field | Specification |
|---|---|
| Module | MOD-03; MOD-08 |
| Title | Policy-Based Notifications |
| Description | Deliver role-appropriate in-product and approved external notifications for events, assignments, escalation deadlines, health failures, and governance reviews. |
| Actors | All authorized roles; System Administrator configures policy. |
| Trigger | Event lifecycle change, assignment, SLA/deadline, health threshold, security/governance condition. |
| Inputs | Notification policy, role, contact endpoint, event severity, acknowledgement state. |
| Outputs | Notification, acknowledgement, escalation record, delivery state. |
| Business rules | Notifications follow severity/role policy; emergency communications remain under agency SOP; no sensitive detail sent through unapproved channel; duplicate/noise suppression is required. |
| Preconditions | Approved notification channels and user contact/role configuration. |
| Postconditions | Delivery/acknowledgement/escalation is logged. |
| Acceptance criteria | High-severity unacknowledged event escalates to configured role within policy time; duplicate alerts are suppressed; unauthorized channel receives no protected details. |
| Error handling | Mark delivery failure, retry per policy, escalate through alternate approved channel, retain in-product alert. |
| Dependencies | Event service, identity, policy configuration, approved messaging provider. |
| Security notes | Encrypt endpoints/secrets; prevent notification content leakage; audit outbound messages. |
| Future enhancements | Shift-aware routing and workload-sensitive alert prioritization. |

### FRS-09: Reports and Executive Review

| Field | Specification |
|---|---|
| Module | MOD-08 Reporting and Executive Review |
| Title | Governed Operational and KPI Reports |
| Description | Generate reproducible event, service, KPI, safety, governance, and executive reports with methodology/provenance notes. |
| Actors | Data Analyst, Municipal Mobility Manager, City Executive, System Administrator. |
| Trigger | Scheduled cycle, approved ad hoc request, pilot review milestone. |
| Inputs | Approved data scope, report template, methodology version, date range, access policy. |
| Outputs | View/exportable report, data-quality statement, assumption/limitation section, audit record. |
| Business rules | Reports must separate fact, assumption, inferred estimate, and unresolved limitation; only approved aggregate/de-identified exports are allowed. |
| Preconditions | Valid data/methodology, authorized report role. |
| Postconditions | Generated report is versioned, attributed, and auditable. |
| Acceptance criteria | A pilot scorecard includes baseline, observation period, data coverage, KPI method, limitations, and no unsupported outcome claim. |
| Error handling | Block incomplete report and identify missing methodology/source; retain draft privately if policy permits. |
| Dependencies | Analytics, audit, data-governance, export service. |
| Security notes | Watermark/restrict sensitive reports; enforce export and retention policy. |
| Future enhancements | Statewide benchmarking and scheduled board packs. |

### FRS-10: Analytics

| Field | Specification |
|---|---|
| Module | MOD-06 Safety and Mobility Analytics |
| Title | Pilot Outcome Analytics |
| Description | Analyze selected travel reliability, queue/event recovery, safety proxy, transit, fuel/CO2 estimate, and data-quality measures. |
| Actors | Data Analyst, Municipal Mobility Manager, authorized city sponsor. |
| Trigger | Baseline study, periodic review, post-event review, expansion decision. |
| Inputs | Approved corridor/time scope, source coverage, methodology, vehicle mix/emissions factors where applicable. |
| Outputs | Metric result, comparison, confidence/limitations, report-ready data. |
| Business rules | Proxy conflicts are not labeled confirmed crashes; fuel/CO2 requires documented inputs; comparisons require disclosed matching/confounders. |
| Preconditions | Approved measurement plan and sufficient data coverage. |
| Postconditions | Analysis run/version and source window are retained. |
| Acceptance criteria | Analytics output cannot be published without methodology metadata; fuel/CO2 output displays input assumptions and uncertainty range. |
| Error handling | Report insufficient coverage rather than compute misleading result; flag anomalous source period. |
| Dependencies | Context, event history, reporting, approved data model. |
| Security notes | Use aggregated/de-identified data by default; limit analyst export. |
| Future enhancements | Calibrated network simulation and equity impact modeling. |

### FRS-11: Asset Management Workflow

| Field | Specification |
|---|---|
| Module | MOD-07 Asset and Service Health |
| Title | Asset Fault Triage and Handoff |
| Description | Let authorized users triage health alerts, link operational impact, assign/refer maintenance work, and track status without replacing the maintenance system of record. |
| Actors | Maintenance Engineer, ICCC Operator, System Administrator. |
| Trigger | Health alert, manual report, operator identifies asset-related issue. |
| Inputs | Asset identifier, health status, fault evidence, impact, work reference, update. |
| Outputs | Triage record, linked event, work handoff/reference, status timeline. |
| Business rules | Only maintenance roles change maintenance disposition; external work-order ID is referenced not overwritten; unresolved critical asset fault may trigger operational warning. |
| Preconditions | Approved asset registry and maintenance owner. |
| Postconditions | Handoff/update is logged and visible to affected operator. |
| Acceptance criteria | Engineer can link a work reference, set triage status, and operator sees service-impact status; non-maintenance user cannot close repair item. |
| Error handling | Missing asset ID creates controlled manual-review record; external work-system outage does not discard triage. |
| Dependencies | Asset registry, telemetry, event service, optional maintenance adapter. |
| Security notes | Privileged asset metadata filtered by role; protect device identifiers/secrets. |
| Future enhancements | SLA prediction, spare-parts and preventive-maintenance planning. |

### FRS-12: User Management

| Field | Specification |
|---|---|
| Module | MOD-01 Identity, Access, and Governance |
| Title | User, Role, and Access Management |
| Description | Manage users, roles, area/data permissions, approval delegations, account lifecycle, and periodic access review. |
| Actors | System Administrator, IT/Security Administrator, authorized agency approver. |
| Trigger | User onboarding, role change, transfer, access review, account offboarding. |
| Inputs | Identity, agency, role, area, purpose, approver, expiry/review date. |
| Outputs | Account/access state, review task, audit record, access-denied outcome. |
| Business rules | Least privilege, explicit approval, time-bound elevation, no shared accounts, disable access on termination/expiry. |
| Preconditions | Identity source and approved role/authority matrix. |
| Postconditions | Access change is effective per policy and fully logged. |
| Acceptance criteria | Administrator cannot grant themselves unauthorized elevated role; expired delegated access is removed automatically; access review identifies stale accounts. |
| Error handling | Failed identity sync creates admin alert and preserves last known safe access state. |
| Dependencies | Identity provider, audit log, policy configuration. |
| Security notes | MFA/approved authentication policy; privileged actions require stronger controls and review. |
| Future enhancements | Federated government identity, just-in-time privileged access. |

### FRS-13: Audit Logs

| Field | Specification |
|---|---|
| Module | MOD-01; MOD-08 |
| Title | Operational and Administrative Audit Trail |
| Description | Provide tamper-evident, searchable audit records for events, evidence, approvals, overrides, access, exports, policy changes, integrations, and model/configuration versions. |
| Actors | Authorized Auditor, IT/Security Administrator, City Sponsor, System Administrator. |
| Trigger | Any auditable action or scheduled compliance review. |
| Inputs | Actor, action, target, before/after state, timestamp, source, rationale, correlation ID. |
| Outputs | Searchable audit entries, filtered review/export, integrity status. |
| Business rules | Audit records cannot be edited by ordinary administrators; access to audit data is itself logged; retention follows approved policy. |
| Preconditions | Audit storage/clock configuration and policy. |
| Postconditions | Event/action is linked to audit record before completion confirmation. |
| Acceptance criteria | Reviewer reconstructs a sample incident from creation through closure and identifies every actor/approval; attempted audit modification is denied and logged. |
| Error handling | If audit write fails, block high-risk action and alert security; do not silently continue. |
| Dependencies | All modules, secure audit store, identity. |
| Security notes | Integrity protection, restricted access, retention/legal hold policy. |
| Future enhancements | Cross-city compliance dashboards and cryptographic evidence anchoring where justified. |

### FRS-14: System Configuration

| Field | Specification |
|---|---|
| Module | MOD-01; MOD-09 |
| Title | Policy and Pilot Configuration |
| Description | Configure approved geography, event taxonomy, severity, playbooks, notification policies, sources, retention, role scope, health thresholds, and feature flags. |
| Actors | System Administrator, authorized Product/Operations Administrator, Security Administrator, agency approver. |
| Trigger | Pilot setup, policy change, release configuration, source onboarding. |
| Inputs | Approved change request, configuration values, approver, effective date, rollback plan. |
| Outputs | Versioned configuration, validation result, rollout state, audit record. |
| Business rules | High-risk configuration requires dual approval; configuration validates before activation; emergency feature remains disabled without explicit approved configuration. |
| Preconditions | Authorized role and approved change process. |
| Postconditions | Active version, approver, effective time, and rollback reference are recorded. |
| Acceptance criteria | Invalid playbook/configuration cannot publish; high-risk change requires configured approver; rollback restores previous known version and logs action. |
| Error handling | Failed validation preserves active configuration; notify owner with actionable errors. |
| Dependencies | Identity, audit, all configurable modules, release management. |
| Security notes | Segregation of duties; secrets stored outside editable UI configuration; change monitoring. |
| Future enhancements | Policy-as-code and multi-city template governance. |

## 4. Cross-Feature Acceptance Scenarios

| Scenario | Expected result |
|---|---|
| Incident source becomes stale during operator review. | Evidence is labeled stale, recommendation is suppressed or qualified, operator sees manual verification path. |
| Operator attempts to verify event without evidence. | System blocks transition and identifies required verification information. |
| Emergency feature is accessed before SOP approval. | System denies access, logs attempt, and directs user to policy owner; no data is revealed. |
| Low-confidence AI insight appears. | System displays evidence/limitations but does not issue an operational recommendation. |
| User without area permission opens live map link. | Access is denied without exposing event/camera metadata. |
| Audit store is unavailable during high-risk approval. | System blocks approval/action and raises a security/service alert. |
| Maintenance connector fails. | Health state changes visibly; work handoff remains available through approved manual fallback. |

## 5. Traceability and Next Step

Every feature in this document traces to TMA-PRD-001 product goals, modules, and safety boundaries. Before engineering implementation, the team must produce workflow specifications, data contracts, architecture, security design, UI acceptance criteria, and test cases for the approved pilot scope.

**No functional requirement authorizes a field deployment without city approval, security/privacy review, defined operational ownership, and a verified fallback procedure.**
