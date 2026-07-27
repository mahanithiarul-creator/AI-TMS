# TrafficMind AI
## Component Architecture

### Approved Logical Services to Implementation-Ready Software Components

**Document ID:** TMA-ARCH-003  
**Version:** 1.0  
**Date:** 27 July 2026  
**Owner:** Loopframe Labs / TrafficMind AI Architecture Team  
**Classification:** Internal — Architecture and Delivery Planning  
**Status:** Draft for architecture, product, security, data-governance, safety, and agency validation  
**Product:** TrafficMind AI  
**Primary operating context:** Coimbatore, Tamil Nadu, India  
**Predecessor documents:** TMA-ARCH-001 — Master System Architecture; TMA-ARCH-002 — Logical Architecture

> **Document continuity notice:** This document is the third architecture artifact in the approved TrafficMind AI architecture set. It translates approved logical responsibilities into implementation-ready software-component boundaries. It does not redesign the system, introduce a new capability, alter statutory or operational authority, or supersede an approved decision in TMA-ARCH-001 or TMA-ARCH-002.

---

# 1. Cover Page

TrafficMind AI is a human-governed urban traffic operating platform for authorized public-sector teams. Its Component Architecture provides the controlled bridge between the approved logical design and later detailed delivery design. It will define how software components are partitioned so they can implement the approved operational, workflow, policy, AI, integration, governance, and assurance responsibilities without weakening the platform’s human authority, security, privacy, audit, or safe-restriction boundaries.

The Component Architecture exists to make the Logical Architecture actionable for delivery teams while retaining its essential distinctions: observed evidence is not verified fact; AI-assisted insight is not human approval; a workflow decision is not external command; and platform capability does not replace agency authority.

**Tagline:** *Predict. Optimize. Save Lives.*  
**Mission:** Build India’s most intelligent AI-powered Urban Traffic Operating Platform through trusted local data, explainable decision support, human-governed workflows, and measurable public outcomes.

---

# 2. Purpose

The purpose of this document is to translate the approved Logical Architecture into a coherent, implementation-ready software-component model. It establishes the rules by which later sections will allocate approved logical-service responsibilities to components, define component ownership and interfaces, identify permitted dependencies, and preserve the quality, governance, and safety characteristics required by the Master System Architecture.

This document will enable delivery teams to make component-level design decisions without recreating business rules in multiple places, collapsing bounded contexts, or creating ungoverned paths around identity, authorization, policy, workflow, audit, or human approval.

The Component Architecture will be used to:

- Provide a stable component boundary model for detailed design, build planning, test design, security review, and operational readiness.
- Maintain traceability from component responsibility to the approved logical services, business domains, requirements, and architecture decisions.
- Define the component-level separation needed to protect authoritative operational state, human-led workflow, bounded AI, external-source qualification, and assurance responsibilities.
- Support proportionate implementation of the Coimbatore pilot while retaining a controlled path for later approved evolution.
- Make dependency, ownership, failure, security, and governance expectations explicit before implementation begins.

This document does not itself authorize development, integration, data use, deployment, external action, or expansion of the pilot scope.

---

# 3. Scope

The completed Component Architecture will define the approved software-component realization of the logical services established in TMA-ARCH-002. Its scope includes:

- Component responsibilities, cohesion, ownership, and bounded context alignment.
- Allocation of approved logical-service responsibilities to software components without changing logical ownership.
- Component collaboration, permitted dependency direction, and information-exchange responsibilities.
- Component-level treatment of authoritative state, commands, queries, domain events, and qualified context.
- Component security boundaries, access-control responsibilities, audit obligations, configuration ownership, and governance controls.
- Component failure behaviour, safe restriction, dependency isolation, and logical resilience expectations.
- Traceability between components, logical services (`LGS-001` to `LGS-021`), business domains (`BDM-001` to `BDM-016`), logical domains (`DOM-001` to `DOM-005`), and the Master System Architecture.
- Component readiness criteria that later architecture, engineering, security, data, AI, testing, and operational artifacts must satisfy.

The scope is limited to approved TrafficMind AI capabilities: governed operational awareness; human-led incident coordination; qualified camera, field, asset, map, and GIS context; policy-bound notifications; bounded AI-assisted insight; controlled analytics and reporting; audit, configuration, search, monitoring, logging, identity, authorization, integration, and separately eligible emergency coordination.

---

# 4. Out of Scope

This document does not define, approve, or alter:

- New product capabilities, user roles, business domains, logical services, workflows, AI use cases, data classes, external sources, agencies, geographies, or operating procedures.
- Changes to the human-in-the-loop boundary, agency authority model, approved pilot scope, statutory decision rights, or prohibited-function list.
- Detailed user-interface design, detailed information contracts, endpoint specifications, message schemas, database schema, data model, code, or algorithm implementation.
- Infrastructure, hosting, network, environments, cloud-provider selection, deployment topology, runtime sizing, service-level targets, or operational runbooks.
- Detailed security design, threat modelling, data-retention design, privacy impact assessment, AI model design, test implementation, or procurement decisions; these belong to their respective architecture and delivery artifacts.
- Direct traffic-signal control, signal pre-emption, camera control, emergency dispatch, enforcement, consumer routing, facial recognition, biometric inference, identity tracking, autonomous vehicle control, or any autonomous external action.
- A production authorization, agency approval, data-sharing agreement, or release decision.

Where a later detailed design reveals a need to change a logical boundary, capability, authority model, or approved architecture decision, that change must be assessed against TMA-ARCH-001 and TMA-ARCH-002 through the formal architecture-governance process. It must not be introduced implicitly at component level.

---

# 5. Relationship with Previous Architecture Documents

TMA-ARCH-003 is subordinate to and must be read with its predecessor architecture documents. The three documents operate at distinct levels of abstraction and collectively preserve the approved design intent from enterprise context to software component realization.

| Architecture document | Primary concern | Authority over TMA-ARCH-003 |
|---|---|---|
| **TMA-ARCH-001 — Master System Architecture** | Product scope, architecture vision, constraints, principles, quality attributes, system context, architectural style, cross-cutting concerns, risks, and approved architecture decisions. | Establishes non-negotiable system boundaries, government-readiness requirements, human authority model, prohibited functions, and architecture decisions that all components must preserve. |
| **TMA-ARCH-002 — Logical Architecture** | Business domains, logical services, logical ownership, communication patterns, dependency model, collaboration model, and logical governance boundaries. | Establishes the authoritative logical responsibilities that components must realize. A component must not duplicate, merge, or bypass a logical owner without approved architecture change. |
| **TMA-ARCH-003 — Component Architecture** | Implementation-ready partitioning of approved logical services into cohesive software components and controlled component-level collaboration. | Translates, but does not reinterpret, the approved architecture into a delivery-ready component model. |

The relationship is directional:

```text
TMA-ARCH-001  →  approves purpose, boundaries, principles, and architecture decisions
       ↓
TMA-ARCH-002  →  defines business domains, logical services, ownership, and collaboration
       ↓
TMA-ARCH-003  →  realizes approved logical responsibilities as software-component boundaries
```

### 5.1 Traceability Rules

- Every component defined in this document must trace to one or more approved logical services in TMA-ARCH-002.
- Each component must have a single primary responsibility and an explicit owner; it may collaborate with other components only through controlled, approved responsibilities.
- A component may support more than one logical service only where the responsibilities share a cohesive lifecycle, ownership, security boundary, failure boundary, and governance model.
- A component must not become a new source of truth for a business state already owned by a logical service or another component.
- Component-level optimization, convenience, or reuse does not justify bypassing approval, policy, identity, audit, data-minimization, or human-verification controls.
- If a component-level decision conflicts with either predecessor document, the predecessor architecture prevails until an approved change is recorded.

---

# 6. Component Architecture Principles

## 6.1 Logical Ownership Is Preserved

Components must implement the ownership boundaries defined by TMA-ARCH-002. The Incident Service remains the authoritative owner of operational-event state; Workflow remains the owner of human-led coordination lifecycle; Policy remains the owner of deterministic policy outcomes; Integration remains the owner of external-source qualification; and Audit remains the owner of protected accountability evidence.

## 6.2 Components Are Cohesive and Purpose-Bounded

Each component must encapsulate responsibilities that change for the same business, operational, security, or governance reason. Components must not accumulate unrelated responsibilities merely because they use similar information or are consumed by the same user interface.

## 6.3 One Authoritative Source for Material State

Each material state—such as an event, workflow action, authorization decision, policy outcome, configuration version, audit fact, AI-use condition, or source qualification—must have a declared authoritative component owner. Other components may consume approved views, facts, or references, but must not maintain competing authoritative interpretations.

## 6.4 Commands Go to the Owning Component

A state-changing request must be received and validated by the component that owns the affected state. The receiving component must apply current authorization, policy, workflow, configuration, and audit conditions before it records a material outcome. A component must not mutate another component’s authoritative state directly.

## 6.5 Queries Do Not Conceal State Changes

Read-oriented component collaboration must not create hidden state changes, approvals, notifications, policy changes, or external actions. Query results must retain applicable freshness, provenance, confidence, classification, and limitation context.

## 6.6 Events Represent Qualified Facts, Not Authority

