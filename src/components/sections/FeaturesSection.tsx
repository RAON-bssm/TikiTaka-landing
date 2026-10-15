import cameraIcon from '@/assets/icons/camera.svg';
import feedIcon from '@/assets/icons/feed.svg';
import mapIcon from '@/assets/icons/map.svg';
import marketIcon from '@/assets/icons/market.svg';
import rankingIcon from '@/assets/icons/ranking.svg';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';

const FEATURES = [
  {
    icon: cameraIcon,
    title: '미션 인증 & AI 점수',
    body: '미션에 맞춰 찍은 사진을 올리면 AI가 바로 점수를 매겨줘요. 내 점수가 곧 동네 점수!',
    tone: 'primary',
    wide: true,
  },
  {
    icon: feedIcon,
    title: '동네 피드',
    body: '이번 라운드 대결 게시판에서 이웃들이 남긴 우리 동네 모습을 구경하고 좋아요를 눌러요.',
    tone: 'secondary',
  },
  {
    icon: rankingIcon,
    title: '동네 · 개인 랭킹',
    body: '대결이 시작되면 동네 점수와 개인 점수 순위가 실시간으로 집계돼요.',
    tone: 'secondary',
  },
  {
    icon: mapIcon,
    title: '지도와 동네 챗봇',
    body: '지도 위 캐릭터에게 말을 걸어 우리 동네 이야기를 물어보세요.',
    tone: 'primary',
  },
  {
    icon: marketIcon,
    title: '상점 & 뽑기',
    body: '활동으로 모은 포인트로 머리·눈·입·코스튬을 사고, 뽑기로 새 아이템을 얻어요.',
    tone: 'primary',
  },
] as const;

const TONES = {
  primary: 'bg-primary-100 [&>span]:bg-primary-600',
  secondary: 'bg-secondary-100 [&>span]:bg-secondary-500',
};

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className={`flex flex-col rounded-3xl border border-gray-100 bg-white p-7 transition-shadow hover:shadow-xl hover:shadow-gray-800/5 ${
                'wide' in feature ? 'md:col-span-2' : ''
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${TONES[feature.tone]}`}
              >
                <Icon src={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-500">{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
