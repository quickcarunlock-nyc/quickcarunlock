import RichText from '@/components/RichText';

type Props = {
  heading?: string;
  /** Each item is one short paragraph. Use [label](/path) for inline links. */
  paragraphs: string[];
};

/** Short, hand-written, in-context links. Placed near the end of a page so every page links to the pages it is actually related to. */
export default function ContextNote({ heading = 'Related reading', paragraphs }: Props) {
  return (
    <section className="py-14 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]" aria-label={heading}>
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[var(--text-secondary)] text-lg leading-relaxed mb-3">
            <RichText text={p} />
          </p>
        ))}
      </div>
    </section>
  );
}
