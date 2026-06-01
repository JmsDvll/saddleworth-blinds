# AGENTS.md

## Cursor pipeline

Cloud agents use GitHub labels and draft PRs. Canonical rules live in **[JmsDvll/cursor-pipeline](https://github.com/JmsDvll/cursor-pipeline)** (`prompts/full/`, `RUNBOOK.md`).

Role stubs: `.cursor/pipeline/` (`worker.md`, `qa.md`, `orchestrator.md`). Queue rules: `docs/pipeline/RUNBOOK-LOCAL.md`.

**Flow:** Orchestrator opens draft → Worker implements → QA **merges and deletes branch** → Orchestrator picks next ticket. Director only needed on `blocked-human`.

### Pipeline labels

| Label | Meaning |
|-------|---------|
| `cursor-job` | Pipeline-managed PR — Worker active |
| `fix-required` | QA sent back — Worker must fix |
| `worker-retry` | Stale draft — Worker resumes |
| `qa-retry` | Worker handoff or stale ready PR — QA reviews |
| `qa-passed` | QA approved (before merge) |
| `blocked-human` | Director decision — Worker stops until unblock |

### Branch rule (pipeline)

All pipeline Workers use:

`cursor/<ticket-id>-<short-slug>`

Cloud runs append a suffix when assigned (e.g. `cursor/T1.2-api-skeleton-d656`). One ticket = one PR. Do not push to `main`.

**Director visibility:** `docs/tickets/_director/INBOX.md` (append-only) + GitHub notifications. Use `blocked-human` on the PR when work must stop. Do not rely on Cursor automation chat alone — see hub `docs/pipeline/DIRECTOR_INBOX.md` in [JmsDvll/cursor-pipeline](https://github.com/JmsDvll/cursor-pipeline/blob/main/docs/pipeline/DIRECTOR_INBOX.md).