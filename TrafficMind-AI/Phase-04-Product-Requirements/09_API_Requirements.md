# TrafficMind AI: API Requirements Specification

**Document ID:** TMA-API-009  
**Version:** 0.1  
**Date:** 20 July 2026  
**Parent documents:** [Functional Requirements](02_Functional_Requirements.md), [Data Requirements](04_Data_Requirements.md), [Security Requirements](05_Security_Requirements.md)  
**Status:** Draft for architecture, security, data-owner, and agency validation

## 1. Purpose and API Boundary

This document defines the logical API contract required for the approved TrafficMind AI pilot. Endpoint paths, schemas, limits, and security controls must be finalized through architecture and agency integration review before implementation.

The initial API surface is **read, verify, coordinate, configure, audit, and report**. It shall not provide autonomous signal actuation, emergency dispatch, camera-control, enforcement, facial recognition, or unrestricted data export. Any future external operational request must pass an approved human authorization workflow and a separate safety/integration review.

## 2. Shared API Standards

| Area | Requirement |
|---|---|
| Base path | Versioned, HTTPS-only API, for example `/api/v1`. A breaking change requires a new version. |
| Format | JSON request/response except approved secure file/stream integrations. All timestamps use ISO 8601 UTC; client display may localize. |
| Identity | OAuth 2.0/OIDC-compatible bearer tokens or mutually authenticated service identity, as approved by the security architecture. |
| Authorization | RBAC plus ABAC enforcement by agency, role, purpose, geography, data classification, and policy state. |
| Provenance | Operational responses include source, observed/received time where applicable, freshness/data state, correlation ID, and relevant version. |
| Idempotency | State-changing requests require an idempotency key where duplicate submission could create duplicate action. |
| Pagination | Collection endpoints support bounded `limit`, opaque `cursor`, and server-side filtering. |
| Validation | Validate schema, type, size, classification, allowed geography, and business rules before processing. |
| Audit | Material reads of restricted data and all writes, approvals, exports, configuration, and administrative calls are audit logged. |
| Errors | Return structured error body: `code`, `message`, `correlationId`, and safe remediation hint. Never expose secrets or internal topology. |

### Standard Error Codes

| HTTP | Code | Meaning |
|---|---|---|
| 400 | `INVALID_REQUEST` | Schema, required field, range, or business-rule validation failed. |
| 401 | `UNAUTHENTICATED` | Missing, expired, or invalid identity token/certificate. |
| 403 | `ACCESS_DENIED` | Role, attribute, purpose, geography, or policy does not permit action. |
| 404 | `NOT_FOUND` | Resource does not exist or is not visible to caller. |
| 409 | `CONFLICT` | Version, lifecycle, idempotency, or concurrent update conflict. |
| 412 | `PRECONDITION_FAILED` | Required policy, approval, data freshness, or state condition is not satisfied. |
| 422 | `UNPROCESSABLE_STATE` | Request is valid but cannot be processed under current workflow/state. |
| 429 | `RATE_LIMITED` | Caller exceeded approved request quota. |
| 500 | `INTERNAL_ERROR` | Unexpected service error; correlation ID is provided. |
| 503 | `DEPENDENCY_UNAVAILABLE` | Required approved dependency/source is unavailable or degraded. |

### Initial Rate-Limit Policy

These are planning defaults and must be tuned after load testing, source-owner agreement, and operational review.

| Client class | Default limit | Burst | Special rule |
|---|---|---|---|
| Interactive user | 60 requests/minute/user | 20 requests/10 seconds | Dashboard/map reads are paginated and cached where safe. |
| Approved service integration | 300 requests/minute/client | 100 requests/10 seconds | Requires allowlisted identity and schema validation. |
| Bulk analytics/report export | 10 jobs/hour/client | 2 concurrent jobs | Asynchronous job required; subject to data/export policy. |
| Administrative/configuration | 30 requests/minute/user | 10 requests/10 seconds | High-risk calls need step-up authentication/approval. |
| Emergency coordination | 30 requests/minute/client | 10 requests/10 seconds | Rate limit never replaces SOP; failure falls back to agency procedure. |