Component events represent approved facts emitted by the owner of that fact. Consumers may respond within their own bounded responsibility, but an event does not grant permission for external action or change another component’s authoritative state without a governed command.

## 6.7 Human Authority Remains External to Components

Components may present evidence, evaluate policy, prepare bounded insight, guide workflow, and preserve decisions. They must not acquire statutory authority, agency command, dispatch authority, or traffic-control authority. Human approval remains explicit and attributable where required.

## 6.8 AI Is Isolated, Bounded, and Suspendable

AI-related components must remain separate from event verification, workflow authority, and external action. They may return confidence-qualified, explainable, policy-eligible assistance or abstain. Any AI component must be independently restrictable without disabling evidence, manual workflow, audit, or approved fallback.

## 6.9 External Variability Is Contained

Components that handle authorized external information must qualify source identity, integrity, scope, freshness, quality, and provenance before that information is used by authoritative operational components. No external-source component may introduce an unapproved field-control or agency-command path.

## 6.10 Security, Privacy, and Audit Are Built into Every Boundary

Every component must apply the relevant identity, authorization, purpose, geography, classification, data-minimization, audit, retention, and protection responsibilities. Cross-cutting controls are not deferred to a perimeter or a later component.

## 6.11 Safe Restriction Is a Valid Component Outcome

When an essential dependency, authorization condition, policy version, audit condition, evidence quality, or approved feature state is unavailable, the component must return an explicit restricted, pending, unavailable, abstaining, or manual-fallback outcome. It must not create false certainty or a permissive bypass.

## 6.12 Component Dependencies Are Explicit and Directional

Components must declare only the dependencies necessary to fulfill their approved responsibility. Dependency direction must preserve ownership, avoid cyclic control relationships, and distinguish authoritative, context, assurance, and outcome dependencies.

## 6.13 Governance Is Traceable at Component Level

Each component must identify its logical owner, accountable business/domain owner, configuration and policy dependencies, material audit obligations, change authority, and approval conditions. A component is not implementation-ready until these are explicit.

## 6.14 Proportionate Realization Does Not Remove Boundaries

The pilot may initially realize several cohesive logical responsibilities together where this is proportionate and governed. Such realization must retain separable responsibility, testability, security, failure, and future extraction boundaries. Co-location must not become an excuse for coupling or scope expansion.

---

# 7. Document Structure

This document will be completed in controlled sections. Each later section must preserve the scope and principles established above and must trace back to the predecessor architecture documents.

| Section | Intended content | Architectural outcome |
|---|---|---|
| 1–7 | Foundation, purpose, scope, traceability, principles, and document control. | Establishes the approved guardrails for component design. |
| 8. Component Architecture Overview | Component-view scope, component classification, and relationship to logical-service ownership. | Provides a navigable implementation-ready component model. |
| 9. Component Catalogue | Individual component definitions, responsibilities, ownership, dependencies, inputs/outputs, failure behaviour, security boundary, and governance. | Creates accountable, cohesive component boundaries. |
| 10. Component Interaction Model | Commands, queries, events, collaboration paths, dependency direction, and component relationship views. | Defines controlled component collaboration without bypassing ownership. |
| 11. Component Data and State Ownership | Authoritative state, reference ownership, consistency responsibilities, and permitted information sharing. | Prevents duplicated or ambiguous material state. |
| 12. Cross-Cutting Component Controls | Identity, authorization, policy, configuration, audit, privacy, observability, logging, resilience, and support responsibilities. | Ensures that assurance is applied consistently to every component. |
| 13. Component Quality and Failure Model | Failure isolation, safe restriction, degradation, dependency behaviour, recovery intent, and component-level quality obligations. | Makes predictable safe behaviour a design requirement. |
| 14. Component Traceability and Governance | Mapping to logical services, business domains, requirements, architecture decisions, owners, approvals, and change controls. | Enables reviewable component-level accountability. |
| 15. Component Readiness Checklist | Completion criteria, open dependencies, validation evidence, and architecture handoff conditions. | Determines whether detailed component design may progress under governance. |

Later sections will not repeat the Master System Architecture or Logical Architecture. They will reference those documents and add only the component-level detail necessary for a controlled implementation-ready design.

---

# 8. Component Model

## 8.1 Purpose of the Component Model

The Component Model establishes the conceptual bridge between the approved Logical Architecture and the later, implementation-ready component catalogue. It defines the hierarchy through which business intent becomes a bounded software responsibility, and it establishes the rules for preserving ownership, authority, security, governance, and safe-failure behaviour as the architecture becomes more detailed.

This section does not define, name, enumerate, or allocate actual software components. It describes only the model that later component definitions must follow.

## 8.2 What Is a Software Component?

For TrafficMind AI, a software component is a cohesive, independently understandable unit of software responsibility that realizes one or more approved logical responsibilities. A component encapsulates behaviour, protects the state and rules for which it is accountable, exposes only controlled collaboration points, and has explicit ownership, dependency, security, failure, and governance boundaries.

A component is not merely a screen, technical library, data store, integration endpoint, organisational team, or deployment unit. It is an architecture boundary. Its purpose is to make the approved logical model buildable and testable without allowing implementation convenience to blur the distinctions between evidence, insight, policy, workflow, human decision, agency authority, audit, and external action.

A component may contain internal implementation detail that is not visible outside its boundary. Other components interact with it only through approved responsibilities and governed information exchange. The component remains accountable for applying the rules necessary to protect its owned responsibility.

At this stage, “component” is a logical component concept. It does not imply a programming language, framework, runtime process, packaging format, hosting arrangement, deployment topology, or technology choice.

## 8.3 Architecture Hierarchy

TrafficMind AI uses the following hierarchy to maintain traceability from public-sector operating intent to implementation-ready software responsibility:

```text
Business Domain
      ↓
Logical Domain
      ↓
Logical Service Group
      ↓
Logical Service
      ↓
Component
```

The hierarchy is directional. Each lower level refines the responsibility and boundary established by the level above it. A lower-level design choice must not broaden the business scope, alter the logical owner, transfer agency authority, or bypass a policy, workflow, audit, privacy, security, or human-approval requirement inherited from the higher levels.

## 8.4 Business Domains

Business Domains describe the enduring business and public-sector operating concerns that TrafficMind AI supports. They provide the language through which product, operational, agency, governance, and architecture stakeholders understand why a capability exists and who remains responsible for its real-world outcome.

TMA-ARCH-002 defines the TrafficMind AI business domains as `BDM-001` to `BDM-016`, including Traffic Operations, Incident Management, AI Intelligence, Identity, Security, Configuration, Notification, Reporting, Administration, Analytics, Audit, Governance, Maps, GIS, Policy, and Emergency Coordination.

At the component-model level, a Business Domain establishes:

- The public-sector or operational purpose a component hierarchy must serve.
- The business capability boundary that must not be expanded without formal approval.
- The human and agency authority that remains external to software components.
- The business vocabulary, evidence expectations, and outcome measures that lower levels must preserve.
- The governance, safety, privacy, security, and scope constraints relevant to that concern.

Business Domains do not prescribe components. A domain may be realized through several logical domains, service groups, logical services, and eventually components. Conversely, a component may support a cohesive part of a domain only when this does not duplicate or blur ownership.

## 8.5 Logical Domains

Logical Domains are the primary architecture partitions used to group related logical responsibilities into governed areas of concern. TMA-ARCH-002 defines five logical domains:

| Logical domain | Primary architectural concern |
|---|---|
| `DOM-001` — Experience and Access | Role-appropriate participation, presentation, identity, and access scope. |
| `DOM-002` — Operational Coordination | Authoritative event context, human-led workflow, policy-bound coordination, and notification. |
| `DOM-003` — Intelligence and Context | Qualified external information, spatial and asset context, and bounded AI-assisted insight. |
| `DOM-004` — Insight and Governance | Controlled analysis, reporting, configuration, audit, observability, and governance evidence. |
| `DOM-005` — Restricted Emergency Coordination | Separately eligible, minimum-necessary, human-led emergency coordination. |

At the component-model level, a Logical Domain establishes the principal ownership, security, dependency, and failure boundary within which a later component must operate. Components may collaborate across logical domains only through controlled responsibilities and approved information exchange. They must not use cross-domain collaboration to create shared hidden state or transfer authority.

## 8.6 Logical Service Groups

Logical Service Groups organize related logical responsibilities that share a coherent purpose, lifecycle, and ownership model. They are the first service-oriented refinement of a logical domain and establish where responsibility changes for the same business or operational reason.

Examples established in TMA-ARCH-002 include Operational Experience, Identity and Access Policy, Operational Context and Event Management, Workflow and Coordination, Policy and Playbook Decisioning, AI-Assisted Insight, Integration and Source Management, Spatial and Asset Context, Notification and Acknowledgement, Search/Analytics/Reporting, Configuration and Change Governance, Audit and Assurance, Service and Operational Observability, and Emergency Coordination.

At the component-model level, a Logical Service Group establishes:

- The cohesive responsibility area within which components may be considered together.
- The primary ownership and authority boundary that must remain explicit.
- The principal information types that components may own, consume, or produce.
- The expected relationship with policy, configuration, audit, and observability responsibilities.
- The conditions under which a group’s responsibility must restrict, abstain, or fall back safely.

