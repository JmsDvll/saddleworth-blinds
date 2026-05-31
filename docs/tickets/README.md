# Tickets

Pipeline work is tracked under `docs/tickets/` (phases, audit notes).

- Orchestrator picks the next ticket from here.
- One ticket → one branch `cursor/<ticket-id>-<short-slug>` → one PR with label `cursor-job`.

See **[JmsDvll/cursor-pipeline](https://github.com/JmsDvll/cursor-pipeline)** `RUNBOOK.md` for the full loop.
