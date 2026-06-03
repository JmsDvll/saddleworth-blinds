# Pipeline queue PR (Orchestrator wake)

**PR:** #11 — [Pipeline queue (orchestrator wake)](https://github.com/JmsDvll/saddleworth-blinds/pull/11)

Bootstrap keeps one **draft PR** open (branch `cursor/pipeline-queue-wake`, **no** `cursor-job` label).

Doorbell labels on **this PR only** (see hub `docs/pipeline/DOORBELL_LABELS.md`):

| Label | Direction |
|-------|-----------|
| **`orchestrator-wake`** | Overseer → Orchestrator (open next ticket) |
| **`overseer-wake`** | Orchestrator → Overseer (queue empty — seed more work) |
| **`custodian-wake`** | Orchestrator → Custodian (repo messy — tidy up) |

- **Worker / QA never implement this PR** — it is only a doorbell.
- **Never** add `cursor-job` to this PR.

Matches Cursor UI: label triggers on **pull requests** (`pullRequests: true`).