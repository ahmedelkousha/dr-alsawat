'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export default function TableOfContents({
  htmlContent,
}: {
  htmlContent: string;
}) {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const container = document.querySelector('.prose');
    if (!container) return;

    const elements = container.querySelectorAll('h2, h3');

    const items = Array.from(elements).map((heading, index) => {
      const text = heading.textContent?.trim() || '';
      const id = `heading-${index}`;

      heading.id = id;

      return {
        id,
        text,
        level: heading.tagName === 'H2' ? 2 : 3,
      };
    });

    setHeadings(items);
  }, [htmlContent]);

  if (headings.length < 2) return null;

  return (
    <nav className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8">
      <div className="flex items-center gap-2 mb-3 font-bold">
        <List className="w-5 h-5" />
        <span>فهرس المقال</span>
      </div>

      <ul className="space-y-2 text-sm">
        {headings.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? 'pr-4 text-xs' : 'font-semibold'}
          >
            <a
              href={`#${item.id}`}
              className="text-slate-600 hover:text-brand block"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}