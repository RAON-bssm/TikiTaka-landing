import Typography from '@/components/ui/Typography';

interface Props {
  season: number;
  round: number;
  className?: string;
}

/** 앱 `components/ranking/StageBadge.tsx`. 점이 물결처럼 퍼지는 애니메이션까지 같다. */
export default function StageBadge({ season, round, className = '' }: Props) {
  return (
    <div
      className={`flex items-center gap-md rounded-full border border-gray-200 bg-white px-lg py-sm ${className}`}
    >
      <span className="relative flex h-md w-md items-center justify-center">
        <span className="absolute h-md w-md animate-ripple rounded-full bg-primary-600" />
        <span className="h-md w-md rounded-full bg-primary-600" />
      </span>
      <Typography as="span" variant="h4" className="text-primary-600">
        시즌 {season}
      </Typography>
      <span className="h-md border-l border-primary-300" />
      <Typography as="span" variant="body3" className="flex-1 text-center text-gray-700">
        {round}라운드 집계 중
      </Typography>
    </div>
  );
}
