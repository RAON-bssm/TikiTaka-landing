import { APP_STORE_URL, PLAY_STORE_URL } from '@/constants/links';

const STORES = [
  { name: 'App Store', caption: 'Download on the', url: APP_STORE_URL, icon: AppleIcon },
  { name: 'Google Play', caption: 'GET IT ON', url: PLAY_STORE_URL, icon: PlayIcon },
];

interface StoreButtonsProps {
  /** 주황 배경 위에 놓일 때 */
  inverted?: boolean;
}

export default function StoreButtons({ inverted }: StoreButtonsProps) {
  const base = inverted ? 'bg-white text-gray-800' : 'bg-gray-800 text-white';

  return (
    <div className="flex flex-wrap gap-3">
      {STORES.map(({ name, caption, url, icon: Icon }) => {
        const content = (
          <>
            <Icon />
            <span className="flex flex-col text-left leading-none">
              <span className="text-[11px] opacity-70">{url ? caption : '출시 예정'}</span>
              <span className="mt-1 text-base font-bold">{name}</span>
            </span>
          </>
        );
        const className = `flex h-14 min-w-44 items-center gap-3 rounded-xl px-5 ${base}`;

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
          <span key={name} aria-disabled className={`${className} cursor-default opacity-80`}>
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

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M3.6 2.3 13.4 12l-9.8 9.7c-.35-.2-.6-.6-.6-1.1V3.4c0-.5.25-.9.6-1.1Z"
        fill="#4078FF"
      />
      <path d="m16.8 8.6-3.4 3.4-9.8-9.7c.3-.17.7-.2 1.05 0l12.15 6.3Z" fill="#34C38F" />
      <path d="m16.8 15.4-12.15 6.3c-.35.2-.75.17-1.05 0l9.8-9.7 3.4 3.4Z" fill="#FC8253" />
      <path d="m20.4 10.5-3.6-1.9-3.4 3.4 3.4 3.4 3.6-1.9c.95-.5.95-2.5 0-3Z" fill="#FEC84B" />
    </svg>
  );
}
