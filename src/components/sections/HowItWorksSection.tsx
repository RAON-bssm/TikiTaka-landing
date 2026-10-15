import SectionHeading from '@/components/ui/SectionHeading';

const STEPS = [
  {
    title: '본진 정하기',
    body: '내가 대표할 동네를 본진으로 정해요. 본진에서 올린 게시물이 동네 점수로 쌓여요.',
  },
  {
    title: '이번 주 대결 확인',
    body: '라운드마다 이웃 동네와 매치가 잡히고, 함께 수행할 미션이 주어져요.',
  },
  {
    title: '사진으로 미션 인증',
    body: '미션에 맞는 동네 사진을 찍어 올리면 AI가 점수를 매겨줘요.',
  },
  {
    title: '우리 동네 승리!',
    body: '라운드가 끝나면 동네 점수로 승패가 갈리고, 랭킹에 반영돼요.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="scroll-mt-16 bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="일주일에 한 번, 동네 대항전"
          description="한 시즌은 4라운드, 한 라운드는 7일이에요. 매 라운드 새로운 상대와 새로운 미션이 기다려요."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="rounded-3xl bg-white p-6 ring-1 ring-gray-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-title text-lg text-white">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-500">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
