import logo from '@/assets/icons/logo.webp';
import Typography from '@/components/ui/Typography';
import { GITHUB_URL, PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@/constants/links';

const LINKS = [
  { href: TERMS_OF_SERVICE_URL, label: '이용약관' },
  { href: PRIVACY_POLICY_URL, label: '개인정보처리방침', strong: true },
  { href: GITHUB_URL, label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-page flex-col gap-2xl px-lg py-3xl sm:flex-row sm:items-center sm:justify-between sm:px-2xl">
        <div className="flex flex-col gap-md">
          <img src={logo} alt="티키타카" className="h-6 w-fit" />
          <Typography variant="caption" className="text-gray-400">
            © {new Date().getFullYear()} RAON. All rights reserved.
          </Typography>
        </div>
        <nav className="flex flex-wrap gap-x-2xl gap-y-sm">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <Typography
                as="span"
                variant={'strong' in link ? 'h4' : 'body3'}
                className={
                  'strong' in link
                    ? 'text-gray-700 hover:text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }
              >
                {link.label}
              </Typography>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
