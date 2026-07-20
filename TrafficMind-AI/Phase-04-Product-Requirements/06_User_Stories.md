# TrafficMind AI: User Stories and Acceptance Backlog

**Document ID:** TMA-UX-006  
**Version:** 0.1  
**Date:** 19 July 2026  
**Related documents:** [Personas](08_Personas.md), [User Flows](07_User_Flows.md), [Functional Requirements](02_Functional_Requirements.md)  
**Status:** Draft backlog for pilot discovery, prioritization, and validation

## 1. Purpose and Backlog Rules

This backlog translates the approved product scope into user-centered, testable stories. It contains **105 stories** across the seven primary personas. A story is not a deployment authorization, technical design, or promise of autonomous action. Delivery priority remains subject to Coimbatore pilot scope, agency approval, data availability, security review, and user validation.

| Priority | Meaning |
|---|---|
| Must | Required to safely support the approved initial pilot workflow. |
| Should | Material value; include when pilot scope/readiness permits. |
| Could | Valuable future increment; not a pilot commitment. |

**Acceptance convention:** each criterion is independently testable in a representative scenario, including expected failure/degraded behavior where relevant.

## 2. ICCC Operator Stories: Asha

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-OP-01 | As an ICCC Operator, I want to see events in my approved area ordered by severity and deadline so that I can focus attention safely. | Given active events, only authorized-area items appear in configured priority order. | Must |
| US-OP-02 | As an ICCC Operator, I want to see source, timestamp, freshness, and data state for event evidence so that I can judge whether it is usable. | Given an event, all four provenance fields are visible; stale evidence is not shown as current. | Must |
| US-OP-03 | As an ICCC Operator, I want to create an event from an approved report so that a disruption is tracked consistently. | Valid source/type/location/time create a candidate event and audit entry. | Must |
| US-OP-04 | As an ICCC Operator, I want to attach approved evidence and a rationale so that an authorized user can verify an event. | Verification evidence/reference and note are retained with the event. | Must |
| US-OP-05 | As an ICCC Operator, I want the system to identify likely duplicates so that I do not create competing incident records. | Suggested duplicate can be linked or rejected without deleting either record. | Should |
| US-OP-06 | As an ICCC Operator, I want to assign an event to the correct owner so that response accountability is clear. | Assignment records owner, deadline, acknowledgement state, and audit history. | Must |
| US-OP-07 | As an ICCC Operator, I want to follow the approved event lifecycle so that no step is skipped under pressure. | Invalid lifecycle transition is blocked with required next information. | Must |
| US-OP-08 | As an ICCC Operator, I want to see approved corridor and junction context so that I can understand likely impact beyond one point. | Selecting event shows permitted geometry, constraints, and data quality. | Must |
| US-OP-09 | As an ICCC Operator, I want to see source-health status so that I can use a fallback before relying on a failed feed. | Source outage changes health/freshness state within configured interval. | Must |
| US-OP-10 | As an ICCC Operator, I want to acknowledge notifications so that colleagues know the event has been seen. | Acknowledgement is time-stamped and stops/escalates alerts per policy. | Should |
| US-OP-11 | As an ICCC Operator, I want a clear shift handover view so that open events do not lose ownership. | Handover requires owner, status, next action, and known limitation. | Must |
| US-OP-12 | As an ICCC Operator, I want to reject an unsuitable AI recommendation so that local judgment remains in control. | Reject action records rationale and does not send external request. | Must |
| US-OP-13 | As an ICCC Operator, I want a manual playbook link when data is unavailable so that I can continue safely. | Degraded context displays approved fallback reference. | Must |
| US-OP-14 | As an ICCC Operator, I want to annotate verified local conditions so that partners see current field context. | Authorized annotation records actor, time, status, and evidence reference. | Should |
| US-OP-15 | As an ICCC Operator, I want to close an event with outcome and unresolved issues so that post-event learning is possible. | Closure is blocked until required outcome/review fields are complete. | Must |

