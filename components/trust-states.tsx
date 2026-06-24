export function InsufficientSourcesNotice() {
  return (
    <div className="border-border bg-muted rounded-lg border p-4">
      <p className="font-medium">Limited source coverage</p>
      <p className="text-muted-foreground mt-1 text-sm">
        This topic does not yet have enough sources for a reliable
        multi-source summary.
      </p>
    </div>
  );
}

export function SynthesisErrorNotice({ message }: { message: string }) {
  return (
    <div className="border-destructive/40 bg-destructive/10 rounded-lg border p-4">
      <p className="font-medium">Summary generation failed</p>
      <p className="text-muted-foreground mt-1 text-sm">
        We could not generate an AI summary for this topic right now ({message}
        ). The original source articles are still available below.
      </p>
    </div>
  );
}

export function EmptyTopicNotice() {
  return (
    <div className="border-border bg-muted rounded-lg border p-4">
      <p className="font-medium">No topic data available</p>
      <p className="text-muted-foreground mt-1 text-sm">
        There is no article data for this topic yet.
      </p>
    </div>
  );
}
