import logo from '@/assets/icons/logo.webp';
import logoWhite from '@/assets/images/splash/logo-white.svg';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '#how', label: '이용 방법' },
  { href: '#features', label: '주요 기능' },
  { href: '#character', label: '캐릭터' },
];

/** 히어로(주황 배경) 위에서는 흰 로고, 스크롤하면 앱 헤더처럼 흰 바탕에 컬러 로고. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-gray-100 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-lg sm:px-2xl">
        <a href="#top" aria-label="티키타카 홈" className="hover:opacity-70">
          <img
            src={scrolled ? logo : logoWhite}
            alt="티키타카"
            className="h-8 w-[124px] object-contain object-left"
          />
        </a>
        <nav className="flex items-center gap-xs">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`hidden rounded-sm px-md py-sm transition-colors md:block ${
                scrolled ? 'text-gray-600 hover:bg-gray-50' : 'text-white hover:bg-white/15'
              }`}
            >
              <Typography as="span" variant="body3">
                {item.label}
              </Typography>
            </a>
          ))}
          <Button
            href="#download"
            content="앱 다운로드"
            size="sm"
            variant={scrolled ? 'primary' : 'white'}
            className="ml-sm"
          />
        </nav>
      </div>
    </header>
  );
}
