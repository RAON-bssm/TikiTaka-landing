import ShopPreview from '@/components/preview/ShopPreview';
import SectionHeading from '@/components/ui/SectionHeading';
import { SHOWCASE_CHARACTERS } from '@/constants/character';

export default function CharacterSection() {
  return (
    <section id="character" className="scroll-mt-16 py-5xl sm:py-6xl">
      <div className="mx-auto flex max-w-page flex-col gap-4xl px-lg sm:px-2xl">
        <SectionHeading
          eyebrow="CHARACTER & SHOP"
          title={
            <>
              나만의 캐릭터로
              <br />
              동네를 누벼요
            </>
          }
          description="활동으로 모은 포인트로 머리·눈·입·코스튬을 사고, 뽑기로 새 아이템을 얻어요. 꾸민 캐릭터가 지도와 피드에서 나를 대표해요."
        />
        <div className="mx-auto w-full max-w-[880px]">
          <ShopPreview characters={SHOWCASE_CHARACTERS} point={1250} />
        </div>
      </div>
    </section>
  );
}
