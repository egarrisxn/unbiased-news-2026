import { SourceList } from "@/components/source-list";
import { TopicSummaryView } from "@/components/topic-summary";
import {
  EmptyTopicNotice,
  InsufficientSourcesNotice,
  SynthesisErrorNotice,
} from "@/components/trust-states";
import { sampleTopic } from "@/lib/data/sample-topic";
import { generateTopicSummary } from "@/lib/synthesis";

export default async function TopicPage() {
  const topic = sampleTopic;

  if (!topic || topic.articles.length === 0) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-10">
        <EmptyTopicNotice />
      </div>
    );
  }

  const result = await generateTopicSummary(topic.id, topic.articles);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8 px-4 py-10">
      <h1 className="text-2xl font-bold">{topic.title}</h1>

      {result.status === "ok" && <TopicSummaryView summary={result.summary} />}
      {result.status === "insufficient_sources" && <InsufficientSourcesNotice />}
      {result.status === "error" && (
        <SynthesisErrorNotice message={result.message} />
      )}

      <SourceList articles={topic.articles} />
    </div>
  );
}
