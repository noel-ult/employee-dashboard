# employee-dashboard: verification and operations

Reviewed against [default-branch commit 2bafd182df1b](https://github.com/noel-ult/employee-dashboard/commit/2bafd182df1b1d8483982ab31a3c72be7b6358ff) on 2026-10-28. Start with the [developer guide](../README.md) for installation and architecture, and the [source reference](REFERENCE.md) for exact scripts, configuration readers, routes, and source locations.

## Browser employees

Load remote users, add a local employee, navigate away/back, and reload. Test a blocked sample API separately from localStorage persistence.

These are acceptance scenarios for a maintainer to run in the documented environment. Their inclusion is not a claim that live integrations or production credentials were tested during this documentation update.

## Deployment and failure diagnosis

Serve build/ with SPA fallback for /employee-form. Browser records belong to the origin; check mount-time storage effects if a reload loses them.

## Maintaining the contract

When behavior changes, update the guide and examples in the same PR. Check the entry point and working directory before copying commands. Use the linked source readers to distinguish build-time configuration from process environment. For failures, capture the first application error, runtime version, selected mode, and redacted configuration names before later proxy or port errors.

Keep changes tied to evidence: a declared command is not proof it passes, a process health response is not a successful end-to-end workflow, and a historical report describes its own revision. Record actual check results and any unavailable external services in the PR.
