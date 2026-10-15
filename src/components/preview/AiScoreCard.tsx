import Typography from '@/components/ui/Typography';

interface Props {
  score: number;
  comment: string;
}

/** 앱 `components/feed/AiScoreCard.tsx`. 점수는 display 변형에 5xl을 얹는다. */
export default function AiScoreCard({ score, comment }: Props) {
  return (
    <div className="flex items-center gap-xl rounded-md border border-gray-100 bg-white p-lg">
      <div className="flex flex-col items-center gap-xs">
        <Typography variant="h3" className="whitespace-nowrap text-gray-800">
          AI 평가 점수
        </Typography>
        <span className="text-5xl font-bold text-primary-600">{score}</span>
      </div>
      <span className="h-[81px] w-[2px] shrink-0 rounded-xs bg-gray-200" />
      <Typography variant="body2" className="flex-1 leading-relaxed text-gray-700">
        {comment}
      </Typography>
    </div>
  );
}