## 3. Authentication and Session API

**Purpose:** establish, inspect, refresh, and revoke a policy-scoped authenticated session. Authentication is typically delegated to an approved identity provider; these endpoints describe the product-facing contract.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/auth/session` | `GET` | Bearer token. | Subject, active role, agency, permitted geography, purpose scope, expiry, MFA/assurance state. | Authenticated identity; response excludes secrets and unnecessary personal data. |
| `/auth/token/refresh` | `POST` | Approved refresh/session artifact. | Short-lived access token/session expiry. | Refresh rotation, revocation check, anti-replay controls. |
| `/auth/access-requests` | `POST` | Requested role/scope, purpose, approver reference, expiry. | Request ID, review state. | Authenticated user; cannot self-approve privileged access. |
| `/auth/session/revoke` | `POST` | Session ID/reason. | Revocation confirmation. | Self-revocation or authorized security/admin role; audit mandatory. |

**Dependencies:** approved identity provider, MFA, IAM/role policy, audit store, security monitoring.  
**Error behavior:** invalid/expired tokens return `401`; unauthorised scope returns `403`; unavailable identity provider returns `503` with safe sign-in retry/fallback message.

## 4. Camera Evidence API

**Purpose:** expose approved camera metadata, health, and time-bounded evidence references for event verification. It is not a general surveillance, recording, camera-control, or raw-video distribution API.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/cameras` | `GET` | Approved geography, health/status filter, pagination. | Permitted camera metadata: ID, zone, owner, health, last successful time, approved purpose. | Role/area/purpose filters; no stream URL in list. |
| `/cameras/{cameraId}/health` | `GET` | Camera ID. | Health state, last observed/received time, coverage limitation, correlation ID. | Approved operational/maintenance role. |
| `/events/{eventId}/camera-evidence` | `GET` | Event ID, approved evidence window/reference. | Authorized evidence metadata and short-lived viewing reference where policy permits. | Restricted purpose-based access; watermark/audit; no raw video in logs. |
| `/events/{eventId}/camera-evidence` | `POST` | Camera ID, evidence reference/window, verification note. | Evidence link ID, event update state. | Authorized verifier only; idempotency key; retention policy enforced. |

**Business rules:** source health/freshness is always returned; video/image access is disabled where policy or retention disallows it; no facial/biometric/plate data is returned.  
**Dependencies:** approved video-management source, camera registry, event service, data retention policy, IAM, audit.  
**Rate limit:** interactive 30 evidence-reference requests/minute/user; service stream access is governed outside this API and separately approved.

## 5. Traffic Signal and Field-Asset API

**Purpose:** provide read-only signal/controller/camera/network asset health and approved maintenance-handoff context.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/assets` | `GET` | Type, geography, health, criticality, pagination. | Allowed asset metadata, health, impact, last contact. | Role/area-limited; no device secret/configuration returned. |
| `/assets/{assetId}` | `GET` | Asset ID. | Asset status, source freshness, maintenance reference, allowed linked context. | Maintenance/operational role; classification check. |
| `/assets/{assetId}/triage` | `POST` | Triage status, fault evidence, operational impact, work-reference, note. | Triage record/version, audit ID. | Maintenance-authorized role; no controller write action. |
| `/assets/{assetId}/health-history` | `GET` | Time range, approved metrics. | Health history/quality states subject to retention. | Maintenance/analyst role and policy. |

**Prohibited initial endpoint:** no `POST`/`PATCH` endpoint may alter signal phase, controller configuration, field device credentials, or physical device action.  
**Dependencies:** asset registry, telemetry adapter, maintenance-system reference, event service, audit store.  
**Rate limit:** 60 reads/minute/user; 20 triage writes/minute/user; integration ingestion is handled through separately authenticated adapter contract.

## 6. Notification and Escalation API

**Purpose:** deliver and manage role-appropriate, policy-based notification, acknowledgement, and escalation records.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/notifications` | `GET` | Status, severity, event, time range, pagination. | Notifications visible to current scope, delivery/ack state. | Recipient/role filtering; protected content redaction. |
| `/notifications/{notificationId}/acknowledgements` | `POST` | Acknowledgement, optional note. | Updated acknowledgement/time/audit ID. | Intended recipient or approved delegate. |
| `/events/{eventId}/notifications` | `POST` | Approved recipients/roles, template, priority, channel policy. | Notification job/status. | Authorized workflow role; no arbitrary sensitive message body/channel. |
| `/notification-policies` | `GET` / `PATCH` | Policy query or approved policy version/change. | Policy/version/status. | Read for authorized users; write requires admin + configured approval. |

