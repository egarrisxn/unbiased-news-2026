"use client";

import ErrorSection from "@/components/error-section";

interface AppError {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ reset }: AppError) {
  return (
    <html>
      <body>
        <div className="flex flex-1 flex-col items-center justify-center">
          <section className="grid px-4">
            <ErrorSection onClick={() => reset()} />
          </section>
        </div>
      </body>
    </html>
  );
}
