"use client";

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 py-20 px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Client Page</h1>
      <p className="text-zinc-500 text-sm">
        This page is rendered on the <strong>client</strong>. State and browser
        APIs are available here.
      </p>

      <section className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 w-full max-w-sm">
        <p className="text-5xl font-bold tabular-nums">{count}</p>
        <div className="flex gap-3">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            +
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 text-center w-full max-w-sm">
        <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">
          Local time
        </p>
        <p className="text-2xl font-mono">{time}</p>
      </section>
    </main>
  );
}
