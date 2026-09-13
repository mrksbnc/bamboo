# Security Policy

## Supported Versions

Bamboo is currently pre-1.0 and under active development. Security fixes are applied to the latest published version of each package on npm.

| Package                  | Supported                 |
| ------------------------ | ------------------------- |
| `@workspace/bamboo-core` | Latest release only       |
| `@mrksbnc/bamboo-vue`    | Latest release only       |
| `@mrksbnc/bamboo-docs`   | Not published (docs site) |

Older releases do not receive security patches. Please always upgrade to the latest version before reporting an issue.

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.**

If you discover a security vulnerability in Bamboo, please report it privately using one of the following methods:

1. **GitHub Security Advisories (preferred)**: Use the ["Report a vulnerability"](https://github.com/mrksbnc/bamboo/security/advisories/new) button under the Security tab of this repository. This creates a private advisory visible only to maintainers until it's resolved.
2. **Direct contact**: Reach out to the maintainer [**@mrksbnc**](https://github.com/mrksbnc) via GitHub with details of the issue.

When reporting, please include as much of the following as you can:

- A description of the vulnerability and its potential impact
- Steps to reproduce, or a minimal proof-of-concept
- The affected package(s) and version(s)
- Any relevant logs, stack traces, or screenshots

## What to Expect

- **Acknowledgment**: We aim to acknowledge new reports within a few days.
- **Assessment**: We will investigate and confirm the issue, and may ask follow-up questions.
- **Resolution**: If confirmed, we will work on a fix and aim to release a patched version as soon as reasonably possible, coordinating disclosure timing with you.
- **Credit**: With your permission, we're happy to credit you in the release notes or advisory once the fix ships.

Please give us a reasonable amount of time to address the issue before disclosing it publicly.

## Scope

This policy covers the packages maintained in this repository:

- `@workspace/bamboo-core`
- `@mrksbnc/bamboo-vue`

Issues in third-party dependencies should generally be reported upstream to the relevant project, though we welcome a heads-up so we can track and update our dependency versions accordingly.

## Out of Scope

The following are generally not considered security vulnerabilities for this project:

- Issues requiring physical access to a user's device
- Vulnerabilities in outdated, unsupported versions of Bamboo
- Theoretical vulnerabilities without a practical, demonstrable impact
- Missing security headers or hardening suggestions on the documentation site (`bamboo-docs`) that don't lead to a concrete exploit

Thank you for helping keep Bamboo and its users safe.
