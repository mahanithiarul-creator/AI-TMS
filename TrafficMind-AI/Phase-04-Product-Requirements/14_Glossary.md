# TrafficMind AI: Phase 04 Glossary

**Document ID:** TMA-GLS-014  
**Version:** 0.1  
**Date:** 20 July 2026  
**Applies to:** Phase 04 Product Requirements documentation  
**Status:** Controlled working glossary

## 1. Purpose

This glossary defines terms used across the TrafficMind AI product requirements. It establishes the intended meaning for Phase 04 documentation; statutory, agency, procurement, and contractual terms must be confirmed with the relevant authority before deployment.

## 2. Product and Delivery Terms

| Term | Definition |
|---|---|
| Acceptance criterion | An observable, testable condition that must be met for a requirement or capability to be accepted. |
| API | Application Programming Interface; a governed contract through which systems exchange data or requests. |
| Backlog | Ordered set of product capabilities, stories, defects, and improvements awaiting delivery decisions. |
| Business objective | A measurable commercial, operational, or public-value outcome the product seeks to support. |
| Change control | Process for assessing, approving, recording, and validating a change to scope, configuration, data, or release. |
| Correlation ID | Identifier used to link related requests, events, logs, and actions across services. |
| Definition of Done | Agreed conditions proving a backlog item is complete, tested, supportable, and documented. |
| Definition of Ready | Conditions that must be met before a backlog item may enter delivery planning. |
| Dependency | A required external system, approval, data source, decision, team, or capability. |
| Epic | Large business capability that is normally delivered through multiple smaller backlog items or stories. |
| Feature flag | Controlled configuration switch that enables or disables a scoped capability. |
| Functional requirement | Testable statement of what the product must do for a user or system. |
| MVP | Minimum Viable Product; smallest safe, valuable, supportable release that can test the selected pilot hypothesis. |
| MoSCoW | Prioritization framework: Must, Should, Could, and Won't Have. |
| Non-functional requirement | Testable quality or constraint such as security, availability, performance, maintainability, or accessibility. |
| Pilot | Limited, governed deployment used to validate a defined workflow, operating model, and evidence plan. |
| Playbook | Approved role- and event-specific operating steps and escalation rules. |
| PMO | Project Management Office; delivery/governance function that tracks scope, dependencies, risks, and reporting. |
| Product goal | User/public-value outcome that guides product scope and evaluation. |
| Product Owner | Accountable role for prioritizing product value and accepting backlog outcomes. |
| PRD | Product Requirements Document; high-level product intent, scope, goals, risks, and requirements. |
| Release gate | Evidence-based decision point that permits, restricts, defers, or blocks a release. |
| Requirement ID | Stable identifier used to trace a requirement through design, build, test, and change history. |
| Scope creep | Unapproved expansion of delivery scope, often through hidden assumptions or configuration changes. |
| Service-level objective (SLO) | Target reliability/performance objective agreed for a service or workflow. |
| Stakeholder | Person, organisation, or group affected by, operating, governing, funding, or supporting the platform. |
| Traceability matrix | Controlled map from business objective to feature, requirement, implementation, and acceptance evidence. |
| User story | Short role-based expression of a user need, commonly "As a... I want... so that...". |

## 3. Traffic Operations and Smart-City Terms