A service group is not automatically a component. It may require one or more components depending on cohesion, state ownership, security boundary, failure isolation, change cadence, and governance needs. Equally, multiple logical service groups must not be collapsed into one component merely for convenience where their authority or failure boundaries differ.

## 8.7 Logical Services

Logical Services are the detailed, named responsibilities catalogued in TMA-ARCH-002 as `LGS-001` to `LGS-021`. They define what the platform must logically provide, the information each service owns or consumes, the services on which it depends, its failure behaviour, security boundary, and governance conditions.

Logical Services form the primary traceability anchor for later component design. A component defined in a subsequent section must identify the logical service or services it realizes and must demonstrate that it preserves their approved ownership and isolation rules.

The relationship between a Logical Service and a Component is not automatically one-to-one:

- A single Logical Service may be realized by one cohesive component where its state, policy, security, and failure boundaries align.
- A Logical Service may be realized by more than one component where internal responsibilities require explicit separation to preserve security, failure, or governance boundaries.
- A component may realize more than one Logical Service only where the services have a demonstrably shared responsibility, lifecycle, ownership, security boundary, and failure behaviour.
- A component must never merge Logical Services whose separation protects human authority, authoritative state, policy independence, AI isolation, external-source containment, audit integrity, or restricted emergency coordination.

The Component Architecture must retain a clear mapping from every component back to its approved Logical Service identifiers. No component may create an untraceable business capability.

## 8.8 Components

Components are the lowest architecture level defined by this document. They are the implementation-ready logical boundaries through which teams will organize responsibility, code ownership, testing, change, security review, and operational accountability.

Every future component definition must state, at minimum:

- The approved Logical Service or services it realizes.
- Its single primary responsibility and the state or rules for which it is authoritative.
- The Business Domain, Logical Domain, and Logical Service Group from which it inherits purpose and constraints.
- Its permitted consumers, collaborators, consumed information, and produced information.
- Its authoritative, context, assurance, and outcome dependencies.
- Its permitted command, query, and event responsibilities.
- Its failure, restriction, and manual-fallback behaviour.
- Its identity, authorization, privacy, audit, configuration, policy, and governance obligations.
- Its accountable technical owner and accountable business/domain owner.

Components may not be defined as generic shared utilities where doing so conceals a business rule or creates a bypass around an authoritative owner. A reusable technical concern may support a component, but it does not become a component-level owner of TrafficMind AI business state merely by being reused.

## 8.9 Component Philosophy

The TrafficMind AI component philosophy is **bounded realization of approved responsibility**. Components exist to make the Logical Architecture executable in a controlled way, not to reimagine it during implementation.

### 8.9.1 Preserve Meaning Before Optimizing Structure

The implementation-ready model must preserve the meaning of the architecture’s core distinctions: evidence versus verification; insight versus policy; policy versus human approval; notification versus dispatch; geographic context versus operational authority; and audit evidence versus operational state. Component boundaries are justified when they make these distinctions enforceable and testable.

### 8.9.2 Prefer Explicit Ownership Over Shared Convenience

Each component has an accountable responsibility and one authoritative owner for the state or rules within that responsibility. Shared access to internal state, duplicated business rules, hidden cross-component updates, and informal dependencies are prohibited because they weaken traceability and safe change.

### 8.9.3 Minimize Coupling, Not Governance

Components should depend on the smallest approved set of other responsibilities. However, reducing dependencies must not remove necessary identity, authorization, policy, configuration, audit, privacy, or safety controls. A compact component model is valuable only when it preserves the full governance boundary.

### 8.9.4 Make Failure States First-Class

Components must be designed to express pending, restricted, unavailable, stale, incomplete, abstaining, or manual-fallback states clearly. A component must never transform uncertain input into an apparently confirmed outcome solely to simplify its collaboration with another component.

### 8.9.5 Keep AI and External Information Non-Authoritative

Components responsible for AI-assisted insight or external-source handling are deliberately non-authoritative for verified event state, human workflow state, access decisions, and agency action. Their information is qualified input to the responsible component and remains independently suspendable or restrictable.

### 8.9.6 Enable Controlled Change and Future Extraction

Components must be sufficiently cohesive that approved changes can be assessed, tested, reviewed, and released without unintended impact on unrelated responsibilities. The pilot may begin with a proportionate realization, but component boundaries must retain enough clarity to allow later separation when scale, risk, ownership, or governance requires it.

### 8.9.7 Treat Component Boundaries as Public-Interest Controls

In a government-ready platform, a component boundary is not only an engineering choice. It helps protect public accountability, minimum-necessary information use, agency authority, safe operational practice, auditability, and the ability to stop or restrict a capability when evidence or approval is insufficient.

## 8.10 Hierarchy Traceability Rules

The following rules govern traceability across the hierarchy:

| From | To | Required traceability rule |
|---|---|---|
| Business Domain | Logical Domain | Each logical-domain responsibility must support an approved business-domain purpose without extending its scope. |
| Logical Domain | Logical Service Group | Each service group must retain the logical domain’s ownership, authority, security, and failure constraints. |
| Logical Service Group | Logical Service | Each service must have a focused, named responsibility that remains within the service group’s bounded concern. |
| Logical Service | Component | Each component must identify its realized logical service(s) and preserve their ownership, dependencies, security boundary, failure behaviour, and governance. |
| Component | Business Domain | Every component must be traceable back through the full hierarchy to an approved business purpose and accountable domain owner. |

Any proposed component that cannot be traced through this hierarchy is outside the scope of the approved architecture until it has been reviewed and approved through the architecture-governance process.

---

# 9. Component Catalogue

## 9.1 Catalogue Baseline

This catalogue defines the complete approved baseline component model for TrafficMind AI. It realizes the twenty-one approved Logical Services (`LGS-001` to `LGS-021`) defined in TMA-ARCH-002. The baseline is intentionally one-to-one: each component originates from one approved Logical Service and retains that service’s ownership, security, failure, and governance boundary.

This one-to-one model is the authoritative starting point for detailed design. A later decision to split or co-locate components may be considered only where it preserves complete traceability and is approved through architecture governance. It must not introduce a capability, duplicate authoritative state, or weaken a logical separation established in TMA-ARCH-001 or TMA-ARCH-002.

| Component ID | Component name | Approved logical-service origin | Primary alignment |
|---|---|---|---|
| CMP-001 | Dashboard Component | LGS-001 — Dashboard Service | DOM-001 / LS-001 / BDM-001 |
| CMP-002 | Authentication Component | LGS-002 — Authentication Service | DOM-001 / LS-002 / BDM-004 |
| CMP-003 | Authorization Component | LGS-003 — Authorization Service | DOM-001 / LS-002 / BDM-004, BDM-005 |
| CMP-004 | Incident Component | LGS-004 — Incident Service | DOM-002 / LS-003 / BDM-001, BDM-002 |
| CMP-005 | Workflow Component | LGS-005 — Workflow Service | DOM-002 / LS-004 / BDM-002 |
| CMP-006 | Camera Context Component | LGS-006 — Camera Context Service | DOM-003 / LS-007–LS-008 / BDM-001 |
| CMP-007 | Asset Context Component | LGS-007 — Asset Context Service | DOM-003 / LS-008 / BDM-001 |
| CMP-008 | Map Context Component | LGS-008 — Map Context Service | DOM-003 / LS-008 / BDM-013 |
| CMP-009 | Notification Component | LGS-009 — Notification Service | DOM-002 / LS-006 / BDM-007 |
| CMP-010 | Analytics Component | LGS-010 — Analytics Service | DOM-004 / LS-010 / BDM-010 |
| CMP-011 | Reporting Component | LGS-011 — Reporting Service | DOM-004 / LS-010 / BDM-008 |
| CMP-012 | Configuration Component | LGS-012 — Configuration Service | DOM-004 / LS-011 / BDM-006 |
| CMP-013 | Audit Component | LGS-013 — Audit Service | DOM-004 / LS-012 / BDM-011 |
| CMP-014 | Search Component | LGS-014 — Search Service | DOM-004 / LS-010 / BDM-008, BDM-010 |
| CMP-015 | Controlled Interaction Gateway Component | LGS-015 — Controlled Interaction Gateway | DOM-001 / LS-001–LS-002 / governed entry responsibility |
| CMP-016 | AI Governance Gateway Component | LGS-016 — AI Governance Gateway | DOM-003 / LS-009 / BDM-003 |
| CMP-017 | Policy Component | LGS-017 — Policy Service | DOM-002 / LS-005 / BDM-015 |
| CMP-018 | Emergency Coordination Component | LGS-018 — Emergency Coordination Service | DOM-005 / LS-014 / BDM-016 |
| CMP-019 | Integration Component | LGS-019 — Integration Service | DOM-003 / LS-007 / BDM-014 |
| CMP-020 | Monitoring Component | LGS-020 — Monitoring Service | DOM-004 / LS-013 / BDM-005, BDM-012 |
| CMP-021 | Logging Component | LGS-021 — Logging Service | DOM-004 / LS-013 / BDM-005 |

