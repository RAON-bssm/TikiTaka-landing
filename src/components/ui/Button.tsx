import Typography from './Typography';

// 앱 `src/components/ui/Button.tsx`와 같은 size·variant. 웹에서는 링크로 쓴다.
type Size = 'md' | 'sm';
type Variant = 'primary' | 'light' | 'white';

const sizeClass: Record<Size, string> = {
  md: 'p-md',
  sm: 'px-lg py-sm',
};

const sizeVariant: Record<Size, 'h3' | 'h4'> = {
  md: 'h3',
  sm: 'h4',
};

const variantClass: Record<Variant, { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-600 hover:bg-primary-700', text: 'text-white' },
  light: { bg: 'bg-primary-100 hover:bg-primary-200', text: 'text-primary-600' },
  white: { bg: 'bg-white hover:bg-primary-100', text: 'text-primary-600' },
};

interface Props {
  content: string;
  href: string;
  size?: Size;
  variant?: Variant;
  className?: string;
}

export default function Button({
  content,
  href,
  size = 'md',
  variant = 'primary',
  className = '',
}: Props) {
  const color = variantClass[variant];
  return (
    <a
      href={href}
      className={`flex items-center justify-center rounded-sm transition-colors ${color.bg} ${sizeClass[size]} ${className}`}
    >
      <Typography as="span" variant={sizeVariant[size]} className={color.text}>
        {content}
      </Typography>
    </a>
  );
}
