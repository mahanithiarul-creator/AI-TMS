# TrafficMind AI: Product Personas

**Document ID:** TMA-UX-008  
**Version:** 0.1  
**Date:** 19 July 2026  
**Related documents:** [Master PRD](01_Product_Requirements.md), [Functional Requirements](02_Functional_Requirements.md)  
**Status:** Draft personas for Coimbatore pilot validation

## 1. Purpose and Method

These personas translate the Phase 02 stakeholder and user-research foundation into role-based product design inputs. They are working hypotheses, not claims about individual people. Before detailed UX design or release, they must be validated through representative Coimbatore interviews, shift observation, field shadowing, and scenario testing.

## 2. Persona Overview

| Persona | Primary environment | Core need | Authority level |
|---|---|---|---|
| Asha, ICCC Operator | Control-room shift | Establish a reliable shared picture quickly. | Verify/coordinate within approved workflow. |
| Vikram, Traffic Police Supervisor | Field and control-room coordination | Deploy scarce field resources safely. | Statutory traffic authority. |
| Meera, Emergency Services Liaison | EMS/fire/police emergency coordination | Protect a verified emergency route without exposing clinical data. | Emergency procedure authority. |
| Priya, City Administrator | Municipal/Smart City programme | Demonstrate defensible public value and accountable delivery. | Policy, budget, programme oversight. |
| Karthik, IT Administrator | City/ICCC technology operations | Keep integrations secure, available, and supportable. | Technical administration. |
| Raghavan, City Executive | Executive review and governance | Make informed funding, risk, and expansion decisions. | Sponsor and governance authority. |
| Sanjay, Maintenance Engineer | Field asset maintenance | Identify the asset issue, its impact, and next action. | Maintenance disposition. |

## 3. Asha: ICCC Traffic Operator

| Attribute | Detail |
|---|---|
| Age / role | 31, Traffic Control Center Operator |
| Technical skill | Moderate to high; fluent in control-room tools but needs fast, low-noise interaction. |
| Primary goals | Recognize real disruptions; verify priority events; make clean handoffs; preserve a complete record. |
| Pain points | Multiple feeds, stale views, false alerts, unclear ownership, repetitive manual updates. |
| Daily workflow | Start shift, check source health and open events, monitor pilot area, verify/assign incidents, hand over open cases. |
| Current tools | Camera/VMS screens, phone/radio, spreadsheets, ticketing/ICCC systems, messaging channels. |
| Decision pattern | Uses approved procedures and supervisor escalation; never needs a system to act without her. |
| Success definition | High-priority event is verified, owned, and handed off quickly with no lost context. |
| Product needs | Prioritized dashboard, evidence/freshness, low-friction lifecycle, assignments, fallback instructions, audit trail. |
| Representative quote | "Tell me what is real, what needs me now, and who already owns it." |

## 4. Vikram: Traffic Police Supervisor

| Attribute | Detail |
|---|---|
| Age / role | 42, Traffic Police Inspector / Shift Supervisor |
| Technical skill | Moderate; mobile-first in the field, detailed context when coordinating with ICCC. |
| Primary goals | Maintain safe traffic movement, protect pedestrians/responders, deploy officers to the highest-impact locations. |
| Pain points | Field conditions change faster than reports; incomplete camera coverage; conflicting requests; downstream spillback. |
| Daily workflow | Brief field team, review hotspots, respond to incidents, coordinate diversions/enforcement under procedure, close/debrief. |
| Current tools | Radio, phone, CCTV/ICCC updates, field officers, standard operating procedures. |
| Decision pattern | Exercises statutory authority based on verified conditions, safety, and field judgment. |
| Success definition | Officer deployment and response prevent a local issue escalating into an unsafe corridor-wide problem. |
| Product needs | Verified evidence, corridor impact, field acknowledgements, approved playbooks, clear override and rationale capture. |
| Representative quote | "A useful system gives me context; it does not pretend it can see the whole road from one camera." |

## 5. Meera: Emergency Services Liaison

| Attribute | Detail |
|---|---|
| Age / role | 36, EMS / Fire / Police Emergency Coordination Liaison |
| Technical skill | Moderate; operates structured, time-critical procedures. |
| Primary goals | Coordinate safe access for emergency movement, reduce route uncertainty, preserve responder and public safety. |
| Pain points | Blocked approaches, poor route visibility, cross-agency handoff delay, sensitive data exposure risk. |
| Daily workflow | Receive authorized coordination request, confirm procedure/status, coordinate route conditions, record recovery and review. |
| Current tools | Agency dispatch tools, phone/radio, SOPs, traffic-police/ICCC liaison channels. |
| Decision pattern | Follows emergency authority and approved SOP; clinical and dispatch systems remain authoritative. |
| Success definition | Route status is verified, roles acknowledge their tasks, and normal operation is safely restored after passage. |
| Product needs | Minimum necessary route context, explicit policy gate, acknowledgements, safety constraints, protected audit. |
| Representative quote | "I need a clear route picture, not a second dispatch system and never patient details on a traffic screen." |

## 6. Priya: City Administrator

