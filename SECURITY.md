# Security Policy

## Supported project state

This repository is an MVP. Security fixes should target the current `main`
branch unless a stable release branch exists later.

## Secrets and credentials

Never commit API keys, OAuth secrets, cookies, Steam credentials, deployment
tokens, `.env.local`, or ad-hoc credential dumps. Local credential notes such as
`git .txt` and `git .rar` are ignored intentionally and must stay outside Git.

If a credential was pasted into a local file, chat, terminal, or remote service:

1. Rotate or revoke it in the provider dashboard.
2. Replace it in Vercel, GitHub Actions, or the local `.env.local`.
3. Confirm the old value no longer works.
4. Check `git log --all -- <file>` before assuming it was never committed.

Do not store user passwords, Steam credentials, browser cookies, or session
tokens from players. Steam login must use OpenID and public identifiers only.

## Product safety boundaries

The project must not implement cheats, memory reading, input automation,
matchmaking bots, boosting flows, account sharing, gambling, market automation,
or overlays that provide prohibited real-time advantage.

Allowed product behavior:

- Patch-aware explanations based on public data.
- Manual draft preparation and post-match coaching.
- Replay and match summaries from public APIs.
- Educational warding, timing, itemization, and role guidance.

## Reporting a vulnerability

Open a private security advisory on GitHub if available, or contact the
maintainer directly with:

- affected route or file;
- steps to reproduce;
- expected impact;
- whether any secret or user data was exposed.
