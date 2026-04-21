import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <section className="grid px-4">
        <div className="flex flex-auto flex-col items-center justify-center text-center sm:flex-row">
          <h1 className="text-7xl font-bold sm:mr-5 sm:border-r-2 sm:border-foreground sm:pr-5 sm:text-2xl">
            Test.
          </h1>
          <p className="mt-3 text-lg text-accent-foreground sm:mt-0 sm:text-base">
            This is a test page.
          </p>
          <Link href="/" className="mt-0.5 sm:mt-0">
            <Button
              size="sm"
              className="text-lg font-medium sm:text-base"
              variant="link"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
