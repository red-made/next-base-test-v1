import Image from "next/image";

export const dynamic = "force-dynamic";

async function fetchQuote(): Promise<{ quote: string; author: string }> {
  // Static demo data — no external fetch needed to avoid network issues
  const quotes = [
    { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default async function SSRPage() {
  const serverTime = new Date().toLocaleString("it-IT", {
    timeZone: "Europe/Rome",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const { quote, author } = await fetchQuote();

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 py-20 px-6">
      <h1 className="text-3xl font-semibold tracking-tight">SSR Page</h1>
      <p className="text-zinc-500 text-sm">
        This page is rendered on the <strong>server</strong> on every request.
        The data below is generated at request time.
      </p>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 w-full max-w-sm text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
          Server time (Europe/Rome)
        </p>
        <p className="text-lg font-mono">{serverTime}</p>
      </section>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 w-full max-w-md">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
          Random quote
        </p>
        <blockquote className="text-xl italic text-zinc-700 dark:text-zinc-300">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-3 text-sm text-zinc-500">— {author}</p>
      </section>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 w-full max-w-md">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-4">
          Public images (persistence test)
        </p>
        <div className="flex gap-4 justify-center">
          <Image
            src="/images/sample1.svg"
            alt="Sample image 1"
            width={120}
            height={80}
            className="rounded-lg"
          />
          <Image
            src="/images/sample2.svg"
            alt="Sample image 2"
            width={120}
            height={80}
            className="rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}
