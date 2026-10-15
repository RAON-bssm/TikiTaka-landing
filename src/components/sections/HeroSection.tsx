import ring from '@/assets/images/splash/ring.svg';
import star from '@/assets/images/splash/star.svg';
import MatchCard from '@/components/preview/MatchCard';
import StageBadge from '@/components/preview/StageBadge';
import Character from '@/components/ui/Character';
import StoreButtons from '@/components/ui/StoreButtons';
import Typography from '@/components/ui/Typography';
import { HERO_CHARACTER } from '@/constants/character';

/**
 * 앱 스플래시(`AppSplash`)의 배경을 그대로 가져왔다.
 * primary-600 → (50%) primary-600 → secondary-100 그라디언트에 링·별 장식.
 */
export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative -mt-16 overflow-hidden bg-linear-to-b from-primary-600 from-50% to-secondary-100 pt-16"
    >
      <img
        src={ring}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[8.8%] -left-[7.2%] w-[189px] opacity-90"
      />
      <img
        src={star}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-[72px] bottom-0 w-[186px] -rotate-[24.2deg] sm:w-[240px]"
      />

      <div className="relative mx-auto grid max-w-page items-center gap-3xl px-lg pt-3xl pb-5xl sm:px-2xl md:grid-cols-2 md:pt-5xl md:pb-6xl">
        <div className="flex flex-col items-start gap-2xl">
          <Typography
            as="span"
            variant="h3"
            className="rounded-full bg-white/20 px-md py-xs text-white"
          >
            여러분들의 동네 리그에 참여해보세요!
          </Typography>
          <h1 className="font-title text-4xl text-white sm:text-5xl">
            우리가 남긴
            <br />
            <span className="inline-block rounded-sm bg-white px-sm leading-none text-primary-600">
              우리 동네
            </span>
            를
            <br />
            살펴볼까요?
          </h1>
          <Typography variant="body1" className="max-w-[440px] leading-relaxed text-primary-100">
            매주 이웃 동네와 미션 대결이 열려요. 동네 곳곳을 사진으로 남기고, 우리 동네를 랭킹 1위로
            올려보세요.
          </Typography>
          <StoreButtons inverted />
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div aria-hidden className="absolute inset-[10%] rounded-full bg-white/25" />
          <Character
            config={HERO_CHARACTER}
            label="티키타카 기본 캐릭터"
            className="relative animate-float"
          />
          <MatchCard
            team1={{ name: '옆 동네', score: 1240 }}
            team2={{ name: '우리 동네', score: 1385 }}
            className="absolute top-[4%] -left-lg scale-90 sm:-left-3xl sm:scale-100"
          />
          <StageBadge
            season={1}
            round={2}
            className="absolute right-0 -bottom-sm left-0 mx-auto w-fit"
          />
        </div>
      </div>
    </section>
  );
}
