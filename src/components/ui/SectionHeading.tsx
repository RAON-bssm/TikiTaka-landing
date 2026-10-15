import type { ReactNode } from 'react';
import Typography from './Typography';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

/** 앱 BannerCard처럼 body3 primary eyebrow + 굵은 제목 조합. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start';

  return (
    <div className={`flex max-w-[640px] flex-col gap-md ${alignment}`}>
      <Typography variant="body3" className="text-primary-600">
        {eyebrow}
      </Typography>
      <h2 className="font-title text-3xl text-gray-800 sm:text-4xl">{title}</h2>
      {description && (
        <Typography variant="body2" className="leading-relaxed text-gray-500 sm:text-lg">
          {description}
        </Typography>
      )}
    </div>
  );
}
