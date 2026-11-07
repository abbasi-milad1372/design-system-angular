# DevOps guide

## Scope and safety

- Files here and `.gitlab-ci.yml` control container build and deployment. Treat
  registry hosts, certificates, image tags, network names, and deployment
  inventory as operationally sensitive.
- Never commit tokens, generated `.npmrc` content, private keys, passwords, or
  expanded CI variables.
- Do not alter release rules, registry targets, certificates, or production
  topology unless the task explicitly concerns deployment and the intended
  environment is clear.

## Build contract

- CI release builds are triggered by version-like Git tags and build through
  `devops/ci/Dockerfile`.
- Keep the Docker build aligned with Angular output under `dist/admin-panel`.
- Preserve reproducible installs with `package-lock.json`; do not switch package
  managers casually.
- Validate YAML and Docker syntax after changes. For shell snippets, retain
  noninteractive behavior and quote variables that may contain separators or
  spaces.

## Review

For deployment changes, state which environments are affected, which variables
are required, and how rollback works. Avoid executing a deployment merely to
validate configuration unless the user explicitly requests it.
