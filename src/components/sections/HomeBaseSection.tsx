import homeIcon from '@/assets/icons/home.svg';
import placeIcon from '@/assets/icons/place.svg';
import Icon from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import Typography from '@/components/ui/Typography';

const MODES = [
  {
    icon: homeIcon,
    badge: '본진',
    title: '본진에서 활동 중',
    body: '내가 대표하는 동네예요. 본진에서 올린 게시물은 개인 점수와 함께 동네 점수에도 들어가요.',
    className: 'bg-primary-600',
    badgeClassName: 'bg-white/20 text-white',
    iconClassName: 'bg-white',
    titleClassName: 'text-white',
    bodyClassName: 'text-primary-100',
  },
  {
    icon: placeIcon,
    badge: '원정',
    title: '지금 원정 중이에요',
    body: '다른 동네에 놀러 가도 그곳의 미션에 참여할 수 있어요. 다만 동네 점수는 본진에서만 쌓여요.',
    className: 'border border-gray-100 bg-white',
    badgeClassName: 'bg-secondary-100 text-secondary-600',
    iconClassName: 'bg-secondary-600',
    titleClassName: 'text-gray-800',
    bodyClassName: 'text-gray-500',
  },
];

export default function HomeBaseSection() {
  return (
    <section className="bg-gray-50 py-5xl sm:py-6xl">
      <div className="mx-auto grid max-w-page items-center gap-3xl px-lg sm:px-2xl lg:grid-cols-2">
        <SectionHeading
          align="left"
          eyebrow="HOME & AWAY"
          title={
            <>
              내 동네는 <span className="text-primary-600">본진</span>,
              <br />
              놀러 간 동네는 <span className="text-secondary-500">원정</span>
            </>
          }
          description="이사를 했다면 본진을 바꿀 수 있어요. 변경은 다음 라운드가 시작될 때 적용되고, 그 전까지는 언제든 취소할 수 있어요."
        />
        <div className="grid gap-md sm:grid-cols-2">
          {MODES.map((mode) => (
            <div
              key={mode.badge}
              className={`flex flex-col items-start gap-md rounded-xl p-2xl ${mode.className}`}
            >
              <span
                className={`flex items-center gap-xs rounded-full px-md py-xs ${mode.badgeClassName}`}
              >
                <Icon src={mode.icon} className={`h-4 w-4 ${mode.iconClassName}`} />
                <Typography as="span" variant="h4">
                  {mode.badge}
                </Typography>
              </span>
              <Typography as="h3" variant="h1" className={`mt-sm ${mode.titleClassName}`}>
                {mode.title}
              </Typography>
              <Typography variant="body2" className={`leading-relaxed ${mode.bodyClassName}`}>
                {mode.body}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