## 9.2 CMP-001 — Dashboard Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-001 |
| Name | Dashboard Component |
| Purpose | Provide accessible, role-appropriate operational, supervisory, administrative, analytical, security, and executive views. |
| Primary Responsibility | Compose approved context, status, task, confidence, limitation, and action views without owning underlying business state. |
| Non-responsibilities | Does not own authorization, event state, workflow state, policy, source qualification, AI evaluation, external action, or audit evidence. |
| Logical Owner | Operational Experience — `DOM-001 / LS-001`. |
| Traceability | TMA-ARCH-001 §10.1, §12.1; TMA-ARCH-002 `LGS-001`, `BDM-001`. |
| Business Domain | BDM-001 — Traffic Operations. |
| Logical Domain | DOM-001 — Experience and Access. |
| Logical Service Group | LS-001 — Operational Experience. |
| Logical Service | LGS-001 — Dashboard Service. |

## 9.3 CMP-002 — Authentication Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-002 |
| Name | Authentication Component |
| Purpose | Establish approved identity assurance before protected TrafficMind AI participation. |
| Primary Responsibility | Validate approved identity assertions and provide attributable assurance and validity context. |
| Non-responsibilities | Does not determine access scope, business authority, incident priority, workflow outcome, or external agency authority. |
| Logical Owner | Identity and Access Policy — `DOM-001 / LS-002`. |
| Traceability | TMA-ARCH-001 §9.8, §10.9, §12.2; TMA-ARCH-002 `LGS-002`, `BDM-004`. |
| Business Domain | BDM-004 — Identity. |
| Logical Domain | DOM-001 — Experience and Access. |
| Logical Service Group | LS-002 — Identity and Access Policy. |
| Logical Service | LGS-002 — Authentication Service. |

## 9.4 CMP-003 — Authorization Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-003 |
| Name | Authorization Component |
| Purpose | Determine permitted access and actions for an authenticated identity in approved context. |
| Primary Responsibility | Evaluate role, agency, purpose, geography, assignment, classification, delegation, policy, and eligibility conditions. |
| Non-responsibilities | Does not authenticate identity, own business state, set policy content, approve agency action, or alter workflow state. |
| Logical Owner | Identity and Access Policy — `DOM-001 / LS-002`. |
| Traceability | TMA-ARCH-001 §6.6, §9.5, §10.9, §12.3; TMA-ARCH-002 `LGS-003`, `BDM-004`, `BDM-005`. |
| Business Domain | BDM-004 — Identity; BDM-005 — Security. |
| Logical Domain | DOM-001 — Experience and Access. |
| Logical Service Group | LS-002 — Identity and Access Policy. |
| Logical Service | LGS-003 — Authorization Service. |

## 9.5 CMP-004 — Incident Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-004 |
| Name | Incident Component |
| Purpose | Maintain the authoritative operational-event record and evidence-backed event state. |
| Primary Responsibility | Own candidate, observed, inferred, verified, duplicate, suppressed, resolved, and closed event state with evidence, freshness, quality, and context relationships. |
| Non-responsibilities | Does not own workflow task lifecycle, policy content, AI model decisions, external dispatch, traffic control, or agency command. |
| Logical Owner | Operational Context and Event Management — `DOM-002 / LS-003`. |
| Traceability | TMA-ARCH-001 §10.3, §10.4, §12.4; TMA-ARCH-002 `LGS-004`, `BDM-001`, `BDM-002`. |
| Business Domain | BDM-001 — Traffic Operations; BDM-002 — Incident Management. |
| Logical Domain | DOM-002 — Operational Coordination. |
| Logical Service Group | LS-003 — Operational Context and Event Management. |
| Logical Service | LGS-004 — Incident Service. |

## 9.6 CMP-005 — Workflow Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-005 |
| Name | Workflow Component |
| Purpose | Govern the attributable, human-led coordination lifecycle for approved operational events. |
| Primary Responsibility | Own verification tasks, assignment, acknowledgement, handoff, approval, escalation, exception, closure, rationale, and manual-fallback references. |
| Non-responsibilities | Does not own event truth, identity proof, policy content, notification delivery, external command, or statutory procedure. |
| Logical Owner | Workflow and Coordination — `DOM-002 / LS-004`. |
| Traceability | TMA-ARCH-001 §6.7, §10.4, §12.5; TMA-ARCH-002 `LGS-005`, `BDM-002`. |
| Business Domain | BDM-002 — Incident Management. |
| Logical Domain | DOM-002 — Operational Coordination. |
| Logical Service Group | LS-004 — Workflow and Coordination. |
| Logical Service | LGS-005 — Workflow Service. |

## 9.7 CMP-006 — Camera Context Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-006 |
| Name | Camera Context Component |
| Purpose | Provide qualified, read-only camera evidence references, approved observations, and source-health context. |
| Primary Responsibility | Own the approved operational use of camera-source context, including source identity, freshness, quality, coverage, and limitation qualification. |
| Non-responsibilities | Does not control cameras, retain prohibited raw-video use, identify people, verify incidents, or alter traffic infrastructure. |
| Logical Owner | Integration and Source Management / Spatial and Asset Context — `DOM-003 / LS-007–LS-008`. |
| Traceability | TMA-ARCH-001 §9.7, §10.6, §12.6; TMA-ARCH-002 `LGS-006`, `BDM-001`. |
| Business Domain | BDM-001 — Traffic Operations. |
| Logical Domain | DOM-003 — Intelligence and Context. |
| Logical Service Group | LS-007 — Integration and Source Management; LS-008 — Spatial and Asset Context. |
| Logical Service | LGS-006 — Camera Context Service. |

## 9.8 CMP-007 — Asset Context Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-007 |
| Name | Asset Context Component |
| Purpose | Provide approved field-asset, maintenance, roadwork, and relevant municipal context. |
| Primary Responsibility | Own the governed relationship of approved asset status and context to operational location and event interpretation. |
| Non-responsibilities | Does not control assets, create maintenance work, infer asset condition, issue field instructions, or own event/workflow state. |
| Logical Owner | Spatial and Asset Context — `DOM-003 / LS-008`. |
| Traceability | TMA-ARCH-001 §9.3, §10.6, §12.7; TMA-ARCH-002 `LGS-007`, `BDM-001`. |
| Business Domain | BDM-001 — Traffic Operations. |
| Logical Domain | DOM-003 — Intelligence and Context. |
| Logical Service Group | LS-008 — Spatial and Asset Context. |
| Logical Service | LGS-007 — Asset Context Service. |

## 9.9 CMP-008 — Map Context Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-008 |
| Name | Map Context Component |
| Purpose | Provide approved, role-scoped map-based context for operational interpretation. |
| Primary Responsibility | Own governed relationships among events, corridors, junctions, zones, route segments, assets, and approved spatial-reference context. |
| Non-responsibilities | Does not provide consumer routing, claim route clearance, control field devices, alter event state, or create geographic authority. |
| Logical Owner | Spatial and Asset Context — `DOM-003 / LS-008`. |
| Traceability | TMA-ARCH-001 §9.6, §10.6, §12.8; TMA-ARCH-002 `LGS-008`, `BDM-013`. |
| Business Domain | BDM-013 — Maps. |
| Logical Domain | DOM-003 — Intelligence and Context. |
| Logical Service Group | LS-008 — Spatial and Asset Context. |
| Logical Service | LGS-008 — Map Context Service. |

## 9.10 CMP-009 — Notification Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-009 |
| Name | Notification Component |
| Purpose | Deliver policy-bound coordination communication and maintain delivery and acknowledgement state. |
| Primary Responsibility | Own notification eligibility execution, role-scoped recipient delivery outcome, acknowledgement, escalation, failure, and fallback status. |
| Non-responsibilities | Does not determine incident truth, select an operational response, dispatch a service, prove external action, or modify workflow authority. |
| Logical Owner | Notification and Acknowledgement — `DOM-002 / LS-006`. |
| Traceability | TMA-ARCH-001 §9.12, §10.4, §12.9; TMA-ARCH-002 `LGS-009`, `BDM-007`. |
| Business Domain | BDM-007 — Notification. |
| Logical Domain | DOM-002 — Operational Coordination. |
| Logical Service Group | LS-006 — Notification and Acknowledgement. |
| Logical Service | LGS-009 — Notification Service. |

## 9.11 CMP-010 — Analytics Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-010 |
| Name | Analytics Component |
| Purpose | Produce reproducible, governed analytical outcomes for approved measurement and review. |
| Primary Responsibility | Own approved analytical result production with methodology, coverage, lineage, assumptions, quality, and limitation context. |
| Non-responsibilities | Does not alter live event/workflow state, issue operational command, make unsupported outcome claims, or use prohibited data. |
| Logical Owner | Search, Analytics, and Reporting — `DOM-004 / LS-010`. |
| Traceability | TMA-ARCH-001 §9.9, §10.7, §12.10; TMA-ARCH-002 `LGS-010`, `BDM-010`. |
| Business Domain | BDM-010 — Analytics. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-010 — Search, Analytics, and Reporting. |
| Logical Service | LGS-010 — Analytics Service. |

## 9.12 CMP-011 — Reporting Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-011 |
| Name | Reporting Component |
| Purpose | Produce controlled operational, executive, audit, and outcome reports for authorized audiences. |
| Primary Responsibility | Own report composition, scope, classification, methodology, limitation, approval, delivery, and export context. |
| Non-responsibilities | Does not modify operational records, create decisions, bypass disclosure controls, or present estimates as verified public outcomes. |
| Logical Owner | Search, Analytics, and Reporting — `DOM-004 / LS-010`. |
| Traceability | TMA-ARCH-001 §9.11, §10.7, §12.11; TMA-ARCH-002 `LGS-011`, `BDM-008`. |
| Business Domain | BDM-008 — Reporting. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-010 — Search, Analytics, and Reporting. |
| Logical Service | LGS-011 — Reporting Service. |