**Dependencies:** event service, IAM, approved messaging provider, policy configuration, audit, delivery monitor.  
**Error behavior:** delivery failure is recorded and escalated through alternate approved path; sensitive detail is not retried to an unapproved channel.  
**Rate limit:** 20 event-notification jobs/minute/user; outbound provider limits must be respected.

## 7. Analytics and Reporting API

**Purpose:** query governed aggregated metrics and produce reproducible, policy-controlled analytical/report jobs.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/analytics/metrics` | `GET` | Approved metric, geography, period, aggregation, filter. | Metric value/range, method/version, coverage, quality, limitations. | Analyst/executive scope; aggregate/de-identified by default. |
| `/analytics/comparisons` | `POST` | Baseline/observation period, metric, geography, method. | Asynchronous comparison job ID/status/result. | Requires approved methodology and data coverage. |
| `/reports` | `POST` | Template, audience, approved date/geography/metrics, export format. | Report job ID, data/method version, review state. | Role, classification, purpose, and export policy enforced. |
| `/reports/{reportId}` | `GET` | Report ID. | Authorized report/result, limitations, approval/version. | Watermark/time-limited download where required. |
| `/reports/{reportId}/approve` | `POST` | Review decision/comment. | Approved/returned state and audit record. | Authorized reviewer; cannot approve own restricted report if segregation policy applies. |

**Business rules:** reports distinguish facts, assumptions, estimates, and limitations; outcomes cannot publish without approved methodology and required coverage metadata.  
**Dependencies:** analytics store, data lineage/quality service, report renderer, export policy, audit.  
**Rate limit:** analytics queries 30/minute/user; generation is asynchronous with bulk limits in shared policy.

## 8. Emergency Coordination API

**Purpose:** support a restricted, minimum-necessary coordination record after written SOP, data-sharing, user-role, and policy gates are active.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/emergency/eligibility` | `GET` | Current user/policy context. | Enabled/disabled state and non-sensitive reason. | Restricted role; no emergency data returned when disabled. |
| `/emergency/coordination-events` | `POST` | Authorized status reference, permitted route segment, safety constraints, agency owner. | Restricted event ID, state, audit ID. | Emergency liaison role, active SOP, policy gate, idempotency key. |
| `/emergency/coordination-events/{id}` | `GET` | Event ID. | Minimum-necessary route constraints, status, owners, acknowledgements. | ABAC restricted by agency/purpose/event assignment. |
| `/emergency/coordination-events/{id}/acknowledgements` | `POST` | Task acknowledgement/status/note. | Updated event timeline. | Named agency owner/delegate only. |
| `/emergency/coordination-events/{id}/recovery` | `POST` | Passage/recovery confirmation and review requirement. | Closed/recovery state, protected audit ID. | Authorized emergency workflow owner. |

**Business rules:** clinical/patient details are prohibited; route data never becomes a guarantee of clear passage; no signal-pre-emption, dispatch, or automatic operational command endpoint exists in MVP.  
**Dependencies:** active SOP/policy configuration, restricted IAM, event service, approved route context, protected audit storage.  
**Rate limit:** shared emergency limit; repeated failures redirect users to the existing emergency procedure, not a public retry loop.

