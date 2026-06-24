<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project
This repository is for an app currently called **Unbiased News**.

The app’s purpose is to help users understand a news topic by synthesizing coverage from multiple sources into the most neutral, evidence-based summary possible, while clearly showing the original source links for direct reading.

## Core product principles
- Transparency over authority.
- Show sources clearly.
- Never imply perfect objectivity.
- Preserve disagreement and uncertainty when sources conflict.
- Prefer simple, maintainable architecture over premature scale optimization.
- Build the smallest useful MVP first.

## MVP definition
The MVP should support a single-topic flow:
1. ingest a small set of sample or limited-source articles,
2. normalize and store them,
3. generate one topic-level synthesis,
4. render a topic page that shows:
   - AI-generated summary,
   - what sources broadly agree on,
   - where sources differ,
   - what remains unclear,
   - direct source links.

## Non-goals for MVP
Do not build these unless explicitly requested:
- user accounts
- personalization
- push notifications
- full-scale source crawling
- political bias scoring systems
- complex credibility-ranking engines
- mobile app
- browser extension
- social features

## Product tone
The product should feel:
- calm
- clear
- trustworthy
- plain-language
- neutral
- transparent

## UX priorities
- The reader should understand the page in under 10 seconds.
- Source links must be prominent.
- AI output must always be clearly labeled.
- The UI must not hide uncertainty.
- The experience should be clean and readable, not flashy.

## Engineering priorities
- Keep the architecture simple.
- Prefer one vertical slice at a time.
- Avoid over-engineering.
- Avoid unnecessary abstractions until the MVP proves them necessary.
- Make code readable for a solo builder.
- Favor predictable structure over cleverness.

## Data and trust rules
- Every generated topic summary must be traceable to a known set of source articles.
- Never present AI output without listing the source articles used.
- If source disagreement is high, the summary should say so.
- If too few sources are available, the UI should communicate low confidence or insufficient coverage.
- Do not use absolute language like “the truth” or “fully unbiased.”
- Use language like:
  - “summary based on available sources”
  - “points of agreement”
  - “areas of disagreement”
  - “open questions”
  - “limited source coverage”

## Coding workflow rules
At the start of every new session:
1. Read `AGENTS.md`.
2. Read `PLANNING.md`.
3. Read `TASKS.md`.
4. Summarize the current state before making changes.

Before coding:
- inspect the existing codebase first
- confirm assumptions from the current repository structure
- prefer planning before implementation
- break work into small verifiable tasks

During work:
- complete one task at a time
- keep changes tightly scoped
- update `TASKS.md` when tasks are completed
- add newly discovered tasks to `TASKS.md` when needed
- call out unclear product or technical decisions instead of guessing

Before making major architectural changes:
- explain the reason
- explain tradeoffs
- propose the simplest viable option first

## Implementation constraints
- Build for the MVP first.
- Prefer mocked or limited inputs before full automation.
- Keep ingestion simple at first.
- Start with a single-topic workflow before multi-topic expansion.
- Keep the UI minimal and understandable.
- Prioritize source transparency and trust over cosmetic polish.

## File and code standards
- Prefer small, readable modules.
- Keep names descriptive.
- Avoid giant files where possible.
- Add comments only where they improve clarity.
- Do not introduce large dependencies without a clear need.
- Reuse existing project patterns when sensible.

## Testing and verification
For each meaningful implementation step:
- verify the feature actually works
- check basic error handling
- confirm the UI still communicates source transparency
- confirm AI-generated text is labeled clearly
- confirm links to sources are preserved

## What to do when context is unclear
If requirements are ambiguous:
- do not invent product decisions silently
- list the ambiguity
- propose 1–3 reasonable options
- recommend the simplest option for MVP

## Session behavior
Unless explicitly told otherwise:
- plan first
- implement second
- explain changes clearly
- keep the app aligned to the MVP and trust principles above