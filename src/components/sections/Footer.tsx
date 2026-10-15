import logo from '@/assets/icons/logo.webp';
import { GITHUB_URL, PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@/constants/links';

const LINKS = [
  { href: TERMS_OF_SERVICE_URL, label: '이용약관' },
  { href: PRIVACY_POLICY_URL, label: '개인정보처리방침', strong: true },
  { href: GITHUB_URL, label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <img src={logo} alt="티키타카" className="h-6 w-auto" />
          <p className="mt-3 text-sm text-gray-400">
            © {new Date().getFullYear()} RAON. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={
                'strong' in link
                  ? 'font-bold text-gray-700 hover:text-gray-800'
                  : 'text-gray-500 hover:text-gray-700'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
