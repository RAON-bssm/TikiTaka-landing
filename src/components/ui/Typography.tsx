import type { ElementType, HTMLAttributes } from 'react';

// 앱 `src/components/ui/Typography.tsx`의 variant를 그대로 옮겼다.
// 앱의 font-sans(Pretendard-Medium)는 font-medium, font-regular는 font-normal에 대응한다.
type Variant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'caption';

const variantClass: Record<Variant, string> = {
  display: 'text-3xl font-bold',
  h1: 'text-2xl font-bold',
  h2: 'text-xl font-bold',
  h3: 'text-md font-bold',
  h4: 'text-sm font-bold',
  body1: 'text-lg font-medium',
  body2: 'text-md font-medium',
  body3: 'text-sm font-medium',
  caption: 'text-xs font-normal',
};

interface Props extends HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: ElementType;
}

export default function Typography({
  variant = 'body1',
  as: Tag = 'p',
  className,
  ...props
}: Props) {
  return <Tag className={`${variantClass[variant]} ${className ?? ''}`} {...props} />;
}
