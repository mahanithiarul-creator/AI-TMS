# TrafficMind AI - Project Foundation Guidelines

**Document ID:** TMA-DEV-003  
**Phase:** Phase 06 - Software Development  
**Status:** Approved Baseline  

This document codifies the strict engineering standards, conventions, and operational strategies for the TrafficMind AI project. Every line of code written in this monorepo must adhere to these guidelines to ensure alignment with `TMA-ARCH-003`.

---

## 1. Monorepo & Repository Structure
The project utilizes an NPM Workspace monorepo to centralize dependency management and allow seamless sharing of schemas and interfaces without coupling deployment artifacts.

### 1.1 Root Folders
- `01_Project_Setup/`: Engineering documentation and ADRs.
- `02_Frontend/`: UI applications (e.g., Dashboard).
- `03_Backend/`: Core domain services, orchestration engines, and API gateways.
- `04_Database/`: Shared migrations and seed data.
- `05_AI/`: Machine learning inference pipelines and models.
- `06_Integration/`: Infrastructure as Code for external systems (Kafka, legacy adapters).
- `07_Testing/`: End-to-end integration test suites across multiple components.
- `08_Deployment/`: Kubernetes manifests and CI/CD pipelines.

### 1.2 Frontend Structure (`02_Frontend/dashboard`)
Strictly adheres to Clean Architecture:
- `src/core/`: Domain entities and pure business rules. No framework dependencies.
- `src/application/`: Use cases mapping to user interactions.
- `src/infrastructure/`: API clients, WebSockets, external integrations.
- `src/presentation/`: React components, views, and state management hooks.

### 1.3 Backend Structure (`03_Backend/<service-name>`)
Enforces Domain-Driven Design (DDD):
- `src/domain/`: Entities, Value Objects, Domain Events, and Repository Interfaces.
- `src/application/`: Command/Query handlers (CQRS) and orchestration logic.
- `src/infrastructure/`: Concrete database repositories, Kafka producers/consumers.
- `src/presentation/`: REST Controllers, gRPC endpoints.

### 1.4 Shared Libraries (`03_Backend/shared`)
To prevent logic duplication while maintaining component isolation, only purely structural and cross-cutting concerns may be shared:
- `contracts/`: TypeScript interfaces and AsyncAPI definitions for events.
- `logger/`: The standardized structured logger wrapper.
- `auth-middleware/`: Standardized JWT validation for API entry points.

---

## 2. Source Control & Versioning

### 2.1 Git Workflow & Branching
- **Trunk-Based Development:** All active development happens on short-lived feature branches branching from and merging into `main`.
- **Branch Naming:** `type/TMA-<issue-id>-short-description` (e.g., `feat/TMA-401-incident-creation`).
- **Commit Standards:** Conventional Commits (e.g., `feat: add anomaly detection`, `fix: resolve stale kafka offset`).

### 2.2 Versioning Strategy
- **Semantic Versioning (SemVer):** `MAJOR.MINOR.PATCH` applied strictly to API contracts and shared libraries.
- API endpoints MUST be versioned in the URI (e.g., `/api/v1/incidents`).

---

## 3. Operations & Configuration

### 3.1 Configuration & Environments
- **12-Factor App:** Configuration is injected exclusively via Environment Variables. No hardcoded secrets.
- **Environments:** `local`, `development` (integration), `staging` (pre-prod matching), `production`.
- Component `CMP-012 Configuration` acts as the source of truth for dynamic runtime configurations, while structural keys are injected via K8s ConfigMaps/Secrets.

### 3.2 Logging Strategy
- **Format:** Structured JSON exclusively.
- **Output:** `stdout` and `stderr` only. Log shipping to `CMP-021 Logging` is handled by the infrastructure layer (e.g., FluentBit/Promtail).
- **Correlation:** Every log MUST include a `traceId` (OpenTelemetry standard) to track requests across the event-driven architecture.
- **Levels:** `DEBUG` (Local only), `INFO` (Standard operational facts), `WARN` (Degradation), `ERROR` (Action required), `FATAL` (System halting).

### 3.3 Error Handling Strategy
- **Exceptions:** Use domain-specific Exceptions within the Application and Domain layers. Do not throw HTTP-specific errors from core logic.
- **API Responses:** All REST APIs MUST return errors using **RFC 7807 Problem Details for HTTP APIs**.
- **Eventual Consistency Failures:** If an asynchronous event handler fails, it MUST NOT crash the process. It must log the error, increment metrics, and route the failed event to a Dead Letter Queue (DLQ).

---

## 4. Coding Standards & Naming Conventions

### 4.1 Ubiquitous Language
- Class names, variables, and database tables MUST use the exact terminology defined in the logical architecture (e.g., `Incident`, `Asset`, `Anomaly`, `SignalPhase`). Avoid synonyms like `Issue`, `Device`, or `Light`.

### 4.2 Naming Conventions (TypeScript / JS)
- **Files/Folders:** `kebab-case.ts` (e.g., `create-incident.use-case.ts`).
- **Classes/Interfaces:** `PascalCase` (e.g., `IncidentRepository`).
- **Methods/Variables:** `camelCase` (e.g., `processAnomaly()`).
- **Constants:** `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`).
- **Interfaces:** Prefix with `I` is prohibited; rely on module boundaries (e.g., `export interface Repository` instead of `IRepository`).

### 4.3 SOLID & Clean Code
- **Single Responsibility:** Classes should have one reason to change.
- **Dependency Inversion:** High-level policy must not depend on low-level details. Inject dependencies (Interfaces) into application services.
- **No Magic Numbers:** All constants must be explicitly defined and named.
- **Comments:** Explain *why*, not *what*. Code should be self-documenting through expressive naming.
