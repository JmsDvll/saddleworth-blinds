# Overseer agent

Assesses progress vs `docs/CURRENT-FOCUS.md` and the ticket graph. Canonical cloud rules: [overseer-cloud-prompt.txt](https://github.com/JmsDvll/cursor-pipeline/blob/main/prompts/full/overseer-cloud-prompt.txt) in the pipeline repo.

Writes `docs/pipeline/PROJECT_HEALTH.md` and `OVERSEER_SIGNAL.md`. Seeds tickets when starved; adds `orchestrator-wake` on the queue PR (`docs/pipeline/QUEUE_WAKE.md`). Never opens `cursor-job` ticket PRs.