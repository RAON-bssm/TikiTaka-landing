interface IconProps {
  /** `currentColor`로 그려진 단색 SVG. 마스크로 써서 배경색(`bg-*`)으로 색을 입힌다. */
  src: string;
  className?: string;
}

export default function Icon({ src, className = '' }: IconProps) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 ${className}`}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}