| Term | Definition |
|---|---|
| Adaptive signal control | Signal timing approach that changes within approved rules in response to traffic conditions. Not an MVP TrafficMind control function. |
| Asset | Managed physical or logical resource such as a signal controller, camera, sensor, network link, or integration. |
| Asset health | Reported state of an asset/service, including last contact, fault category, and data quality; not always proof of a physical fault. |
| Blocked intersection | Condition in which queued traffic prevents lawful/safe movement through a junction. |
| Corridor | Connected road segment(s) considered together for traffic operations and mobility analysis. |
| Data freshness | Time since an observation/source was last successfully received relative to its expected update interval. |
| Emergency coordination | Authorized, human-led sharing of minimum necessary route/access and acknowledgement status under an approved SOP. |
| Emergency green corridor | Agency-managed priority movement procedure for an emergency vehicle; not an autonomous system function. |
| Event | An operational record representing a report, observation, condition, incident, or workflow item. |
| Event lifecycle | Controlled statuses through which an event moves, such as candidate, verification, assigned, active, recovery, and closed. |
| ICCC | Integrated Command and Control Centre; a city operating center that may coordinate information from services and assets. |
| Incident | Verified or suspected disruption requiring assessment, coordination, response, or review. |
| Junction | Road intersection where streams of vehicles, pedestrians, and other road users conflict or are controlled. |
| Manual fallback | Approved non-digital procedure used when the product, source, or integration is unavailable or unsafe to rely upon. |
| Mixed traffic | Operating condition in which cars, two-wheelers, buses, freight, pedestrians, cyclists, and other modes share constrained space. |
| Network context | Authorized view of conditions, events, assets, constraints, and data quality across a defined geography. |
| Queue | Line or accumulation of vehicles awaiting movement through a road segment or junction. |
| Queue estimation | Estimated queue extent/duration derived from approved observations; it must state uncertainty and coverage limits. |
| Signal controller | Field device that operates signal phases. TrafficMind AI MVP does not write to it. |
| Spillback | Queue extending upstream and interfering with another junction, approach, or movement. |
| Traffic Management Center (TMC) | Operational center for monitoring and coordinating traffic and road conditions; may be part of or distinct from an ICCC. |
| Transit reliability | Consistency of public-transport travel time, headway, or service delivery. |
| Travel-time reliability | Predictability of journey time, often represented using variation or percentile measures. |
| Vulnerable road user | Road user at higher physical risk, typically pedestrian, cyclist, motorcyclist, child, older person, or person with disability. |
| V2X | Vehicle-to-everything communication between vehicles, infrastructure, networks, or other road users; future-gated capability. |

## 4. AI and Data Terms

| Term | Definition |
|---|---|
| AI | Artificial Intelligence; computational methods that infer, classify, predict, or support decisions from data. |
| AI agent | Bounded software that can prepare information or tasks under defined rules; it must not have uncontrolled operational authority. |
| Abstention | Model behavior that returns unavailable/needs-verification rather than a low-quality prediction or recommendation. |
| Annotation | Label or structured description added to data for verification, evaluation, or approved training use. |
| Bias | Systematic disparity in coverage, error, or treatment that may create unfair or unsafe outcomes. |
| Calibration | Alignment between a model's confidence score and observed correctness. |
| Classification | Assignment of an input to an approved category, such as vehicle type, with confidence. |
| Computer vision | Techniques that derive approved information from images or video. |
| Confidence score | Calibrated estimate of model certainty; it is not a guarantee of truth or safety. |
| Concept drift | Change in real-world patterns that makes prior model assumptions or performance less reliable. |
| Data lineage | Traceable record of data origin, transformation, version, and use. |
| Data minimization | Restricting collection, access, retention, and sharing to what is necessary for approved purpose. |
| Data quality | Degree to which data is valid, complete, timely, accurate, consistent, and fit for its approved purpose. |
| Dataset | Governed collection of data with defined owner, purpose, classification, lineage, quality, and retention. |
| Detection | Identification of an approved object or pattern in data, usually with confidence and source/time reference. |
| Digital twin | Calibrated digital representation used to test or understand a real system; a map alone is not a digital twin. |
| Edge AI | AI processing near a data source to reduce latency or unnecessary data transfer; it still needs governance/security. |
| Explainability | Information that helps a user understand evidence, limitations, confidence, and logic behind an output. |
| Feature pipeline | Versioned process that prepares approved input variables for a model. |
| Generative AI | AI that produces content such as text or summaries; future use must be grounded, access-controlled, and reviewed. |
| Ground truth | Trusted reference observation/label used to evaluate an inference or model. |
| Human override | Authorized human decision to reject, correct, suppress, or replace an automated output with recorded rationale. |
| Inference | Model-produced classification, estimate, prediction, or other output from approved input data. |
| Model monitoring | Ongoing review of model quality, calibration, drift, bias, latency, and operational impact. |
| Model registry | Controlled record of model versions, owners, approvals, data lineage, evaluation, deployment, and status. |
| Prediction | Estimate of future state within specified horizon and uncertainty; it is not observed fact. |
| Retraining | Governed process of building a candidate model using approved data; never automatic in the MVP. |
| Training data | Approved dataset used to develop model parameters; it requires separate purpose, quality, privacy, and bias review. |

## 5. Data, Privacy, and Security Terms

