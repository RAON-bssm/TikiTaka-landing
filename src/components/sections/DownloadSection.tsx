import symbol from '@/assets/images/symbol.webp';
import StoreButtons from '@/components/ui/StoreButtons';

export default function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-16 px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary-600 px-6 py-14 text-center sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full border-[40px] border-white/10"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-secondary-500/20 blur-2xl"
        />
        <img
          src={symbol}
          alt=""
          className="relative mx-auto h-20 w-20 rounded-3xl bg-white p-3 shadow-xl"
        />
        <h2 className="relative mt-6 font-title text-3xl leading-tight text-white sm:text-5xl">
          이번 라운드,
          <br />
          우리 동네가 이길 차례
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-primary-100 sm:text-lg">
          지금 티키타카를 내려받고 동네 리그에 합류하세요.
        </p>
        <div className="relative mt-8 flex justify-center">
          <StoreButtons inverted />
        </div>
      </div>
    </section>
  );
}
