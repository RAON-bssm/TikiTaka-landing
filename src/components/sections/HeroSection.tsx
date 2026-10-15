import Character from '@/components/ui/Character';
import StoreButtons from '@/components/ui/StoreButtons';
import { HERO_CHARACTER } from '@/constants/character';

export default function HeroSection() {
  return (
    <section id="top" className="relative -mt-16 overflow-hidden pt-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_30%,var(--color-primary-100),transparent),radial-gradient(40%_40%_at_10%_80%,var(--color-secondary-100),transparent)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-20 sm:px-6 md:grid-cols-2 md:pt-20 md:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1.5 text-sm font-bold text-primary-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
            여러분들의 동네리그에 참여해보세요
          </p>
          <h1 className="mt-6 font-title text-5xl leading-[1.15] text-gray-800 sm:text-6xl">
            우리가 남긴
            <br />
            <span className="text-primary-600">우리 동네</span>를
            <br />
            살펴볼까요?
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-500">
            매주 이웃 동네와 미션 대결이 열려요. 동네 곳곳을 사진으로 남기고, 우리 동네를 랭킹 1위로
            올려보세요.
          </p>
          <div className="mt-8">
            <StoreButtons />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-linear-to-br from-primary-200 to-secondary-200 blur-2xl"
          />
          <Character
            config={HERO_CHARACTER}
            label="티키타카 기본 캐릭터"
            className="relative animate-float"
          />
          <MatchBadge />
        </div>
      </div>
    </section>
  );
}

/** 앱 홈의 매치 카드를 본뜬 장식. 동네 이름은 예시다. */
function MatchBadge() {
  return (
    <div className="absolute top-[6%] -left-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg ring-1 shadow-gray-800/5 ring-gray-100 sm:-left-8">
      <p className="text-xs font-medium text-gray-400">이번 라운드 대결</p>
      <p className="mt-1 text-sm font-bold text-gray-800">
        <span className="text-primary-600">우리 동네</span>
        <span className="mx-1.5 text-gray-300">VS</span>
        <span className="text-secondary-500">옆 동네</span>
      </p>
    </div>
  );
}
