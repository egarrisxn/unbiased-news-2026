export interface Article {
  id: string;
  topicId: string;
  sourceName: string;
  sourceUrl: string;
  articleUrl: string;
  headline: string;
  author?: string;
  publishedAt?: string;
  excerpt: string;
  content: string;
}

export interface Topic {
  id: string;
  title: string;
  articles: Article[];
}

export interface TopicSummary {
  topicId: string;
  summary: string;
  agreements: string[];
  disagreements: string[];
  openQuestions: string[];
  sourceArticleIds: string[];
  generatedAt: string;
}

export type SynthesisResult =
  | { status: "ok"; summary: TopicSummary }
  | { status: "insufficient_sources" }
  | { status: "error"; message: string };
