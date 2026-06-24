import type { Article } from "@/lib/types";

export function SourceList({ articles }: { articles: Article[] }) {
  return (
    <section aria-labelledby="sources-heading">
      <h2 id="sources-heading" className="text-lg font-semibold">
        Sources used
      </h2>
      <ul className="mt-2 space-y-3">
        {articles.map((article) => (
          <li key={article.id} className="border-border border-l-2 pl-3">
            <a
              href={article.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline-offset-2 hover:underline"
            >
              {article.headline}
            </a>
            <p className="text-muted-foreground text-sm">
              {article.sourceName}
              {article.author ? ` · ${article.author}` : ""}
              {article.publishedAt ? ` · ${article.publishedAt}` : ""}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
