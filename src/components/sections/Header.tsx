import logo from '@/assets/icons/logo.webp';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '#how', label: '이용 방법' },
  { href: '#features', label: '주요 기능' },
  { href: '#character', label: '캐릭터' },
];

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
        scrolled ? 'border-b border-gray-100 bg-white/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" aria-label="티키타카 홈">
          <img src={logo} alt="티키타카" className="h-7 w-auto" />
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 md:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            className="ml-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-700"
          >
            앱 다운로드
          </a>
        </nav>
      </div>
    </header>
  );
}
