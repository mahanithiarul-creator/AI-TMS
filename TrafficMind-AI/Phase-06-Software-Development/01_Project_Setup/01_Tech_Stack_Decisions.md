# TrafficMind AI - Technology Stack Decisions

**Document ID:** TMA-DEV-001  
**Phase:** Phase 06 - Software Development (Project Setup)  
**Status:** Approved  

This document formalizes the concrete technology choices mapped against the logical component boundaries defined in TMA-ARCH-003.

## 1. Repository Structure
- **Architecture:** Monorepo approach (using NPM Workspaces) to seamlessly manage shared interfaces, contracts, and cross-cutting libraries.
- **Location:** `Phase-06-Software-Development` serves as the root of the workspace.

## 2. Frontend Stack (`02_Frontend`)
Maps to: CMP-001 Dashboard
- **Framework:** React
- **Language:** TypeScript (for strong contract enforcement)
- **Build Tool:** Vite (for rapid development and optimized builds)
- **Styling:** CSS Modules / Vanilla CSS (adhering to project aesthetics constraints)

## 3. Backend Stack (`03_Backend`)
Maps to: Gateways (CMP-015, CMP-016), Orchestration (CMP-004, CMP-005, CMP-017, CMP-018)
- **Core Orchestration Framework:** Node.js with Express or NestJS (TypeScript)
- **AI/Data-heavy Services Framework:** Python with FastAPI (for seamless integration with AI libraries)
- **Event Contracts:** AsyncAPI or strict TypeScript interfaces for inter-component messaging.

## 4. Database & State (`04_Database`)
Maps to: State persistence across all components
- **Primary Relational Store:** PostgreSQL (for robust transactional guarantees and ACID compliance).
- **Caching & Ephemeral State:** Redis (for session state, materialized views, and rate-limiting).

## 5. AI Stack (`05_AI`)
Maps to: Analytics (CMP-010), Reporting (CMP-011), Search (CMP-014), AI Governance Gateway (CMP-016)
- **Core Languages:** Python
- **Frameworks:** PyTorch / TensorFlow (for local/edge models)
- **Integration:** APIs for Large Language Models (LLMs) and advanced Computer Vision platforms as needed.

## 6. Integration & Choreography (`06_Integration`)
Maps to: Integration Component (CMP-019), Cross-Component Event Propagation
- **Event Broker:** Apache Kafka (or RabbitMQ depending on deployment scale). Selected for high-throughput, durable event streaming to satisfy the Event Choreography and Asynchronous Boundaries constraints.

## 7. Testing & Quality (`07_Testing`)
- **Unit Testing (JS/TS):** Vitest / Jest
- **Unit Testing (Python):** Pytest
- **E2E Testing:** Playwright / Cypress

## 8. Foundational Capabilities
Maps to: Auth (CMP-002, 003), Audit (CMP-013), Monitoring (CMP-020), Logging (CMP-021)
- **Auth Provider:** TBD (OIDC compliant e.g., Keycloak or Auth0)
- **Observability:** OpenTelemetry standards for tracing, Prometheus for metrics, and ELK/Grafana stack for logging/visualization.
