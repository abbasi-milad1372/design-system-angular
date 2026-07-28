# Agent context

This directory stores durable repository context that is useful across scoped
tasks. It is intentionally referenced by the root `AGENTS.md`, so agents should
read it even though the directory is hidden.

- `project-map.md` describes architecture, dependency flow, and high-risk files.
- Executable instructions live in the nearest `AGENTS.md`; those scoped files
  take precedence over the architectural notes here.

Keep this directory source-controlled. Do not put secrets, generated reports,
build artifacts, or machine-specific state here.