| Attribute | Detail |
|---|---|
| Age / role | 47, Municipal Mobility / Smart City Programme Manager |
| Technical skill | Moderate; comfortable with reports and governance systems, not daily operational tooling. |
| Primary goals | Fund credible interventions, coordinate agencies, improve safety/reliability, demonstrate public value. |
| Pain points | Fragmented ownership, unclear ROI, outcome claims without baselines, long procurement and maintenance cycles. |
| Daily workflow | Review programme status, meet departments/vendors, approve priorities, examine KPI/risk reports, manage escalation. |
| Current tools | Reports, presentations, procurement files, email, spreadsheets, ICCC/department briefings. |
| Decision pattern | Requires defensible evidence, lifecycle cost, policy alignment, and accountable owner. |
| Success definition | A pilot produces transparent evidence of value, limitations, and a viable operating model. |
| Product needs | Methodology-aware KPIs, data-quality caveats, equity/safety context, governance reports, configurable scope. |
| Representative quote | "Show the baseline, the limitation, and who is accountable before you show me a headline number." |

## 7. Karthik: IT Administrator

| Attribute | Detail |
|---|---|
| Age / role | 34, ICCC / Municipal IT Administrator |
| Technical skill | High; responsible for identity, integration, service health, change, and support coordination. |
| Primary goals | Securely operate a supportable platform with clear ownership and recoverable changes. |
| Pain points | Legacy interfaces, undocumented credentials, unclear vendor responsibility, alert fatigue, shadow configuration. |
| Daily workflow | Review health/security alerts, manage access, validate integrations, approve changes, coordinate incident response. |
| Current tools | IAM, monitoring/SIEM, ticketing, configuration management, vendor consoles, runbooks. |
| Decision pattern | Balances availability with least privilege, change control, and contractual/security obligations. |
| Success definition | A source failure is visible, contained, diagnosable, and recoverable without exposing secrets or misleading operators. |
| Product needs | RBAC/ABAC, health status, audit search, connector isolation, versioned configuration, secure support tools. |
| Representative quote | "Do not hand me a dashboard that works only while every external system behaves perfectly." |

## 8. Raghavan: City Executive

| Attribute | Detail |
|---|---|
| Age / role | 54, CSCL/CCMC Executive Sponsor |
| Technical skill | Moderate; consumes concise evidence and makes governance, funding, and escalation decisions. |
| Primary goals | Improve public outcomes, protect institutional trust, control risk/cost, decide whether to expand. |
| Pain points | Technology demonstrations without adoption, opaque vendor claims, reputational risk, weak measurement. |
| Daily workflow | Review executive scorecards, convene steering group, resolve cross-agency issues, approve gate decisions. |
| Current tools | Board packs, KPI/risk dashboards, programme reviews, briefings, finance/procurement reports. |
| Decision pattern | Looks for evidence, residual risk, operational ownership, financial sustainability, and public legitimacy. |
| Success definition | The city can make an evidence-based go, correct, or stop decision after the pilot. |
| Product needs | Concise outcome/risk view, method notes, decision gates, auditability, no inflated claims. |
| Representative quote | "A pilot is valuable even when it says do not scale yet, provided we can trust what it taught us." |

## 9. Sanjay: Maintenance Engineer

| Attribute | Detail |
|---|---|
| Age / role | 39, Signal / Camera / Network Maintenance Engineer |
| Technical skill | High in field devices and fault isolation; variable access to enterprise systems while on site. |
| Primary goals | Restore critical assets quickly, understand operational impact, avoid repeated dispatches, close work accurately. |
| Pain points | Vague alerts, unreliable connectivity, incomplete asset inventory, duplicate reports, delayed fault acknowledgement. |
| Daily workflow | Review assigned faults, inspect site/device, coordinate access/vendor, update work status, verify restoration. |
| Current tools | Phone, maintenance/work-order system, field diagnostic tools, asset registers, operator calls. |
| Decision pattern | Prioritizes by safety/operational impact, asset criticality, and verified fault evidence. |
| Success definition | The right team reaches the right asset with enough context, and the operator sees verified repair status. |
| Product needs | Asset health/freshness, fault classification, corridor impact, work reference, manual fallback, no secret exposure. |
| Representative quote | "Tell me which asset, what changed, and how it affects operations before you ask me to drive across the city." |

## 10. Persona Design Implications

| Design implication | Personas served | Requirement impact |
|---|---|---|
| Fast evidence and visible freshness | Asha, Vikram, Meera, Sanjay | FRS-C-01, FRS-01 to 07. |
| Authority and policy visible in workflow | All operational roles | Human approval, explicit ownership, blocked action when policy inactive. |
| Low-noise, role-specific attention management | Asha, Vikram, Karthik | Severity, geography, assignment, and acknowledgement filtering. |
| Minimum necessary sensitive context | Meera, Karthik, Raghavan | Restricted emergency/video data and audited access. |
| Defensible measurement | Priya, Raghavan | Baselines, method/version, uncertainty, data quality, and reports. |
| Field-resilient fallback | Vikram, Meera, Sanjay | Degraded state, manual SOP/runbook, no false current state. |

## 11. Validation Questions

1. Which roles actually verify events and make assignments in the selected Coimbatore pilot workflow?
2. Which language, device, connectivity, and shift constraints affect critical tasks?
3. What evidence does each role trust enough to act on, and what confidence language is understandable?
4. Which data may be shown, exported, or retained for each role and agency?
5. What constitutes unacceptable notification noise or interaction delay during a live event?