## 9.13 CMP-012 — Configuration Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-012 |
| Name | Configuration Component |
| Purpose | Maintain approved business configuration and controlled version state. |
| Primary Responsibility | Own governed settings for role mappings, sources, policy references, thresholds, geographic scope, report definitions, feature eligibility, retention, suspension, and rollback. |
| Non-responsibilities | Does not own operational event state, execute workflow decisions, self-approve high-risk changes, or create agency authority. |
| Logical Owner | Configuration and Change Governance — `DOM-004 / LS-011`. |
| Traceability | TMA-ARCH-001 §6.14, §13.7, §13.20, §12.12; TMA-ARCH-002 `LGS-012`, `BDM-006`. |
| Business Domain | BDM-006 — Configuration. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-011 — Configuration and Change Governance. |
| Logical Service | LGS-012 — Configuration Service. |

## 9.14 CMP-013 — Audit Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-013 |
| Name | Audit Component |
| Purpose | Preserve protected, attributable evidence of material platform and operational activity. |
| Primary Responsibility | Own accountability records for access, decisions, approvals, overrides, configuration, policy, model, integration, notification, export, and administrative facts. |
| Non-responsibilities | Does not own operational event truth, workflow lifecycle, policy outcome, unrestricted data access, or ordinary diagnostic logging. |
| Logical Owner | Audit and Assurance — `DOM-004 / LS-012`. |
| Traceability | TMA-ARCH-001 §8.12, §9.10, §13.5, §12.13; TMA-ARCH-002 `LGS-013`, `BDM-011`. |
| Business Domain | BDM-011 — Audit. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-012 — Audit and Assurance. |
| Logical Service | LGS-013 — Audit Service. |

## 9.15 CMP-014 — Search Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-014 |
| Name | Search Component |
| Purpose | Provide authorized discovery of approved operational, asset, report, and audit references. |
| Primary Responsibility | Own policy-scoped discovery, filtering, result qualification, freshness, and provenance presentation. |
| Non-responsibilities | Does not own source records, bypass authorization, expose hidden record existence, alter business state, or create an unrestricted extraction path. |
| Logical Owner | Search, Analytics, and Reporting — `DOM-004 / LS-010`. |
| Traceability | TMA-ARCH-001 §10.7, §12.14; TMA-ARCH-002 `LGS-014`, `BDM-008`, `BDM-010`. |
| Business Domain | BDM-008 — Reporting; BDM-010 — Analytics. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-010 — Search, Analytics, and Reporting. |
| Logical Service | LGS-014 — Search Service. |

## 9.16 CMP-015 — Controlled Interaction Gateway Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-015 |
| Name | Controlled Interaction Gateway Component |
| Purpose | Govern approved client and partner interaction entry without bypassing business, policy, workflow, or audit controls. |
| Primary Responsibility | Own validated interaction context, initial identity/access enforcement, controlled routing, correlation, and safe interaction outcome. |
| Non-responsibilities | Does not own business state, make workflow decisions, define policy, authenticate independently of the approved identity context, or provide bypass access. |
| Logical Owner | Experience and Access — `DOM-001 / LS-001–LS-002`. |
| Traceability | TMA-ARCH-001 §10.2, §12.15, ADR-005; TMA-ARCH-002 `LGS-015`. |
| Business Domain | Governed entry responsibility supporting approved business domains; no independent business capability. |
| Logical Domain | DOM-001 — Experience and Access. |
| Logical Service Group | LS-001 — Operational Experience; LS-002 — Identity and Access Policy. |
| Logical Service | LGS-015 — Controlled Interaction Gateway. |

## 9.17 CMP-016 — AI Governance Gateway Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-016 |
| Name | AI Governance Gateway Component |
| Purpose | Govern use of approved bounded AI capability and preserve advisory, explainable, policy-bound behaviour. |
| Primary Responsibility | Own AI use-case eligibility, authorized input scope, quality checks, confidence, abstention, provenance, explanation, model identity, and suspension state. |
| Non-responsibilities | Does not verify an incident, own workflow authority, set policy, bypass human approval, or execute external action. |
| Logical Owner | AI-Assisted Insight — `DOM-003 / LS-009`. |
| Traceability | TMA-ARCH-001 §6.8, §10.5, §12.16, ADR-007; TMA-ARCH-002 `LGS-016`, `BDM-003`. |
| Business Domain | BDM-003 — AI Intelligence. |
| Logical Domain | DOM-003 — Intelligence and Context. |
| Logical Service Group | LS-009 — AI-Assisted Insight. |
| Logical Service | LGS-016 — AI Governance Gateway. |

## 9.18 CMP-017 — Policy Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-017 |
| Name | Policy Component |
| Purpose | Evaluate approved deterministic policy and playbook rules for eligibility, priority, routing, and required conditions. |
| Primary Responsibility | Own policy evaluation during approved operation and explanation of applied policy version and outcome. |
| Non-responsibilities | Does not verify facts, define or approve policy content, replace human judgment, alter workflow directly, or issue external action. |
| Logical Owner | Policy and Playbook Decisioning — `DOM-002 / LS-005`. |
| Traceability | TMA-ARCH-001 §10.3, §12.17; TMA-ARCH-002 `LGS-017`, `BDM-015`. |
| Business Domain | BDM-015 — Policy. |
| Logical Domain | DOM-002 — Operational Coordination. |
| Logical Service Group | LS-005 — Policy and Playbook Decisioning. |
| Logical Service | LGS-017 — Policy Service. |

## 9.19 CMP-018 — Emergency Coordination Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-018 |
| Name | Emergency Coordination Component |
| Purpose | Support separately eligible, minimum-necessary, human-led emergency coordination. |
| Primary Responsibility | Own restricted coordination eligibility, status, acknowledgement, recovery, manual fallback, and enhanced accountability context. |
| Non-responsibilities | Does not dispatch emergency resources, disclose patient/clinical content, activate signal priority, infer clear passage, control infrastructure, or supersede agency command. |
| Logical Owner | Emergency Coordination — `DOM-005 / LS-014`. |
| Traceability | TMA-ARCH-001 §2.3–2.4, §12.18, ADR-006; TMA-ARCH-002 `LGS-018`, `BDM-016`. |
| Business Domain | BDM-016 — Emergency Coordination. |
| Logical Domain | DOM-005 — Restricted Emergency Coordination. |
| Logical Service Group | LS-014 — Emergency Coordination. |
| Logical Service | LGS-018 — Emergency Coordination Service. |

## 9.20 CMP-019 — Integration Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-019 |
| Name | Integration Component |
| Purpose | Qualify and isolate approved external information exchange before it is used operationally. |
| Primary Responsibility | Own source registration, identity/contract validation, permitted-data qualification, normalization, provenance, freshness, quality, rejection/quarantine, and source-health state. |
| Non-responsibilities | Does not own verified events, workflow, source-agency authority, policy content, or unapproved outbound control, dispatch, or device action. |
| Logical Owner | Integration and Source Management — `DOM-003 / LS-007`. |
| Traceability | TMA-ARCH-001 §9.14, §10.6, §12.19; TMA-ARCH-002 `LGS-019`, `BDM-014`. |
| Business Domain | BDM-014 — GIS; supports approved external-context domains. |
| Logical Domain | DOM-003 — Intelligence and Context. |
| Logical Service Group | LS-007 — Integration and Source Management. |
| Logical Service | LGS-019 — Integration Service. |

## 9.21 CMP-020 — Monitoring Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-020 |
| Name | Monitoring Component |
| Purpose | Qualify service, source, workflow, policy, model, security, and support condition for safe use and accountable response. |
| Primary Responsibility | Own approved health, freshness, quality, alert, correlation, service-impact, and support-routing condition context. |
| Non-responsibilities | Does not own business state, mutate workflow, expose restricted information through diagnostics, or replace incident management. |
| Logical Owner | Service and Operational Observability — `DOM-004 / LS-013`. |
| Traceability | TMA-ARCH-001 §10.10, §12.20, §13.2, §13.19; TMA-ARCH-002 `LGS-020`, `BDM-005`, `BDM-012`. |
| Business Domain | BDM-005 — Security; BDM-012 — Governance. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-013 — Service and Operational Observability. |
| Logical Service | LGS-020 — Monitoring Service. |

## 9.22 CMP-021 — Logging Component

| Attribute | Definition |
|---|---|
| Component ID | CMP-021 |
| Name | Logging Component |
| Purpose | Preserve protected diagnostic records and correlation context for authorized support, troubleshooting, and investigation. |
| Primary Responsibility | Own structured diagnostic-record intake, minimization, redaction, classification, retention, protected inquiry, and diagnostic correlation. |
| Non-responsibilities | Does not own audit evidence, operational event state, workflow state, unrestricted sensitive-data retention, or business decision-making. |
| Logical Owner | Service and Operational Observability — `DOM-004 / LS-013`. |
| Traceability | TMA-ARCH-001 §13.1, §12.21; TMA-ARCH-002 `LGS-021`, `BDM-005`. |
| Business Domain | BDM-005 — Security. |
| Logical Domain | DOM-004 — Insight and Governance. |
| Logical Service Group | LS-013 — Service and Operational Observability. |
| Logical Service | LGS-021 — Logging Service. |

