import SectionHeading from '@/components/ui/SectionHeading';

const MODES = [
  {
    badge: '본진',
    title: '본진에서 활동 중',
    body: '내가 대표하는 동네예요. 본진에서 올린 게시물은 개인 점수와 함께 동네 점수에도 들어가요.',
    className: 'bg-primary-600 text-white',
    badgeClassName: 'bg-white/20 text-white',
    bodyClassName: 'text-primary-100',
  },
  {
    badge: '원정',
    title: '지금 원정 중이에요',
    body: '다른 동네에 놀러 가도 그곳의 미션에 참여할 수 있어요. 다만 동네 점수는 본진에서만 쌓여요.',
    className: 'bg-white text-gray-800 ring-1 ring-gray-100',
    badgeClassName: 'bg-secondary-100 text-secondary-600',
    bodyClassName: 'text-gray-500',
  },
];

export default function HomeBaseSection() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
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
        <div className="grid gap-4 sm:grid-cols-2">
          {MODES.map((mode) => (
            <div key={mode.badge} className={`rounded-3xl p-7 ${mode.className}`}>
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${mode.badgeClassName}`}
              >
                {mode.badge}
              </span>
              <h3 className="mt-5 text-xl font-bold">{mode.title}</h3>
              <p className={`mt-2 leading-relaxed ${mode.bodyClassName}`}>{mode.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
