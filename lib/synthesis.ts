import Anthropic from "@anthropic-ai/sdk";
import type { Article, SynthesisResult, TopicSummary } from "@/lib/types";

const MIN_SOURCES = 2;
const MODEL = "claude-sonnet-4-6";

interface SynthesisJson {
  summary: string;
  agreements: string[];
  disagreements: string[];
  openQuestions: string[];
}

function buildPrompt(articles: Article[]): string {
  const sourcesBlock = articles
    .map(
      (a, i) =>
        `Source ${i + 1} (${a.sourceName}): "${a.headline}"\n${a.content}`
    )
    .join("\n\n");

  return `You are summarizing news coverage of a single topic from multiple sources for a transparency-focused news app. Read the sources below and respond with ONLY a JSON object (no markdown fences) with this exact shape:

{
  "summary": "a neutral, evidence-based summary in 2-4 sentences, based only on the sources provided",
  "agreements": ["point sources broadly agree on", ...],
  "disagreements": ["point where sources differ in framing or facts", ...],
  "openQuestions": ["question or gap not resolved by the sources", ...]
}

Rules:
- Do not claim perfect objectivity or use words like "the truth" or "fully unbiased".
- Preserve real disagreement between sources; do not flatten it into false consensus.
- If coverage is sparse or one-sided, say so in the summary.
- Base every claim only on the sources below.

Sources:

${sourcesBlock}`;
}

function parseModelJson(text: string): SynthesisJson {
  const trimmed = text.trim();
  const jsonText = trimmed.startsWith("{")
    ? trimmed
    : trimmed.slice(trimmed.indexOf("{"), trimmed.lastIndexOf("}") + 1);
  const parsed = JSON.parse(jsonText);

  if (
    typeof parsed.summary !== "string" ||
    !Array.isArray(parsed.agreements) ||
    !Array.isArray(parsed.disagreements) ||
    !Array.isArray(parsed.openQuestions)
  ) {
    throw new Error("Model response missing expected fields");
  }

  return parsed as SynthesisJson;
}

export async function generateTopicSummary(
  topicId: string,
  articles: Article[]
): Promise<SynthesisResult> {
  if (articles.length < MIN_SOURCES) {
    return { status: "insufficient_sources" };
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return {
      status: "error",
      message: "ANTHROPIC_API_KEY is not configured.",
    };
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 1024,
      messages: [{ role: "user", content: buildPrompt(articles) }],
    });

    const textBlock = response.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text content returned from model");
    }

    const parsed = parseModelJson(textBlock.text);

    const summary: TopicSummary = {
      topicId,
      summary: parsed.summary,
      agreements: parsed.agreements,
      disagreements: parsed.disagreements,
      openQuestions: parsed.openQuestions,
      sourceArticleIds: articles.map((a) => a.id),
      generatedAt: new Date().toISOString(),
    };

    return { status: "ok", summary };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "Unknown synthesis error",
    };
  }
}