## 3. Traffic Police Stories: Vikram

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-TP-01 | As a Traffic Police Supervisor, I want verified event context before deploying officers so that field response is proportionate and safe. | Verified event view shows evidence, freshness, impact, and limitations. | Must |
| US-TP-02 | As a Traffic Police Supervisor, I want to see approved field-impact context so that I can prioritize scarce personnel. | Permitted map/corridor view shows affected area and assigned status. | Must |
| US-TP-03 | As a Traffic Police Supervisor, I want to approve an operational response through an approved workflow so that authority is explicit. | External request is impossible without authorized approval and audit record. | Must |
| US-TP-04 | As a Traffic Police Supervisor, I want to override a recommendation with a reason so that field judgment is preserved. | Override captures actor, reason, time, and related event. | Must |
| US-TP-05 | As a Traffic Police Supervisor, I want to see downstream safety and spillback cautions so that local action does not shift risk elsewhere. | Eligible event view displays configured constraints and limitations. | Should |
| US-TP-06 | As a Traffic Police Supervisor, I want to acknowledge partner handoffs so that the control room knows what is being handled. | Acknowledgement updates event timeline and is auditable. | Must |
| US-TP-07 | As a Traffic Police Supervisor, I want to request event clarification from the ICCC so that I do not act on ambiguous evidence. | Clarification request is linked to event and routed to configured owner. | Should |
| US-TP-08 | As a Traffic Police Supervisor, I want to mark a field condition as verified so that the shared picture reflects reality. | Only authorized role can add verified field update with rationale. | Must |
| US-TP-09 | As a Traffic Police Supervisor, I want to see which feeds are degraded so that I do not mistake missing coverage for clear roads. | Degraded/unavailable feed is visibly labeled in relevant context. | Must |
| US-TP-10 | As a Traffic Police Supervisor, I want emergency coordination to show explicit safety safeguards so that cross traffic and pedestrians are protected. | Approved emergency flow shows procedure constraints before acknowledgement. | Must |
| US-TP-11 | As a Traffic Police Supervisor, I want to escalate an unacknowledged high-severity event so that response does not stall. | Escalation follows configured role/time policy and is logged. | Must |
| US-TP-12 | As a Traffic Police Supervisor, I want to review an incident timeline so that I can conduct a factual debrief. | Timeline includes source, assignments, approvals, updates, and closure. | Should |
| US-TP-13 | As a Traffic Police Supervisor, I want to receive role-appropriate alerts without sensitive information leakage so that field communications remain safe. | Notification content/channel follows role and classification policy. | Must |
| US-TP-14 | As a Traffic Police Supervisor, I want to record an unresolved risk at closure so that follow-up is not lost. | Closure supports unresolved issue, owner, and review due date. | Must |
| US-TP-15 | As a Traffic Police Supervisor, I want to view only my authorized jurisdiction so that operational data remains protected. | Out-of-area event/map access is denied without metadata disclosure. | Must |

## 4. Emergency Services Stories: Meera

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-EM-01 | As an Emergency Services Liaison, I want emergency coordination disabled until SOP approval exists so that unsafe informal use is prevented. | Feature denies access when policy/SOP configuration is inactive. | Must |
| US-EM-02 | As an Emergency Services Liaison, I want to initiate an approved coordination event using a status reference so that no clinical details are required. | Required input excludes patient/clinical fields and creates restricted event. | Must |
| US-EM-03 | As an Emergency Services Liaison, I want to see minimum necessary route constraints so that I can coordinate safely. | Route view exposes only approved obstruction/access context. | Must |
| US-EM-04 | As an Emergency Services Liaison, I want named agency acknowledgements so that handoffs are explicit. | Each task records agency/owner/acknowledgement/time. | Must |
| US-EM-05 | As an Emergency Services Liaison, I want to know when route data is stale so that I do not infer clear passage. | Stale or unavailable route source disables clear-route claim. | Must |
| US-EM-06 | As an Emergency Services Liaison, I want the existing emergency procedure available during outages so that coordination continues safely. | Manual SOP link is available when system/source is unavailable. | Must |
| US-EM-07 | As an Emergency Services Liaison, I want pedestrian and cross-traffic safeguards visible so that urgency does not create new harm. | Approved safeguards are displayed in active workflow. | Must |
| US-EM-08 | As an Emergency Services Liaison, I want to record post-passage recovery so that normal operations are restored deliberately. | Closure requires recovery status and authorized owner. | Must |
| US-EM-09 | As an Emergency Services Liaison, I want protected audit history so that authorized review can reconstruct procedure compliance. | Restricted audit search shows full workflow to permitted reviewer only. | Must |
| US-EM-10 | As an Emergency Services Liaison, I want to reject an inaccurate route status so that incorrect data does not drive coordination. | Rejection/correction is auditable and informs source review. | Must |
| US-EM-11 | As an Emergency Services Liaison, I want an emergency candidate alert to require service confirmation so that false detection cannot trigger action. | Candidate cannot enter emergency coordination without authorized confirmation. | Must |
| US-EM-12 | As an Emergency Services Liaison, I want emergency notifications restricted to approved channels so that sensitive details are protected. | Unapproved recipient/channel receives no restricted content. | Must |
| US-EM-13 | As an Emergency Services Liaison, I want to see the emergency workflow owner at every stage so that escalation is immediate. | Current owner and escalation path are visible in event status. | Must |
| US-EM-14 | As an Emergency Services Liaison, I want unresolved coordination issues captured for review so that repeat risks are addressed. | Post-event review item includes issue, owner, and due date. | Should |
| US-EM-15 | As an Emergency Services Liaison, I want no automatic signal pre-emption from the platform so that agency safety authority remains intact. | Test confirms no direct control pathway exists in pilot release. | Must |

