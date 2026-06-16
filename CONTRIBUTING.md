# Contributing

## Development setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app must work without paid API keys. AI providers are optional; deterministic
fallbacks should remain available for local development and tests.

## Quality gates

Run these before opening a pull request:

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Commit standard

Write commit messages in English and use Conventional Commits:

```text
feat(draft): update recommendations when enemy picks change
fix(report): respect support role metrics
chore(repo): add CI and security policy
docs(product): document patch-aware MVP scope
```

Use Spanish for product research notes when they are written for Maikel or the
LATAM audience. Use English for repository operations, commit messages, CI,
security, and engineering documentation.

## Product rules

Keep the coach educational and compliant:

- no cheats, memory reading, macros, or input automation;
- no boosting, smurfing, account sharing, gambling, or Steam market automation;
- no credential storage;
- separate verified facts from model-generated interpretation;
- warn users when patch data may be stale.
