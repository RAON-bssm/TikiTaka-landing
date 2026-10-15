import { APP_STORE_URL } from '@/constants/links';
import Typography from './Typography';

const STORES = [
  { name: 'App Store', caption: 'Download on the', url: APP_STORE_URL, icon: AppleIcon },
];

interface StoreButtonsProps {
  /** 주황 배경 위에 놓일 때 */
  inverted?: boolean;
}

export default function StoreButtons({ inverted }: StoreButtonsProps) {
  const base = inverted ? 'bg-white text-gray-800' : 'bg-gray-800 text-white';

  return (
    <div className="flex flex-wrap gap-sm">
      {STORES.map(({ name, caption, url, icon: Icon }) => {
        const content = (
          <>
            <Icon />
            <span className="flex flex-col gap-xs text-left">
              <Typography as="span" variant="caption" className="opacity-70">
                {url ? caption : '출시 예정'}
              </Typography>
              <Typography as="span" variant="h3">
                {name}
              </Typography>
            </span>
          </>
        );
        const className = `flex h-14 min-w-44 items-center gap-md rounded-sm px-xl ${base}`;

        return url ? (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`${className} transition-transform hover:-translate-y-0.5`}
          >
            {content}
          </a>
        ) : (
          <span key={name} aria-disabled className={`${className} cursor-default`}>
            {content}
          </span>
        );
      })}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
      <path d="M16.37 12.73c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74s1.78.74 2.99.72c1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.4-3.69ZM14.09 5.98c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.09 1.76-.96 2.79 1.02.08 2.06-.52 2.69-1.27Z" />
    </svg>
  );
}
