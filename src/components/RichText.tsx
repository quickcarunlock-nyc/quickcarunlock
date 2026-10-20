import Link from 'next/link';
import React from 'react';

/**
 * Renders plain text with inline markdown-style links: "see [key replacement](/services/key-replacement)".
 * Internal links use next/link; anything else renders as a normal anchor.
 */
export default function RichText({ text, linkClassName = 'text-blue-400 hover:text-blue-300 underline underline-offset-2' }: { text: string; linkClassName?: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith('/') ? (
        <Link key={i++} href={href} className={linkClassName}>{label}</Link>
      ) : (
        <a key={i++} href={href} className={linkClassName}>{label}</a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Strips the link markup, for use in JSON-LD and meta text. */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
}
