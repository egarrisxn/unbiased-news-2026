# TASKS.md

## Rules
- Work one task at a time.
- Mark tasks complete immediately after finishing them.
- Add newly discovered tasks when needed.
- Do not start broad refactors unless explicitly approved.
- Keep MVP scope tight.

---

## Milestone 1: Repo assessment and MVP alignment
- [ ] Inspect the repository and identify the current tech stack.
- [ ] Document the app structure and key files.
- [ ] Identify what already exists versus what must be built.
- [ ] Confirm whether the existing stack is suitable for the MVP.
- [ ] Recommend the smallest realistic architecture based on the current repo.
- [ ] Confirm the first vertical slice to implement.

## Milestone 2: Project scaffolding and core docs
- [ ] Create or refine `CLAUDE.md`.
- [ ] Create or refine `PLANNING.md`.
- [ ] Create or refine `TASKS.md`.
- [ ] Document setup/run instructions if missing.
- [ ] Identify the minimum environment/config needed for local development.

## Milestone 3: Article input for one topic
- [ ] Choose the MVP input strategy for articles:
  - mocked data,
  - manual URLs,
  - simple API,
  - or limited source ingestion.
- [ ] Create a normalized article schema.
- [ ] Build a simple way to load article records for one topic.
- [ ] Store article metadata in the simplest viable format.
- [ ] Handle missing metadata gracefully.
- [ ] Prevent obvious duplicates in the sample topic set.

## Milestone 4: Topic summary generation
- [ ] Define the AI summary output structure.
- [ ] Implement summary generation for one topic.
- [ ] Generate:
  - neutral summary,
  - points of agreement,
  - points of disagreement,
  - unresolved questions.
- [ ] Ensure output is tied to a known source set.
- [ ] Add clear labeling that the output is AI-generated.
- [ ] Add fallback behavior if summary generation fails.

## Milestone 5: Topic page UI
- [ ] Create a topic page or topic view for the first sample issue.
- [ ] Display the topic title and summary prominently.
- [ ] Display agreement points clearly.
- [ ] Display disagreement points clearly.
- [ ] Display unresolved questions clearly.
- [ ] Display the source list with direct links.
- [ ] Display publication name and publish date if available.
- [ ] Add a transparency note explaining how the summary was produced.

## Milestone 6: Trust and edge cases
- [ ] Add a state for too few sources.
- [ ] Add a state for missing article content.
- [ ] Add a state for failed AI generation.
- [ ] Add an empty state if no topic data exists.
- [ ] Ensure the UI communicates uncertainty honestly.

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