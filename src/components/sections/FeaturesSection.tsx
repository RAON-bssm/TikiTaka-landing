import cameraIcon from '@/assets/icons/camera.svg';
import mapIcon from '@/assets/icons/map.svg';
import rankingIcon from '@/assets/icons/ranking.svg';
import feedIcon from '@/assets/icons/feed.svg';
import AiScoreCard from '@/components/preview/AiScoreCard';
import BattleStatus from '@/components/preview/BattleStatus';
import ChatPreview from '@/components/preview/ChatPreview';
import RankingList from '@/components/preview/RankingList';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import Typography from '@/components/ui/Typography';
import { SHOWCASE_CHARACTERS } from '@/constants/character';
import type { ReactNode } from 'react';

// 미리보기 안의 동네 이름·점수는 화면 예시다.
const FEATURES: {
  icon: string;
  eyebrow: string;
  title: string;
  body: string;
  preview: ReactNode;
}[] = [
  {
    icon: cameraIcon,
    eyebrow: '미션 인증 & AI 점수',
    title: '찍어서 올리면\nAI가 바로 채점해요',
    body: '이번 주 미션에 맞춰 동네 사진을 찍어 올리면 AI가 점수와 한 줄 평을 남겨줘요. 내 점수가 곧 동네 점수!',
    preview: (
      <div className="flex w-full flex-col gap-md">
        <Typography
          as="span"
          variant="h4"
          className="self-start rounded-full bg-primary-600 px-md py-xs text-white"
        >
          이번 주 미션 · 우리 동네 숨은 벽화 찾기
        </Typography>
        <AiScoreCard
          score={92}
          comment="골목 벽화의 색감이 잘 살아 있어요! 미션 주제와도 딱 맞는 사진이에요."
        />
      </div>
    ),
  },
  {
    icon: feedIcon,
    eyebrow: '동네 대결 현황',
    title: '지금 우리 동네가\n이기고 있을까?',
    body: '라운드 동안 쌓인 동네 점수를 홈에서 바로 확인해요. 이웃들이 올린 게시물이 실시간으로 점수에 반영돼요.',
    preview: (
      <BattleStatus
        myTeam={{ name: '우리 동네', score: 1385 }}
        opponentTeam={{ name: '옆 동네', score: 1240 }}
      />
    ),
  },
  {
    icon: rankingIcon,
    eyebrow: '동네 · 개인 랭킹',
    title: '시즌이 끝나면\n1위 동네는 어디?',
    body: '대결이 시작되면 동네 점수와 개인 점수 순위가 함께 집계돼요. 우리 동네를 맨 위로 올려보세요.',
    preview: (
      <RankingList
        rows={[
          { location: '우리 동네', address: '부산 강서구', count: 4820 },
          { location: '옆 동네', address: '부산 강서구', count: 4315 },
          { location: '윗 동네', address: '부산 사하구', count: 3960 },
          { location: '건너 동네', address: '부산 북구', count: 3102 },
        ]}
      />
    ),
  },
  {
    icon: mapIcon,
    eyebrow: '지도와 동네 챗봇',
    title: '지도 위 캐릭터에게\n말을 걸어보세요',
    body: '지도에서 만난 캐릭터에게 우리 동네 이야기를 물어볼 수 있어요. 숨은 맛집부터 미션 힌트까지.',
    preview: (
      <ChatPreview
        character={SHOWCASE_CHARACTERS[0]}
        messages={[
          { role: 'bot', text: '안녕! 우리 동네에 대해 궁금한 게 있어?' },
          { role: 'user', text: '이번 주 미션 할 만한 장소 추천해줘' },
          { role: 'bot', text: '강변 산책로 끝에 있는 벽화 골목은 어때? 오후 햇살이 예뻐!' },
        ]}
      />
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-16 py-5xl sm:py-6xl">
      <div className="mx-auto flex max-w-page flex-col gap-4xl px-lg sm:gap-5xl sm:px-2xl">
        <SectionHeading
          eyebrow="FEATURES"
          title={
            <>
              동네를 걷는 모든 순간이
              <br />
              <span className="text-primary-600">점수</span>가 돼요
            </>
          }
        />
        <ul className="flex flex-col gap-4xl sm:gap-5xl">
          {FEATURES.map((feature, i) => (
            <li
              key={feature.eyebrow}
              className="grid items-center gap-2xl md:grid-cols-2 md:gap-5xl"
            >
              <div className={`flex flex-col items-start gap-lg ${i % 2 ? 'md:order-2' : ''}`}>
                <span className="flex items-center gap-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100">
                    <Icon src={feature.icon} className="h-5 w-5 bg-primary-600" />
                  </span>
                  <Typography as="span" variant="h3" className="text-primary-600">
                    {feature.eyebrow}
                  </Typography>
                </span>
                <h3 className="font-title text-2xl whitespace-pre-line text-gray-800 sm:text-3xl">
                  {feature.title}
                </h3>
                <Typography variant="body2" className="max-w-[440px] leading-relaxed text-gray-500">
                  {feature.body}
                </Typography>
              </div>
              <div className="flex items-center justify-center rounded-xl bg-gray-50 p-lg sm:p-3xl">
                <div className="w-full max-w-[400px]">{feature.preview}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
