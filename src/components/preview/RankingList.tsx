import placeIcon from '@/assets/icons/place.svg';
import Icon from '@/components/ui/Icon';
import Typography from '@/components/ui/Typography';

interface Row {
  location: string;
  address: string;
  count: number;
}

/** 앱 `components/ui/Ranking.tsx` 행을 쌓은 목록. 3위까지 순위 숫자가 주황이다. */
export default function RankingList({ rows }: { rows: Row[] }) {
  return (
    <ol className="w-full divide-y divide-gray-100 rounded-md border border-gray-100 bg-white">
      {rows.map((row, i) => (
        <li key={row.location} className="flex items-center justify-between gap-md px-md py-xl">
          <Typography
            as="span"
            variant="body1"
            className={`w-6 text-center ${i < 3 ? 'text-primary-600' : 'text-gray-500'}`}
          >
            {i + 1}
          </Typography>
          <div className="flex flex-1 flex-col items-center gap-xs">
            <Typography variant="body1" className="text-gray-800">
              {row.location}
            </Typography>
            <span className="flex items-center gap-xs">
              <Icon src={placeIcon} className="h-3 w-3 bg-gray-500" />
              <span className="text-xs font-medium text-gray-500">{row.address}</span>
            </span>
          </div>
          <Typography as="span" variant="body1" className="text-primary-600">
            {row.count}점
          </Typography>
        </li>
      ))}
    </ol>
  );
}
