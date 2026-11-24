import {
  ChallengeVersus,
  TeamRankingPreview,
  TerritorySheetPreview,
  WagePreview,
} from '@/components/preview/TerritoryPreviews';
import Typography from '@/components/ui/Typography';
import type { ReactNode } from 'react';

// 앱 `types/territory.ts`의 사이클: 1~7일차 포인트 라운드(4일차 끝에 랭킹 멈춤 → 대표 선발 → 땅 세팅), 8~14일차 땅따먹기.
const PHASES = [
  {
    days: '1~4일차',
    title: '대표 선발전',
    body: '희망 동을 3곳까지 골라 두고 포인트를 모아요. 순위가 높은 사람부터 희망 동의 대표가 돼요.',
  },
  {
    days: '5~7일차',
    title: '땅 세팅',
    body: '대표가 되면 내 땅의 미션을 정하고 방어 사진을 찍어요. AI 점수가 그대로 방어 점수가 돼요.',
  },
  {
    days: '8~14일차',
    title: '땅따먹기',
    body: '다른 팀 땅에 통행료를 내고 도전해요. 그 땅 미션으로 찍은 사진이 방어 점수를 넘으면 내 땅!',
  },
  {
    days: '라운드 종료',
    title: '팀 순위 확정',
    body: '같은 구 사람들이 한 팀이에요. 팀이 가진 땅값을 모두 더해 최종 순위가 정해져요.',
  },
];

const CARDS: { title: string; body: string; preview: ReactNode }[] = [
  {
    title: '상대 땅 살펴보기',
    body: '지도에서 상대 땅을 누르면 미션과 방어 점수, 도전할 때 낼 통행료가 보여요.',
    preview: <TerritorySheetPreview />,
  },
  {
    title: '사진 한 장으로 승부',
    body: '그 땅의 미션대로 찍은 사진을 AI가 채점해요. 방어 점수를 넘으면 우리 팀 깃발을 꽂아요.',
    preview: <ChallengeVersus />,
  },
  {
    title: '매일 들어오는 일급',
    body: '땅을 갖고 있으면 매일 땅값에 비례한 포인트가 일급으로 들어와요.',
    preview: <WagePreview />,
  },
  {
    title: '개발하고 1위 하기',
    body: '포인트로 우리 팀 땅을 개발하면 확률에 따라 땅값이 올라요. 땅값 합계가 가장 높은 구가 1위!',
    preview: <TeamRankingPreview />,
  },
];

export default function TerritorySection() {
  return (
    <section id="territory" className="scroll-mt-16 bg-gray-800 py-5xl sm:py-6xl">
      <div className="mx-auto flex max-w-page flex-col gap-4xl px-lg sm:gap-5xl sm:px-2xl">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-md text-center">
          <Typography
            as="span"
            variant="h4"
            className="rounded-full bg-primary-600 px-md py-xs text-white"
          >
            NEW · 땅따먹기
          </Typography>
          <h2 className="font-title text-3xl text-white sm:text-4xl">
            2주에 한 번,
            <br />
            <span className="text-primary-500">동네 땅</span>을 차지하라
          </h2>
          <Typography variant="body2" className="leading-relaxed text-gray-300 sm:text-lg">
            첫 주에는 동 대표를 뽑고, 둘째 주에는 다른 팀의 땅을 빼앗아요. 우리 구를 가장 넓고 비싼
            땅의 주인으로 만들어 보세요.
          </Typography>
        </div>

        <ol className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase, i) => (
            <li
              key={phase.title}
              className="flex flex-col items-start gap-md rounded-md border border-white/10 bg-white/5 p-2xl"
            >
              <Typography
                as="span"
                variant="h4"
                className={`rounded-full px-md py-xs ${
                  i === 2 ? 'bg-primary-600 text-white' : 'bg-white/10 text-primary-400'
                }`}
              >
                {phase.days}
              </Typography>
              <Typography as="h3" variant="h2" className="text-white">
                {phase.title}
              </Typography>
              <Typography variant="body2" className="leading-relaxed text-gray-300">
                {phase.body}
              </Typography>
            </li>
          ))}
        </ol>

        <ul className="grid gap-lg md:grid-cols-2">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-xl rounded-xl bg-gray-50 p-xl sm:p-2xl"
            >
              <div className="flex flex-col gap-sm">
                <h3 className="font-title text-2xl text-gray-800">{card.title}</h3>
                <Typography variant="body2" className="leading-relaxed text-gray-500">
                  {card.body}
                </Typography>
              </div>
              <div className="mx-auto flex w-full max-w-[360px] flex-1 items-center">
                {card.preview}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
