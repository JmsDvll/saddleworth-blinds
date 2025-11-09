<!-- f924d41a-ba68-421c-92d5-b8bf5ccf48e4 ecb851b2-0f34-4ffb-92b0-a581a243a38f -->
## Guardrails: Quality Gates (Persistent)

- Husky pre-commit hook MUST run `npm run lint` with `--max-warnings 0` to block any commit introducing violations.
- Hook location: `.husky/pre-commit`.
- CI/CD or manual deploys MUST pass `npm run lint` and `npm run build`.

### Implementation Notes

- Installed Husky as a dev dependency and initialized hooks.
- Pre-commit script content:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

- If working on Windows/PowerShell, Husky still executes the POSIX shell script when Git runs hooks.

## Deferred QA Backlog (Circle Back Later)

- Visual regression: Playwright + Percy snapshots on key pages/components.
- Accessibility: axe or Pa11y automated checks for critical flows.
- Performance: Lighthouse budgets (LCP, CLS, TBT) and failing thresholds.
- Broken links: link checker against local preview or staging.