## 9.23 Catalogue Traceability Statement

The component catalogue is complete for the approved Logical Service baseline: every `LGS-001` to `LGS-021` has exactly one originating component, `CMP-001` to `CMP-021`. Each component has explicit traceability to its Business Domain, Logical Domain, Logical Service Group, Logical Service, and relevant predecessor architecture sections.

No catalogue entry introduces a new business capability, changes an approved logical-service responsibility, or creates a path to autonomous traffic control, camera control, emergency dispatch, enforcement, identity tracking, or another prohibited external action.

---

# 10. Detailed Component Profiles

## 10.1 Profile Conventions

The profiles below expand the approved catalogue only. “Availability expectations” express the required logical outcome, not a service-level target or delivery design. “Scaling characteristics” describe how responsibility grows or is isolated; they do not prescribe a technical scaling mechanism. “Extension points” identify only controlled future refinement within approved boundaries and do not authorize new scope.

## 10.2 CMP-001 — Dashboard Component

- **Purpose / Responsibilities:** Present role-appropriate, accessible operational and governance views; compose approved context, status, confidence, limitations, and permitted actions.
- **Consumes / Produces:** Consumes authorized event, workflow, context, notification, insight, report, and condition information; produces role-scoped views and attributable user-action requests.
- **Collaborating Components / Dependencies:** Collaborates with CMP-002–005, CMP-008–014, CMP-016–017, and CMP-020–021; depends on current authorization and qualified owning-component information.
- **State Ownership / Authority Boundary:** Owns presentation composition only; owns no operational, workflow, policy, or access state and cannot create agency authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Shows explicit unavailable, partial, stale, or restricted state; scales by authorized user, role, geography, and view demand; must preserve a meaningful safe view of relevant condition or limitation.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces consumed access scope; audits material user actions; consumes view configuration but owns none; exposes view availability, error, and limitation condition.
- **Business Rules Owned / Not Owned:** Owns presentation and accessibility rules; does not own access, event, workflow, policy, AI, notification, or report business rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved view configuration and controlled retirement; extension is limited to approved role views and fields; constrained by authorization, classification, accessibility, and source qualification; future evolution requires approved user and scope changes.

## 10.3 CMP-002 — Authentication Component

- **Purpose / Responsibilities:** Establish approved human and service identity assurance; maintain attributable identity-validity context.
- **Consumes / Produces:** Consumes approved identity assertions and trust configuration; produces authentication outcome, assurance level, identity reference, and validity condition.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003, CMP-012–013, CMP-015, and CMP-020–021; depends on approved enterprise identity authority and governed trust conditions.
- **State Ownership / Authority Boundary:** Owns TrafficMind AI interpretation of authentication state; does not own identity issuance, access scope, business authority, or agency authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Denies protected participation for invalid, expired, or unavailable assurance; scales by concurrent protected participation; must make authentication restriction explicit before protected work begins.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Is a protected identity boundary; audits material authentication outcomes; consumes trust configuration without owning enterprise identity configuration; exposes assurance and failure condition.
- **Business Rules Owned / Not Owned:** Owns approved authentication interpretation; does not own role, purpose, geography, policy, workflow, or privilege rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved trust activation, expiry, and revocation; extension is limited to approved assurance methods; constrained by identity governance and least privilege; future expansion needs security approval.

## 10.4 CMP-003 — Authorization Component

- **Purpose / Responsibilities:** Determine whether an authenticated identity may view or request a protected action in current approved context.
- **Consumes / Produces:** Consumes identity, role, agency, purpose, geography, assignment, classification, policy, and feature context; produces allow, deny, restricted scope, and reason.
- **Collaborating Components / Dependencies:** Collaborates with every protected component, principally CMP-002, CMP-004–005, CMP-009, CMP-012–013, CMP-015–018; depends on current identity, policy, and configuration state.
- **State Ownership / Authority Boundary:** Owns access-decision state only; does not own operational facts, workflow outcomes, policy content, or external authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Fails closed for protected actions; scales with authorization-decision demand; must provide a deterministic restriction outcome for material access attempts.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Is the authoritative access-control boundary; audits high-risk decisions and exceptions; consumes controlled role/policy configuration; exposes decision failures and abnormal denial patterns.
- **Business Rules Owned / Not Owned:** Owns evaluation of approved access rules; does not own rule approval, incident priority, workflow transitions, or notifications.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows controlled policy/role activation and withdrawal; extension is limited to approved attributes and scopes; constrained by minimum privilege and agency boundaries; future attributes require governance approval.

## 10.5 CMP-004 — Incident Component

- **Purpose / Responsibilities:** Maintain authoritative operational-event and evidence relationship state from candidate through verified, suppressed, resolved, or closed condition.
- **Consumes / Produces:** Consumes qualified observations, spatial/asset context, authorized workflow outcomes, policy result, and eligible AI insight; produces event state, evidence references, quality, freshness, ownership, and event facts.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003, CMP-005–009, CMP-012–014, CMP-016–020; depends on authorization, qualified context, policy, configuration, audit, and health condition.
- **State Ownership / Authority Boundary:** Is the sole authoritative owner of operational-event state; does not own task lifecycle, policy content, external dispatch, field control, or agency command.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Blocks ambiguous material changes and retains clearly qualified confirmed state; scales by approved event volume, geography, and complexity; must preserve event integrity and visible freshness.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Restricts reads/changes by approved scope; audits every material state transition and evidence relationship; consumes configuration; exposes event-processing, quality, and dependency condition.
- **Business Rules Owned / Not Owned:** Owns event-state and duplicate/suppression rules; does not own access, workflow approval, AI eligibility, notification delivery, or policy content.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is candidate to controlled closure and retention; extension is limited to approved event types and evidence context; constrained by human verification and no-actuation policy; future event types require scope approval.

## 10.6 CMP-005 — Workflow Component

- **Purpose / Responsibilities:** Govern the attributable human-led coordination lifecycle around an operational event.
- **Consumes / Produces:** Consumes authorized event context, identity/access decision, policy outcome, user decision, acknowledgement, and configuration; produces task, assignment, handoff, approval, exception, closure, rationale, and fallback state.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-009, CMP-012–013, CMP-017–018, CMP-020–021; depends on authoritative event state, policy, audit, and permitted participation.
- **State Ownership / Authority Boundary:** Is the authoritative owner of workflow lifecycle state; does not own event truth, policy content, notification delivery, dispatch, or statutory procedure.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Restricts unverified or un-auditable transitions and directs users to approved manual procedures; scales by active workflows and participants; must preserve clear ownership and pending state.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces action scope and stronger conditions for high-risk steps; audits material transition, rationale, approval, and override; consumes workflow configuration; exposes backlog, delay, exception, and restriction state.
- **Business Rules Owned / Not Owned:** Owns lifecycle transition and required-rationale rules; does not own incident verification facts, policy definition, notification transport, or agency command.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows controlled workflow definition, activation, completion, and archival; extension is limited to approved playbooks; constrained by human authority and manual fallback; future workflows require governance approval.

## 10.7 CMP-006 — Camera Context Component

- **Purpose / Responsibilities:** Provide qualified, read-only camera evidence references, approved observations, coverage, and source-health context.
- **Consumes / Produces:** Consumes qualified camera-source information, spatial context, configuration, and access condition; produces evidence references, approved observation context, freshness, coverage, quality, and limitation state.
- **Collaborating Components / Dependencies:** Collaborates with CMP-004, CMP-008, CMP-010–011, CMP-016, CMP-019–021; depends on Integration qualification, permitted source use, and authorization.
- **State Ownership / Authority Boundary:** Owns camera-context qualification for platform use; does not own camera devices, raw camera operation, identity inference, incident truth, or traffic control.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Marks context unavailable, stale, degraded, or incomplete; scales by approved source and evidence-reference demand; must never represent failed source evidence as current.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Restricts evidence by purpose and classification; audits material restricted access and source use; consumes source configuration; exposes source freshness, quality, and availability.
- **Business Rules Owned / Not Owned:** Owns camera-context presentation qualification; does not own source admission, event verification, AI result, or retention policy.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows source approval, qualification, use, restriction, and retirement; extension is limited to approved camera sources; constrained by privacy and read-only boundary; future sources require data and governance approval.

## 10.8 CMP-007 — Asset Context Component

- **Purpose / Responsibilities:** Provide approved asset, roadwork, maintenance, and municipal context for operational interpretation.
- **Consumes / Produces:** Consumes qualified asset information, geographic context, configuration, and access scope; produces asset reference, approved status, maintenance context, freshness, and location relationship.
- **Collaborating Components / Dependencies:** Collaborates with CMP-004, CMP-008, CMP-010–011, CMP-018–021; depends on Integration qualification, spatial context, and authorization.
- **State Ownership / Authority Boundary:** Owns platform asset-context relationship; does not own asset operation, maintenance execution, field instructions, or incident/workflow state.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Returns stale, unavailable, or incomplete asset context explicitly; scales by approved asset and contextual relationship demand; must not infer missing asset condition.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Applies agency/purpose/geography restrictions; audits material restricted use; consumes asset-source configuration; exposes source and context quality condition.
- **Business Rules Owned / Not Owned:** Owns approved asset-context association rules; does not own source qualification, operational priority, policy, or maintenance authority.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved asset-source onboarding and retirement; extension is limited to approved context types; constrained by source ownership and no-control boundary; future expansion requires authorization.

