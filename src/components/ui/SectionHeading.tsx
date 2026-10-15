import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-sm font-bold tracking-wide text-primary-600">{eyebrow}</p>
      <h2 className="mt-3 font-title text-3xl leading-tight text-gray-800 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">{description}</p>
      )}
    </div>
  );
}
