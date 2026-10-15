import Character from '@/components/ui/Character';
import SectionHeading from '@/components/ui/SectionHeading';
import { SHOWCASE_CHARACTERS } from '@/constants/character';

const BACKGROUNDS = ['bg-secondary-100', 'bg-primary-100', 'bg-gray-100', 'bg-secondary-100'];

export default function CharacterSection() {
  return (
    <section id="character" className="scroll-mt-16 overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="CHARACTER"
          title={
            <>
              나만의 캐릭터로
              <br />
              동네를 누벼요
            </>
          }
          description="헤어스타일, 눈 색, 표정, 코스튬, 액세서리까지. 모은 포인트로 꾸민 캐릭터가 나를 대표해요."
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SHOWCASE_CHARACTERS.map((config, i) => (
            <li
              key={`${config.hairBack}-${config.clothing}`}
              className={`overflow-hidden rounded-3xl pt-4 ${BACKGROUNDS[i % BACKGROUNDS.length]}`}
            >
              <Character
                config={config}
                label="꾸민 캐릭터 예시"
                className="mx-auto w-full translate-y-[6%] transition-transform duration-300 hover:-translate-y-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