## 10.9 CMP-008 — Map Context Component

- **Purpose / Responsibilities:** Provide approved map-based interpretation of events, corridors, junctions, zones, route segments, sources, and assets.
- **Consumes / Produces:** Consumes qualified GIS information, approved event/asset references, configuration, and access scope; produces governed spatial relationships, coverage, source/version, and limitation context.
- **Collaborating Components / Dependencies:** Collaborates with CMP-004, CMP-006–007, CMP-010–011, CMP-018–021; depends on Integration qualification and configured geographic scope.
- **State Ownership / Authority Boundary:** Owns operational spatial-context assembly; does not own GIS source issuance, route clearance, consumer routing, field control, or event state.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Marks spatial context missing, stale, or partial; scales by authorized spatial-view demand and operating area; must not imply safe routing from incomplete context.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Restricts spatial layers by role, purpose, geography, and classification; audits restricted use; consumes spatial configuration; exposes coverage and freshness condition.
- **Business Rules Owned / Not Owned:** Owns spatial association and interpretation rules; does not own access policy, event workflow, traffic authority, or GIS source qualification.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved spatial-scope versioning; extension is limited to approved overlays and geography; constrained by source provenance and no-command rule; future scope needs governance approval.

## 10.10 CMP-009 — Notification Component

- **Purpose / Responsibilities:** Deliver policy-bound coordination communication and retain delivery, acknowledgement, escalation, and fallback state.
- **Consumes / Produces:** Consumes valid workflow request, recipient scope, policy, event context, and communication condition; produces delivery outcome, acknowledgement, failure, escalation, and fallback facts.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-012–013, CMP-017–018, CMP-020–021; depends on authorized workflow, recipient scope, and policy.
- **State Ownership / Authority Boundary:** Owns notification and acknowledgement state; does not own event truth, external action completion, dispatch, or workflow authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Records pending or failed outcome and invokes approved fallback; scales by approved notification, severity, and recipient demand; must expose delivery uncertainty.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Restricts content and recipients; audits material communication and acknowledgement; consumes routing configuration; exposes delivery and escalation condition.
- **Business Rules Owned / Not Owned:** Owns permitted delivery and acknowledgement handling rules; does not own incident priority, notification eligibility policy, or external recipient action.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows workflow request through terminal delivery/failure state; extension is limited to approved communication paths; constrained by classification and no-dispatch rule; future channels need approval.

## 10.11 CMP-010 — Analytics Component

- **Purpose / Responsibilities:** Produce reproducible, governed analytical outcomes for approved measurement, quality assessment, trend analysis, and pilot review.
- **Consumes / Produces:** Consumes authorized qualified operational, workflow, source, asset, spatial, audit, and configuration context; produces analysis, methodology, coverage, lineage, assumptions, quality, and limitation results.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-007–008, CMP-011–014, CMP-019–021; depends on approved data use, source quality, methodology configuration, and access scope.
- **State Ownership / Authority Boundary:** Owns analytical result state; does not own live event/workflow state, public claim approval, operational command, or source authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Marks results delayed, partial, unavailable, or invalid; scales by approved analytic demand independent of immediate coordination; must not impede or rewrite live operational state.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces minimum-necessary authorized use; audits material analysis and exports; consumes methodology configuration; exposes input quality, coverage, and result condition.
- **Business Rules Owned / Not Owned:** Owns approved computation and result-qualification rules; does not own event verification, report approval, retention policy, or operational response rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved method activation, result review, retention, and retirement; extension is limited to approved measures; constrained by methodology and data governance; future metrics need approval.

## 10.12 CMP-011 — Reporting Component

- **Purpose / Responsibilities:** Produce controlled operational, executive, audit, and outcome reports for authorized recipients.
- **Consumes / Produces:** Consumes authorized event, workflow, analytical, audit, policy, and report-definition context; produces governed report, classification, scope, methodology, limitation, approval, and delivery context.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-010, CMP-012–014, CMP-020–021; depends on authorization, report configuration, analysis, audit, and approved disclosure conditions.
- **State Ownership / Authority Boundary:** Owns report composition and delivery state; does not own operational records, event decisions, outcome truth, or unrestricted disclosure authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Shows report pending, partial, restricted, or unavailable state; scales by approved report demand and audience; must not affect time-sensitive coordination.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces audience, classification, export, and retention scope; audits material generation and distribution; consumes report configuration; exposes completion and restriction condition.
- **Business Rules Owned / Not Owned:** Owns report composition and disclosure-control rules; does not own analytical methodology, policy content, event state, or external public approval.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is definition, generation, review, delivery, retention, and withdrawal; extension is limited to approved reports; constrained by data minimization and claim governance; future reports need approval.

## 10.13 CMP-012 — Configuration Component

- **Purpose / Responsibilities:** Maintain approved business configuration, version, eligibility, suspension, and rollback state.
- **Consumes / Produces:** Consumes authorized change request, approval, policy, and governance context; produces active configuration, version, eligibility, source registration, and controlled change outcome.
- **Collaborating Components / Dependencies:** Collaborates with every governed component, principally CMP-002–003, CMP-005, CMP-009–013, CMP-016–020; depends on privileged identity, authorization, audit, and governance approval.
- **State Ownership / Authority Boundary:** Is authoritative for controlled configuration state; does not own operational events, workflow completion, policy-content approval, or agency authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Blocks unverified activation and exposes configuration restriction; scales by controlled read and approved change demand; must provide verified active state or a safe restriction.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Requires privileged, separated change control; audits every material change, approval, activation, rollback, and suspension; owns configuration versioning; exposes configuration integrity and drift condition.
- **Business Rules Owned / Not Owned:** Owns controlled configuration lifecycle rules; does not own operational policy meaning, incident logic, or workflow authority.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is proposal, review, approval, activation, rollback/suspension, and retirement; extension is limited to approved settings; constrained by separation of duties; future configuration types require governance.

## 10.14 CMP-013 — Audit Component

- **Purpose / Responsibilities:** Preserve protected, attributable accountability evidence for material platform and operational activity.
- **Consumes / Produces:** Consumes material facts, identity, version, time, correlation, retention, and integrity context; produces protected audit record, review result, integrity state, and audit-availability condition.
- **Collaborating Components / Dependencies:** Collaborates with every material component, principally CMP-002–005, CMP-009, CMP-012, CMP-016–021; depends on attributable identity, controlled retention, and condition visibility.
- **State Ownership / Authority Boundary:** Is authoritative for protected audit evidence; does not own event truth, workflow state, policy decision, diagnostic detail, or unrestricted inquiry.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Declares degraded auditability and constrains high-risk actions under policy; scales by material fact and authorized review demand; must preserve accountable evidence or explicit restriction.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Protects against ordinary modification or erasure; audits audit access and export; consumes retention configuration but owns no general configuration; exposes integrity and availability condition.
- **Business Rules Owned / Not Owned:** Owns audit completeness, attributable recording, and protected-review rules; does not own business decision rules or source-event semantics.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is record, protect, retain/hold, authorized review, and controlled disposition; extension is limited to approved audit fact types; constrained by minimization and integrity; future retention changes require governance.

## 10.15 CMP-014 — Search Component

- **Purpose / Responsibilities:** Provide authorized discovery of approved events, assets, reports, audit references, and permitted operational records.
- **Consumes / Produces:** Consumes approved searchable references, authorization, classification, retention, query, and freshness context; produces policy-scoped result references, provenance, and partial/no-result condition.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–004, CMP-007, CMP-011–013, CMP-020–021; depends on authoritative source references and current authorization.
- **State Ownership / Authority Boundary:** Owns discovery and result-qualification state; does not own the source records, access policy, business state, or record retention decision.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Shows unavailable, partial, stale, or restricted discovery state; scales by approved query and discovery demand; must not leak hidden record existence or block authoritative work.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Applies authorization to intent and result; audits sensitive discovery and export; consumes discovery configuration; exposes index/result freshness and access-filter condition.
- **Business Rules Owned / Not Owned:** Owns authorized discovery and filtering rules; does not own event, workflow, report, audit, or retention business rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows approved reference availability and retention; extension is limited to approved record classes; constrained by inference prevention and classification; future discovery scope needs approval.

## 10.16 CMP-015 — Controlled Interaction Gateway Component