## 5. City Administrator Stories: Priya

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-CA-01 | As a City Administrator, I want a pilot scorecard with baselines and limitations so that I can judge value credibly. | Scorecard contains observation period, coverage, method, limitations, and results separately. | Must |
| US-CA-02 | As a City Administrator, I want to compare approved corridor periods so that I can understand reliability changes. | Comparison states matching method, source coverage, and confounder caveats. | Should |
| US-CA-03 | As a City Administrator, I want safety indicators labeled as proxy or confirmed so that I do not overstate outcomes. | Report clearly distinguishes conflict proxy from confirmed crash record. | Must |
| US-CA-04 | As a City Administrator, I want data-quality visibility so that I can interpret KPI confidence. | Every KPI includes coverage/quality/limitation metadata. | Must |
| US-CA-05 | As a City Administrator, I want to review event-response performance so that cross-agency bottlenecks are visible. | Report shows lifecycle timing and acknowledgement/ownership data. | Should |
| US-CA-06 | As a City Administrator, I want to view transit and vulnerable-user impact so that evaluation is not car-only. | Approved report supports separate available mode/safety measures. | Should |
| US-CA-07 | As a City Administrator, I want to see unresolved risks and owners so that governance action is tracked. | Risk report lists status, owner, mitigation, and review date. | Must |
| US-CA-08 | As a City Administrator, I want to approve the pilot measurement method before claims are made so that reporting is defensible. | Method/version approval is recorded before outcome report publish. | Must |
| US-CA-09 | As a City Administrator, I want to review access and privacy exceptions so that public trust is protected. | Governance report includes approved exceptions and outstanding review actions. | Must |
| US-CA-10 | As a City Administrator, I want to see total support and maintenance signals so that lifecycle planning is realistic. | Executive report includes service health, support demand, and known dependencies. | Should |
| US-CA-11 | As a City Administrator, I want configurable pilot geography so that expansion is controlled. | Geographic scope change requires approved configuration and audit. | Must |
| US-CA-12 | As a City Administrator, I want a clear go/correct/stop recommendation package so that steering decisions are explicit. | Gate pack includes evidence, risk, cost/effort, limitations, and decision owner. | Should |
| US-CA-13 | As a City Administrator, I want reports to separate fact, assumption, and estimate so that I can communicate responsibly. | Report template labels each category and blocks missing methodology. | Must |
| US-CA-14 | As a City Administrator, I want audit-ready procurement/operating evidence so that programme oversight is easier. | Authorized export includes version, approver, source/method references, and audit ID. | Should |
| US-CA-15 | As a City Administrator, I want access to aggregate information by default so that sensitive details are not exposed unnecessarily. | Executive role cannot open restricted event/video data without explicit policy. | Must |

