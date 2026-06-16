# AI Model Strategy

Last reviewed: 2026-06-16.

## Recommendation

Use a provider abstraction and route requests by difficulty:

- Default report writing: DeepSeek V4 Flash in non-thinking mode or Gemini
  Flash-Lite, whichever wins the quality/latency benchmark.
- Better reasoning for premium reports: DeepSeek V4 Flash thinking mode,
  DeepSeek V4 Pro, or OpenAI `gpt-5.4 mini`, depending on latency,
  availability, and data policy.
- Highest-value coaching, long replay summaries, and internal evaluation:
  OpenAI `gpt-5.4` or Claude Sonnet-class model.

Do not hardcode product quality to a single vendor. The coach should keep a
deterministic fallback and record which model generated the prose.

## Practical routing

| Use case | Suggested tier | Why |
| --- | --- | --- |
| Free user report | Cheap fast model | The verified facts come from code; AI only improves prose. |
| Paid report | Reasoning mini model | Better prioritization and clearer coaching without frontier cost. |
| Coach/admin review | Strong model | Lower volume, higher need for judgment and synthesis. |
| Patch research ingestion | Strong model + manual review | Patch facts must be verified before becoming recommendations. |

## Current pricing notes

- DeepSeek lists V4 Flash at $0.14 / 1M cache-miss input tokens and $0.28 / 1M
  output tokens. V4 Pro is listed at $0.435 / 1M cache-miss input tokens and
  $0.87 / 1M output tokens.
- OpenAI lists `gpt-5.4 mini` at $0.75 / 1M input tokens and $4.50 / 1M output
  tokens, with larger models costing more.
- Google lists Flash/Lite tiers as low as $0.05-$0.30 / 1M input tokens and
  $0.20-$2.50 / 1M output tokens depending on model and tier.
- DeepSeek is usually highly competitive on price for reasoning workloads, but
  production use should be tested for latency, rate limits, privacy terms, and
  regional availability before becoming the only provider.
- Claude Sonnet-class models are useful for quality baselines, but should be
  reserved for paid or internal flows if cost matters.

Prices change often. Re-check official pricing before launch or monetization
changes.

## Evaluation before switching

Create a 30-match benchmark covering carry, mid, offlane, soft support, and hard
support. Score every model on:

- factual discipline: no invented timings/items/events;
- role awareness;
- actionability of the coaching plan;
- Spanish clarity for LATAM users;
- latency;
- cost per completed report;
- fallback behavior when the model fails.
