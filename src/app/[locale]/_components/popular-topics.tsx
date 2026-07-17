import { FadeIn } from "@/components/motion/fade-in";

export function PopularTopics({ title, topics }: { title: string; topics: string[] }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="text-h2">{title}</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-body-sm shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