| Term | Definition |
|---|---|
| ABAC | Attribute-Based Access Control; authorization based on attributes such as agency, purpose, geography, time, or classification. |
| Audit log | Tamper-evident record of material system, user, approval, access, configuration, and integration activity. |
| Authentication | Verifying that a user, workload, device, or service is the identity it claims to be. |
| Authorization | Determining what an authenticated identity is permitted to access or do. |
| Backup | Protected copy of data/configuration used to support recovery from loss or failure. |
| Data classification | Policy category that determines handling controls, such as public, internal, confidential, or restricted. |
| Data owner | Agency/person accountable for authorizing purpose, access, retention, sharing, and quality expectations for a data source. |
| Data steward | Role that maintains data definitions, quality rules, classification, lineage, and issue management. |
| De-identification | Reducing linkability to a person or identifiable entity through removal, aggregation, masking, or other approved method. |
| Disaster recovery (DR) | Capability and plan to restore systems/data after severe disruption. |
| Encryption at rest | Encryption protecting stored data, including approved backups. |
| Encryption in transit | Encryption protecting data while it travels between users, services, or systems. |
| IAM | Identity and Access Management; systems and processes governing identities, authentication, authorization, and access lifecycle. |
| Idempotency | Property in which repeating the same request does not create repeated unintended result. |
| Least privilege | Giving an identity only the minimum access needed for its approved role and purpose. |
| MFA | Multi-Factor Authentication; use of more than one verification factor to authenticate a user. |
| Mutual authentication | Both communicating parties verify each other's identity, commonly used for service integrations. |
| Privacy by design | Embedding purpose limitation, minimization, access controls, retention, and review into product design. |
| RBAC | Role-Based Access Control; authorization based on a user's approved job role. |
| RPO | Recovery Point Objective; maximum acceptable amount of data loss measured in time. |
| RTO | Recovery Time Objective; target maximum time to restore a service after disruption. |
| Secrets management | Secure storage, access, rotation, and revocation of credentials, keys, and tokens. |
| Threat model | Structured analysis of assets, threats, trust boundaries, attack paths, and controls. |
| Zero Trust | Security approach that continuously verifies identity/context, applies least privilege, and assumes no network location is inherently trusted. |

## 6. Government and Governance Terms

| Term | Definition |
|---|---|
| CCMC | Coimbatore City Municipal Corporation. |
| CSCL | Coimbatore Smart City Limited, the city smart-city special-purpose vehicle context referenced by this project. |
| Data-sharing agreement | Approved document specifying data purpose, fields, parties, transfer, security, retention, and responsibilities. |
| Governance charter | Agreed record of decision rights, roles, escalation, policies, and operating oversight. |
| Human-in-the-loop | Operating model in which authorized people review and retain decision/action authority over system outputs. |
| Operating procedure / SOP | Standard Operating Procedure: approved steps, roles, controls, and escalation for a recurring operational situation. |
| Procurement | Formal public-sector process for acquiring goods/services under applicable policy, competition, approval, and contract rules. |
| Public value | Intended benefit to people and institutions, including safety, access, reliability, equity, accountability, and sustainability. |
| Residual risk | Risk remaining after controls are applied; it must be explicitly accepted, mitigated further, or block release. |
| Safety case | Structured evidence and reasoning that a capability is acceptably safe for a defined context and authority. |
| Smart Cities Mission | Government of India urban-development initiative; it provides context but does not itself authorize a TrafficMind deployment. |
| Steering group | Named cross-agency governance body that reviews scope, risk, evidence, and phase decisions. |

## 7. Phase 04 Completion Checklist

- [x] All documented product requirements have stable identifiers or traceable module/feature references.
- [x] Functional, AI, data, security, API, user, acceptance, MVP, backlog, and traceability documents are complete.
- [x] The backlog separates Must, Should, Could, and Won't Have scope.
- [x] Business/product goals map to features, requirements, AI components where relevant, and acceptance evidence.
- [x] All Phase 1 MVP capabilities have testable acceptance criteria, human authority boundaries, audit expectations, and fallback requirements.
- [x] Future AI, emergency, public information, V2X, and physical-control capabilities remain gated outside the MVP.
- [x] Shared terminology is defined for product, technical, AI, transport, government, data, and security terms.
- [ ] Phase 05 must convert these requirements into approved architecture, data-flow, interface, deployment, threat-model, and test-design artifacts.

**Phase 04 handoff:** TrafficMind AI is ready to begin Phase 05 System Architecture as a requirements-defined, testable, traceable, human-governed Coimbatore pilot concept. Architecture work must preserve the scope, safety, privacy, security, and authority constraints established here.