## 6. IT Administrator Stories: Karthik

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-IT-01 | As an IT Administrator, I want to onboard a source with owner, purpose, schema, and health rules so that integrations are governed. | Incomplete source registry cannot activate integration. | Must |
| US-IT-02 | As an IT Administrator, I want to see integration health and last successful data time so that failures are diagnosable. | Health view identifies source, failure state, last success, and owner. | Must |
| US-IT-03 | As an IT Administrator, I want connector failure isolated so that one outage does not disable unrelated features. | Failure injection leaves unrelated source/module context usable. | Must |
| US-IT-04 | As an IT Administrator, I want to manage user access by role and attributes so that users have least privilege. | RBAC/ABAC policy blocks out-of-scope access. | Must |
| US-IT-05 | As an IT Administrator, I want time-bound privileged access so that elevated rights do not persist. | Temporary privilege expires automatically and is logged. | Must |
| US-IT-06 | As an IT Administrator, I want configuration validation before publishing so that invalid playbooks cannot affect operations. | Invalid configuration is rejected with actionable validation message. | Must |
| US-IT-07 | As an IT Administrator, I want a rollback path for high-risk changes so that service can recover safely. | Rollback restores approved known-good version and records audit. | Must |
| US-IT-08 | As an IT Administrator, I want secrets kept outside UI configuration and logs so that credentials are not exposed. | Secret scan finds no plaintext secret in code/configuration/log output. | Must |
| US-IT-09 | As an IT Administrator, I want to search privileged and integration audit activity so that incidents can be investigated. | Authorized query returns actor/action/time/target/correlation ID. | Must |
| US-IT-10 | As an IT Administrator, I want automated access-review tasks so that stale accounts are found. | Review identifies unreviewed/expired/stale accounts. | Must |
| US-IT-11 | As an IT Administrator, I want to suspend a model or connector safely so that a suspected issue is contained. | Suspension removes affected output but preserves manual evidence workflow. | Must |
| US-IT-12 | As an IT Administrator, I want failed audit storage to block high-risk changes so that accountability is not bypassed. | Audit failure prevents approval/export/configuration publish. | Must |
| US-IT-13 | As an IT Administrator, I want environment separation so that test work cannot access production data by default. | Cross-environment identity/data access test is denied. | Must |
| US-IT-14 | As an IT Administrator, I want backup-restore evidence so that recovery readiness is proven. | Restore exercise produces test result against approved RTO/RPO. | Should |
| US-IT-15 | As an IT Administrator, I want security alerts routed with severity and owner so that response is timely. | Simulated alert creates classified ticket/escalation with correlation ID. | Must |

## 7. City Executive Stories: Raghavan

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-EX-01 | As a City Executive, I want an executive summary of pilot outcomes so that I can make an informed decision quickly. | Summary shows outcomes, baselines, limitations, risks, and decision needed. | Must |
| US-EX-02 | As a City Executive, I want public-value measures beyond vehicle delay so that safety and access remain central. | Dashboard/report includes available safety, emergency, transit, and reliability measures. | Must |
| US-EX-03 | As a City Executive, I want to see data confidence and gaps so that I do not overinterpret results. | Every displayed outcome links to quality/method limitation. | Must |
| US-EX-04 | As a City Executive, I want to see critical risks and residual-risk decisions so that governance is visible. | Risk view shows severity, owner, mitigation, residual decision, and review date. | Must |
| US-EX-05 | As a City Executive, I want to review stakeholder adoption signals so that scaling is not based only on technology performance. | Scorecard includes training/usability/adoption evidence where collected. | Should |
| US-EX-06 | As a City Executive, I want an audit trail for key approvals so that I can trust programme decisions. | Authorized executive view links decision to approver/time/evidence. | Must |
| US-EX-07 | As a City Executive, I want a clear pilot gate recommendation so that expansion has accountable criteria. | Gate package identifies go/correct/stop options and decision owner. | Must |
| US-EX-08 | As a City Executive, I want aggregate, role-appropriate views so that I do not access sensitive operations unnecessarily. | Executive role defaults to aggregate data and denies restricted detail. | Must |
| US-EX-09 | As a City Executive, I want to understand support and operating dependencies so that budget decisions reflect lifecycle cost. | Review package lists dependency health, support capacity, and open constraints. | Should |
| US-EX-10 | As a City Executive, I want to review emergency-workflow readiness separately so that high-risk expansion is deliberate. | Readiness report includes SOP, drill, policy, and residual-risk status. | Must |
| US-EX-11 | As a City Executive, I want all public claims to be method-backed so that institutional credibility is protected. | Publish workflow requires approved methodology/limitation section. | Must |
| US-EX-12 | As a City Executive, I want a multi-city readiness comparison only after local validation so that replication is not assumed. | Portfolio view labels readiness/evidence by city and prevents copy-paste claim. | Could |
| US-EX-13 | As a City Executive, I want to see major security/privacy exceptions so that they are resolved before scale. | Governance view lists exception scope, owner, expiry, and approval. | Must |
| US-EX-14 | As a City Executive, I want to review the benefit and trade-off of a proposed scope change so that public value stays balanced. | Change package includes impacted users, data, safety, cost, and risk. | Should |
| US-EX-15 | As a City Executive, I want the ability to stop or restrict a capability so that safety/trust concerns can be contained. | Authorized stop action disables scoped feature and logs decision. | Must |

