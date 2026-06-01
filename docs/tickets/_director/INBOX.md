# Director inbox

Append-only. Pipeline agents write here when **you** must see something. Prefer **GitHub mobile notifications** — not Cursor automation run chat.

**Format:** append one line at the bottom (newest last):

```text
YYYY-MM-DD HH:MM UTC | severity | role | ticket-id | one-line summary
```

**Severity:** `blocked` (work stopped — PR should have `blocked-human`) · `decision` (need your choice) · `fyi` (no action required)

Optional bullets under the line (PR link, A/B options). Detail for blocks: `docs/tickets/_director/{ticket-id}-blocked.md`.

Hub rules: [DIRECTOR_INBOX.md](https://github.com/JmsDvll/cursor-pipeline/blob/main/docs/pipeline/DIRECTOR_INBOX.md) in `JmsDvll/cursor-pipeline`.