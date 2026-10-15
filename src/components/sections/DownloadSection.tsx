import Character from '@/components/ui/Character';
import StoreButtons from '@/components/ui/StoreButtons';
import Typography from '@/components/ui/Typography';
import { HERO_CHARACTER } from '@/constants/character';

/** 앱 홈 `BannerCard`처럼 흰색 → 주황 가로 그라디언트에 캐릭터를 오른쪽에 둔다. */
export default function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-16 px-lg pb-5xl sm:px-2xl sm:pb-6xl">
      <div className="relative mx-auto flex max-w-page flex-col items-center gap-2xl overflow-hidden rounded-xl border border-gray-100 bg-linear-to-b from-white from-40% to-primary-400 px-2xl py-3xl md:flex-row md:justify-between md:bg-linear-to-r md:from-37% md:via-primary-200 md:via-60% md:to-primary-600 md:px-5xl md:py-4xl">
        <div className="flex flex-col items-center gap-lg text-center md:items-start md:text-left">
          <Typography variant="h3" className="text-primary-600">
            지금 바로 시작하기
          </Typography>
          <h2 className="font-title text-3xl text-gray-700 sm:text-4xl">
            이번 라운드,
            <br />
            <span className="text-primary-600">우리 동네</span>가 이길 차례
          </h2>
          <Typography variant="body2" className="text-gray-500">
            티키타카를 내려받고 동네 리그에 합류하세요.
          </Typography>
          <div className="mt-sm">
            <StoreButtons />
          </div>
        </div>
        <Character
          config={HERO_CHARACTER}
          label="티키타카 기본 캐릭터"
          className="w-[220px] shrink-0 md:w-[280px]"
        />
      </div>
    </section>
  );
}