- **Purpose / Responsibilities:** Govern approved user and partner interaction entry and route only validated, permitted requests to their owning component.
- **Consumes / Produces:** Consumes incoming request, identity, authorization, route/configuration, and owning-component condition; produces governed interaction context, correlation, validation/denial outcome, and controlled routing request.
- **Collaborating Components / Dependencies:** Collaborates with CMP-001–005, CMP-012–013, CMP-016–018, and CMP-020–021; depends on authentication, authorization, configuration, audit, and owning-component availability.
- **State Ownership / Authority Boundary:** Owns entry-governance and correlation state only; does not own business state, workflow decisions, policy outcome, or independent authentication authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Safely denies or restricts invalid, unauthorized, or unavailable interactions; scales by approved interaction demand; must preserve controlled entry without creating bypass paths.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Is a protected interaction boundary; audits material entry, denial, and protected routing; consumes routing configuration; exposes interaction load, validation, denial, and dependency condition.
- **Business Rules Owned / Not Owned:** Owns interaction validation and routing rules; does not own underlying domain rules, state transitions, or policy content.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle follows controlled route activation and withdrawal; extension is limited to approved interactions; constrained by no-bypass and minimum exposure; future entry paths need architecture approval.

## 10.17 CMP-016 — AI Governance Gateway Component

- **Purpose / Responsibilities:** Govern approved bounded AI use while preserving confidence, provenance, explainability, abstention, and independent suspension.
- **Consumes / Produces:** Consumes authorized event/context reference, permitted input, quality, policy, model/configuration, and feature state; produces governed insight or abstention with confidence, explanation, limitation, and model identity.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-012–013, CMP-017, CMP-019–021; depends on authorization, policy, configuration, qualified context, audit, and model condition.
- **State Ownership / Authority Boundary:** Owns governed AI-use state and result qualification; does not own event verification, workflow authority, policy content, human approval, or external action.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Returns abstention, evidence-only, or manual-playbook state for unavailable or ineligible insight; scales by approved use case and request demand; must remain independently restrictable from core workflow.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces minimum-necessary approved input and output handling; audits material use and result reference; consumes model/feature configuration; exposes confidence, abstention, policy denial, and condition signals.
- **Business Rules Owned / Not Owned:** Owns AI eligibility, qualification, and output-handling rules; does not own deterministic policy, event truth, user authority, or operational command rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is approved enablement, evaluation, suspension, revalidation, and retirement; extension is limited to approved use cases; constrained by explainability and human verification; future models require safety/governance approval.

## 10.18 CMP-017 — Policy Component

- **Purpose / Responsibilities:** Evaluate approved deterministic policy and playbook rules for access conditions, priority, routing, eligibility, and required actions.
- **Consumes / Produces:** Consumes approved rule version, trusted event/workflow/source/user/geography context, and configuration; produces explainable policy outcome, required conditions, and version reference.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-009, CMP-012–013, CMP-016, CMP-018–021; depends on configuration integrity, authorization context, and audit condition.
- **State Ownership / Authority Boundary:** Owns policy-evaluation outcome; does not own policy approval/content, event truth, human decision, workflow mutation, or external execution.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Returns restricted or manual-policy outcome when rule/context integrity is insufficient; scales by deterministic evaluation demand; must provide a safe, explainable result or explicit restriction.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Protects policy evaluation and privileged rule activation; audits material evaluation and changes; consumes active rule configuration; exposes evaluation failures, version distribution, and anomaly condition.
- **Business Rules Owned / Not Owned:** Owns deterministic rule evaluation; does not own AI inference, authorization identity proof, operational evidence, or agency procedure approval.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is authoring approval, controlled activation, evaluation, rollback, and retirement; extension is limited to approved rules; constrained by no-autonomy and dual control; future policies require owner approval.

## 10.19 CMP-018 — Emergency Coordination Component

- **Purpose / Responsibilities:** Support separately eligible, minimum-necessary, human-led emergency coordination with restricted status, acknowledgement, recovery, and manual fallback.
- **Consumes / Produces:** Consumes authorized incident/workflow context, eligibility, restricted identity/access, policy, permitted spatial/asset context, notification, and condition information; produces restricted coordination state and enhanced accountability facts.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003–005, CMP-008–009, CMP-012–013, CMP-017, CMP-020–021; depends on every required eligibility condition being active.
- **State Ownership / Authority Boundary:** Owns restricted coordination state; does not own emergency dispatch, clinical information, route-clearance decision, signal control, agency command, or external action.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Defaults to unavailable/restricted and directs users to existing manual procedure when any required condition fails; scales only within approved restricted usage; must remain safe to disable.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Applies strongest role, purpose, agency, assignment, geography, session, classification, and audit controls; audits all material access and actions; consumes eligibility configuration; exposes restricted-condition and fallback state.
- **Business Rules Owned / Not Owned:** Owns eligibility execution and restricted coordination lifecycle rules; does not own emergency SOP approval, dispatch rules, route control, or patient data rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is disabled-by-default, approved enablement, eligible operation, restriction/recovery, and controlled withdrawal; extension is limited to approved emergency scope; constrained by manual fallback; future use requires separate approval.

## 10.20 CMP-019 — Integration Component

- **Purpose / Responsibilities:** Qualify and isolate approved external information before it is used within authoritative operational or governance responsibilities.
- **Consumes / Produces:** Consumes approved external information, source registration, trust, classification, quality, and policy context; produces normalized qualified context, provenance, freshness, source health, and rejection/quarantine outcome.
- **Collaborating Components / Dependencies:** Collaborates with CMP-003, CMP-004, CMP-006–008, CMP-010, CMP-012–013, CMP-016, CMP-018, CMP-020–021; depends on approved source ownership and configuration.
- **State Ownership / Authority Boundary:** Owns source qualification and integration condition; does not own external source data, verified event state, workflow state, policy content, or field/control authority.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Rejects, quarantines, or qualifies invalid, untrusted, duplicate, stale, or unavailable input; scales by approved source and information volume; must contain a failing source from core state.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Enforces source identity, purpose, minimum information use, and permitted destination; audits material transfer and exception; consumes source configuration; exposes source health, lag, quality, and rejection condition.
- **Business Rules Owned / Not Owned:** Owns source admission, qualification, and normalization rules; does not own incident verification, workflow, analytic method, or agency source authority.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is source approval, onboarding, qualification, active use, suspension, and retirement; extension is limited to approved sources; constrained by no-control path; future integration requires review.

## 10.21 CMP-020 — Monitoring Component

- **Purpose / Responsibilities:** Provide governed visibility of service, source, workflow, policy, model, security, and support condition.
- **Consumes / Produces:** Consumes approved health, freshness, quality, alert, workload, security, and correlation signals; produces condition, alert, operational-impact, and support-routing context.
- **Collaborating Components / Dependencies:** Collaborates with every component, principally CMP-009, CMP-012–013, CMP-016, CMP-019, and CMP-021; depends on approved emitted condition facts and routing configuration.
- **State Ownership / Authority Boundary:** Owns condition and support-visibility state; does not own business state, workflow action, security decision, or incident management.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Declares monitoring blind spot, stale condition, or alert limitation; scales by signal and support demand; must not claim health without supporting condition evidence.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Restricts diagnostic visibility by role and purpose; audits sensitive condition access and changes; consumes alert configuration; observes its own coverage, freshness, and routing condition.
- **Business Rules Owned / Not Owned:** Owns health/condition correlation and alerting rules; does not own domain policy, access decisions, or operational resolution rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is condition definition, activation, monitoring, escalation, review, and retirement; extension is limited to approved signals; constrained by privacy minimization; future alerts require owner governance.

## 10.22 CMP-021 — Logging Component

- **Purpose / Responsibilities:** Preserve protected diagnostic records and correlation context for approved support and investigation.
- **Consumes / Produces:** Consumes structured diagnostic facts, identity/access context, redaction, classification, retention, and correlation information; produces protected diagnostic record, redaction status, inquiry result, and retention/hold context.
- **Collaborating Components / Dependencies:** Collaborates with every component through approved diagnostic facts, principally CMP-013 and CMP-020; depends on authorization, redaction policy, retention configuration, and condition visibility.
- **State Ownership / Authority Boundary:** Owns diagnostic-record responsibility; does not own audit evidence, event/workflow state, business decisions, or unrestricted sensitive information.
- **Failure Behaviour / Scaling Characteristics / Availability Expectations:** Declares diagnostic blind spot or restricted availability and prioritizes approved critical records; scales by diagnostic volume and authorized investigation demand; must not use unredacted data as a recovery shortcut.
- **Security Boundary / Audit Requirements / Configuration Ownership / Observability:** Prohibits secrets, raw video, prohibited identifiers, patient/clinical content, and unmasked sensitive payloads; audits sensitive inquiry/export; consumes retention/redaction configuration; exposes ingestion, redaction, and retention condition.
- **Business Rules Owned / Not Owned:** Owns diagnostic capture, minimization, redaction, and protected inquiry rules; does not own audit-retention, business lifecycle, or operational authority rules.
- **Lifecycle / Extension Points / Constraints / Future Evolution:** Lifecycle is approved capture, protection, retention/hold, inquiry, disposition, and remediation; extension is limited to approved diagnostic classes; constrained by minimization; future retention or content needs governance.

## 10.23 Component Profile Traceability Statement

Every profile in this section expands exactly one catalogue component and therefore exactly one approved Logical Service. The profiles retain the purpose, ownership, non-responsibility, authority, safe-failure, security, audit, configuration, observability, and governance constraints established in TMA-ARCH-001 and TMA-ARCH-002. No profile authorizes new capability, technology selection, deployment arrangement, external control, or change to approved architecture decisions.
