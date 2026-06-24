# TASKS.md

## Rules
- Work one task at a time.
- Mark tasks complete immediately after finishing them.
- Add newly discovered tasks when needed.
- Do not start broad refactors unless explicitly approved.
- Keep MVP scope tight.

---

## Milestone 1: Repo assessment and MVP alignment
- [x] Inspect the repository and identify the current tech stack.
- [x] Document the app structure and key files.
- [x] Identify what already exists versus what must be built.
- [x] Confirm whether the existing stack is suitable for the MVP.
- [x] Recommend the smallest realistic architecture based on the current repo.
- [x] Confirm the first vertical slice to implement.

## Milestone 2: Project scaffolding and core docs
- [ ] Create or refine `CLAUDE.md`.
- [ ] Create or refine `PLANNING.md`.
- [ ] Create or refine `TASKS.md`.
- [ ] Document setup/run instructions if missing.
- [ ] Identify the minimum environment/config needed for local development.

## Milestone 3: Article input for one topic
- [x] Choose the MVP input strategy for articles: mocked data (`lib/data/sample-topic.ts`, fictional sources).
- [x] Create a normalized article schema (`lib/types.ts`).
- [x] Build a simple way to load article records for one topic.
- [x] Store article metadata in the simplest viable format (static TS module).
- [ ] Handle missing metadata gracefully. (basic optional fields handled in UI; not stress-tested)
- [x] Prevent obvious duplicates in the sample topic set.

## Milestone 4: Topic summary generation
- [x] Define the AI summary output structure (`TopicSummary` in `lib/types.ts`).
- [x] Implement summary generation for one topic (`lib/synthesis.ts`, Claude via `@anthropic-ai/sdk`).
- [x] Generate: neutral summary, points of agreement, points of disagreement, unresolved questions.
- [x] Ensure output is tied to a known source set (`sourceArticleIds`).
- [x] Add clear labeling that the output is AI-generated.
- [x] Add fallback behavior if summary generation fails.

## Milestone 5: Topic page UI
- [x] Create a topic page or topic view for the first sample issue (`app/topic/page.tsx`).
- [x] Display the topic title and summary prominently.
- [x] Display agreement points clearly.
- [x] Display disagreement points clearly.
- [x] Display unresolved questions clearly.
- [x] Display the source list with direct links.
- [x] Display publication name and publish date if available.
- [x] Add a transparency note explaining how the summary was produced.

## Milestone 6: Trust and edge cases
- [x] Add a state for too few sources.
- [ ] Add a state for missing article content.
- [x] Add a state for failed AI generation.
- [x] Add an empty state if no topic data exists.
- [x] Ensure the UI communicates uncertainty honestly.

## Milestone 7: Cleanup and verification
- [ ] Review file structure for clarity.
- [ ] Remove unused code and dead paths introduced during MVP work.
- [ ] Verify the first vertical slice works end-to-end.
- [ ] Check readability and source-link visibility.
- [ ] Confirm the MVP still matches project goals.
- [ ] Note recommended next steps after the MVP is working.

## Future tasks
- [ ] Multi-topic topic list page.
- [ ] Better clustering of related articles.
- [ ] Confidence indicators or source coverage notes.
- [ ] Side-by-side source comparison view.
- [ ] Source refresh/update workflow.
- [ ] Richer filtering or topic search.