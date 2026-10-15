import SectionHeading from '@/components/ui/SectionHeading';
import Typography from '@/components/ui/Typography';

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
    <section id="how" className="scroll-mt-16 bg-gray-50 py-5xl sm:py-6xl">
      <div className="mx-auto flex max-w-page flex-col gap-4xl px-lg sm:px-2xl">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="일주일에 한 번, 동네 대항전"
          description="한 시즌은 4라운드, 한 라운드는 7일이에요. 매 라운드 새로운 상대와 새로운 미션이 기다려요."
        />
        <ol className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col items-start gap-md rounded-md border border-gray-100 bg-white p-2xl"
            >
              <Typography
                as="span"
                variant="h4"
                className={`rounded-full px-md py-xs ${
                  i === STEPS.length - 1
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-100 text-primary-600'
                }`}
              >
                STEP {i + 1}
              </Typography>
              <Typography as="h3" variant="h2" className="text-gray-800">
                {step.title}
              </Typography>
              <Typography variant="body2" className="leading-relaxed text-gray-500">
                {step.body}
              </Typography>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
