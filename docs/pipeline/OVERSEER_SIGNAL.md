# Overseer signal (Orchestrator)

> Written by Pipeline Project Overseer. Orchestrator reads when `expires` is in the future. Do not edit by hand unless you are the Director.

generated: YYYY-MM-DDTHH:MM:SSZ
state: STARVED
priority: seed-and-open
expires: YYYY-MM-DDTHH:MM:SSZ

actions:
  - open draft for T0.0 with cursor-job if no open cursor-job PR
  - tickets seeded this run: T0.0

notes:
  - (one line justification)