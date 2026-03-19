# Sprint 0 — Readiness Checklist V6.1

**Project:** {PROJECT_NAME}
**Goal:** Eliminate blockers before Sprint 1.

---

## BLOCKER — Cannot work without these

| # | What | Who | Time |
|---|------|-----|------|
| B-01 | Git init + `.gitignore` + `develop` branch | SRE / #1 | 15 min |
| B-02 | `.env.example` → `.env`, dev values filled | Backend + SRE | 20 min |
| B-03 | DB runs (Docker or native), migrations done, seed data | Backend | 30 min |
| B-04 | Test framework + 1 smoke test (`npm test` → 1 passed) | QA + Backend | 30 min |
| B-05 | CI pipeline: lint + test + build on push | SRE | 60 min |
| B-06 | Security: no secrets in code, rate limiting, input validation, HTTPS, CORS | #1 + QA | 20 min |

**Lesson:** EDMI had 75 components and 0 tests. MONO got tests on session 57. BauPreis found SQL injection AFTER deploy.

---

## IMPORTANT — Needed for stable work

| # | What | Time |
|---|------|------|
| I-01 | ESLint + Prettier configured | 15 min |
| I-02 | npm/pnpm connectivity (`.npmrc` → `prefer-ipv4=true` if hanging) | 10 min |
| I-03 | Docker images pulled, `docker compose up` works | 30 min |
| I-04 | External APIs tested: GET → 200 OK, rate limits known | 30 min |
| I-05 | Every credential from CREDENTIALS.md: VERIFIED / EXPIRED / MISSING | 20 min |

---

## Execution Order

```
B-01 (git) ──────────────────────┐
I-02 (npm) ──────────────────────┤
B-02 (.env) ─────────────────────┤
I-01 (lint) ─────────────────────┤
                                 ▼
B-03 (DB) ← needs B-02, I-03    │
I-03 (Docker) ──────────────────►│
I-04 (APIs) ← needs B-02        │
I-05 (Credentials) ← needs B-02 │
                                 ▼
B-04 (Tests) ← needs I-02       │
                                 ▼
B-05 (CI) ← needs B-01, B-04, I-01
                                 ▼
B-06 (Security) ← needs B-04, B-05
                                 ▼
                          READY FOR SPRINT 1
```

**Total estimate: ~5 hours**

---

## DEFERRED — Does not block Sprint 1

- D-01: Push notifications (Firebase/APNs) → Sprint 2+
- D-02: SMS provider → dev: console log
- D-03: Email → dev: Mailtrap
- D-04: Error tracking (Sentry) → staging/production
- D-05: CD pipeline (auto-deploy) → Sprint 3+
- D-06: Legal (GDPR, Impressum) → lawyer