## 9. Administration API

**Purpose:** manage governed users, access requests, roles, configuration, sources, playbooks, feature flags, and approved change lifecycle.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/admin/users` | `GET` / `POST` | User query or approved identity/agency/role/scope/expiry. | User/access state, review task, audit ID. | Admin role, separation of duties, MFA. |
| `/admin/users/{userId}/access-grants` | `PATCH` | Approved role/attribute scope, approver, expiry. | Versioned grant state. | Cannot self-grant elevated access; dual approval when configured. |
| `/admin/sources` | `GET` / `POST` | Source registry metadata, owner, purpose, schema, health policy. | Source onboarding/review state. | Admin/data-owner approval; secrets excluded. |
| `/admin/configurations` | `GET` / `POST` | Versioned approved configuration/change request/rollback reference. | Validation result, version, pending/active state. | High-risk change requires approver, MFA, audit, rollback plan. |
| `/admin/feature-flags/{flag}` | `PATCH` | Scoped enable/disable, reason, effective time. | Flag state/audit ID. | Restricted; emergency/AI flag changes follow dual control where configured. |
| `/admin/access-reviews` | `GET` / `POST` | Review schedule, scope, attestation decision. | Review results/remediation tasks. | Admin/security reviewer scope. |

**Dependencies:** IAM/identity provider, policy/configuration store, source registry, security monitoring, audit store, change-management process.  
**Rate limit:** shared administrative limit; failed audit/configuration validation blocks all high-risk updates.

## 10. Audit API

**Purpose:** search and export restricted, tamper-evident operational and administrative audit records for authorized oversight and investigation.

| Endpoint | Method | Inputs | Outputs | Authorization and security |
|---|---|---|---|---|
| `/audit/events` | `GET` | Time range, actor, action type, resource, correlation ID, approved scope. | Paginated audit records and integrity/status metadata. | Auditor/security/admin role; access itself audited. |
| `/audit/events/{auditId}` | `GET` | Audit ID. | Full authorized record chain, before/after references, correlation context. | Restricted role and classification policy. |
| `/audit/exports` | `POST` | Approved filter, purpose, recipient, export format. | Export job/status/audit ID. | Export policy, step-up/dual approval where required, watermark. |
| `/audit/integrity` | `GET` | Approved time window. | Integrity-check status and exception summary. | Security/auditor role only. |

**Business rules:** ordinary administrators cannot modify or erase audit history; failure to write audit data blocks high-risk state changes.  
**Dependencies:** secure audit store, time synchronization, IAM, export service, retention/legal-hold policy.  
**Rate limit:** 30 searches/minute/user; exports follow bulk analytics/export limits.

## 11. Cross-API Acceptance Criteria

| ID | Criterion |
|---|---|
| API-AC-01 | Every endpoint rejects unauthenticated and unauthorized requests without revealing protected resource metadata. |
| API-AC-02 | Every operational response includes appropriate provenance, freshness/data-state, correlation ID, and version metadata. |
| API-AC-03 | Every state-changing endpoint validates business preconditions and writes an audit record before confirming high-risk completion. |
| API-AC-04 | A failed dependency produces a safe, structured degraded response; the service never substitutes stale/empty data as current. |
| API-AC-05 | API schemas, roles, error codes, rate limits, and version policy are published in an approved interface definition before integration testing. |
| API-AC-06 | No MVP endpoint can directly command a signal, dispatch an emergency vehicle, control a camera, or perform automated enforcement. |

## 12. Implementation Readiness Checklist

- [ ] Named owner, consumer, data classification, and approved purpose for each endpoint/integration.
- [ ] Interface schema, authentication method, authorization attributes, error mapping, and rate limit agreed.
- [ ] Security review covers token/service identity, input validation, logging, secrets, and dependency failure behavior.
- [ ] Source freshness, data quality, audit, monitoring, and manual fallback behaviors are tested.
- [ ] Emergency and external-action surfaces remain disabled until their separate policy/SOP/safety gates are accepted.

