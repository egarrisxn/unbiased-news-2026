# PLANNING.md

## Vision
Build a simple web app that helps users understand a news topic by comparing coverage across multiple sources and generating a neutral, evidence-based synthesis with transparent source attribution.

## Product promise
The app does not claim perfect objectivity.
It helps readers:
- see what multiple sources agree on,
- notice where framing differs,
- spot unresolved uncertainty,
- open the original reporting directly.

## MVP outcome
A user can open one topic page and immediately see:
- a concise AI-generated summary,
- points of agreement,
- points of disagreement,
- unresolved questions or missing context,
- a visible list of source articles used.

## MVP boundaries
### In scope
- one-topic workflow
- small set of article inputs
- normalized article data
- one topic summary generated from multiple sources
- source transparency UI
- minimal but trustworthy layout

### Out of scope
- broad crawling infrastructure
- advanced bias detection or scoring
- full recommendation engine
- account system
- production-grade personalization
- mobile-native app
- social/discussion system

## Recommended build strategy
Build one vertical slice first:
1. create or ingest a small article set for one topic
2. normalize the article records
3. store the article data in the simplest viable way
4. generate a topic-level AI summary
5. render the topic page
6. add trust and fallback states

## Product architecture goals
- simple and maintainable
- transparent data flow
- easy to inspect source inputs
- easy to expand later
- not overbuilt for scale

## Suggested functional architecture
### 1. Ingestion layer
Responsible for getting article inputs into the app.

MVP approach:
- use a small number of known article sources, manual article inputs, a simple API, or mocked sample data
- avoid full web-wide ingestion at first

Responsibilities:
- fetch or accept article inputs
- extract basic metadata
- produce normalized article records

### 2. Normalization layer
Responsible for converting varied article inputs into a consistent structure.

Suggested normalized fields:
- id
- topic_id
- source_name
- source_url
- article_url
- headline
- author
- published_at
- excerpt
- cleaned_content
- fetched_at
- language

### 3. Topic clustering layer
Responsible for grouping related articles into a single issue/topic.

MVP approach:
- begin with a single topic manually selected or manually grouped
- postpone automated clustering complexity

### 4. AI synthesis layer
Responsible for generating topic-level output from article inputs.

Expected outputs:
- neutral summary
- points of agreement
- points of disagreement
- unresolved questions
- source list used
- generated_at timestamp

Guardrails:
- avoid overstating certainty
- preserve disagreement
- clearly label output as AI-generated
- explicitly acknowledge sparse or conflicting coverage

### 5. Presentation layer
Responsible for rendering information clearly and transparently.

MVP topic page sections:
- topic title
- AI summary
- agreement points
- disagreement points
- unresolved questions
- source list
- AI/transparency note

## Trust and editorial rules
- never hide sources
- never present generated output as raw reporting
- always label summaries as AI-generated
- reflect uncertainty honestly
- do not flatten real disagreement into false consensus
- avoid “truth machine” framing

## Recommended technical approach
Use the existing repository’s stack if it is reasonably suitable.
Do not force a rewrite unless the current setup is clearly blocking the MVP.

General guidance:
- choose the simplest persistence layer that supports iteration
- use mocked/sample data first if needed
- keep service boundaries light
- avoid introducing too many moving parts early

## Likely future expansion
These should be enabled later, not built now:
- multi-topic view
- richer source ingestion
- stronger clustering
- confidence indicators
- historical updates over time
- source comparison views
- user preferences
- saved topics

## Risks
### Product risks
- “unbiased” may overpromise
- users may misread summary certainty
- source selection may itself create hidden bias

### Technical risks
- article extraction inconsistency
- duplicated or low-quality inputs
- poor topic grouping
- brittle prompt outputs
- overbuilt architecture too early

### UX risks
- hiding important nuance
- making source links too secondary
- overloading the topic page
- making uncertainty feel like failure instead of honesty

## Decision principles
When choosing between options:
1. prefer the option that is simpler to reason about
2. prefer the option that keeps source traceability obvious
3. prefer the option that can be verified manually
4. prefer the option that supports a clean first demo
5. avoid scale-first decisions unless necessary

## Working assumptions
These assumptions can be revised:
- MVP supports one topic first
- article set may be mocked or limited at first
- a single AI synthesis workflow is enough for the first demo
- transparency matters more than breadth
- solo-developer speed matters

## Milestone outline
### Milestone 1
Understand the repo and choose the MVP direction based on the current stack.

### Milestone 2
Implement article input + normalization for one sample topic.

### Milestone 3
Implement AI synthesis for one topic.

### Milestone 4
Render the topic page with transparency-first UI.

### Milestone 5
Add basic edge-case handling:
- too few sources
- missing metadata
- failed summary generation
- empty topic state

### Milestone 6
Refine and prepare for expansion.