## 8. Maintenance Team Stories: Sanjay

| ID | User story | Acceptance criteria | Priority |
|---|---|---|---|
| US-MT-01 | As a Maintenance Engineer, I want to see asset ID, health state, and last contact so that I can identify the issue. | Asset view shows approved identifier, status, timestamp, and source quality. | Must |
| US-MT-02 | As a Maintenance Engineer, I want to see operational impact so that I can prioritize field work. | Alert displays affected approved corridor/event and criticality. | Must |
| US-MT-03 | As a Maintenance Engineer, I want to distinguish device fault, network loss, and unknown state so that diagnosis is efficient. | Health view labels each configured fault category. | Must |
| US-MT-04 | As a Maintenance Engineer, I want to acknowledge a fault so that operators know it is being handled. | Acknowledgement records owner/time/status in asset timeline. | Must |
| US-MT-05 | As a Maintenance Engineer, I want to link an external work reference so that the system of record remains consistent. | Work reference is stored without overwriting external work order. | Must |
| US-MT-06 | As a Maintenance Engineer, I want to update triage status so that field and ICCC teams share verified progress. | Authorized update is audit logged and visible to affected role. | Must |
| US-MT-07 | As a Maintenance Engineer, I want a manual review path when asset ID is missing so that reports are not discarded. | Missing ID produces controlled manual-review record. | Should |
| US-MT-08 | As a Maintenance Engineer, I want maintenance connector outages to preserve my triage record so that work is not lost. | External outage does not discard local audit/handoff record. | Must |
| US-MT-09 | As a Maintenance Engineer, I want to see active event linkage so that repair urgency is clear. | Asset page shows permitted linked event and impact status. | Should |
| US-MT-10 | As a Maintenance Engineer, I want to verify restoration before closure so that telemetry alone does not hide recurring problems. | Closure requires configured verification/notes. | Must |
| US-MT-11 | As a Maintenance Engineer, I want device credentials hidden from product screens so that field access remains secure. | UI/API never returns secrets to maintenance role. | Must |
| US-MT-12 | As a Maintenance Engineer, I want repair history where authorized so that repeat faults can be recognized. | Asset history respects retention/access policy and shows previous status/work references. | Should |
| US-MT-13 | As a Maintenance Engineer, I want to receive only relevant asset alerts so that alert noise does not slow repairs. | Notification filter uses assignment/area/criticality policy. | Should |
| US-MT-14 | As a Maintenance Engineer, I want a fallback contact/runbook during platform outage so that critical repair coordination continues. | Degraded-state view/runbook identifies approved manual path. | Must |
| US-MT-15 | As a Maintenance Engineer, I want to report an asset safety concern for review so that technical faults do not become ignored operational risk. | Safety concern creates linked review item with owner and audit history. | Must |

## 9. Backlog Quality and Next Step

All 105 stories are intentionally traceable to a primary persona, functional module, or flow. Before sprint planning, the product team shall:

1. Confirm the actual first pilot workflow and corridor/junction scope with agency owners.
2. Add story-level dependencies, estimates, release criteria, and test cases after architecture/data agreements are known.
3. Validate Must stories with representative users through scenario walkthroughs and usability testing.
4. Split stories only when a smaller independently testable slice preserves the stated safety, governance, and audit controls.
5. Keep emergency, external-action, and sensitive-data stories blocked until their procedure, policy, and security gates are approved.

